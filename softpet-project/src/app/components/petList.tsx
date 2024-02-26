import styles from '../../styles/petlist.module.css';
import Pets from './pets';
import { IPets } from '../../../types/pets';
import { useEffect, useState } from 'react';

interface PetListProps {
  pets: IPets[];
  searchpet: string;
}

const PetList: React.FC<PetListProps> = ({ pets, searchpet }) => {
  const [selectedPet, setSelectedPet] = useState<IPets | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [petsPerPage] = useState(16);

  const handlePetClick = (pet: IPets) => {
    if (selectedPet && selectedPet.id === pet.id) {
      setSelectedPet(null);
      setIsPopupOpen(false);
    } else {
      setSelectedPet(pet);
      setIsPopupOpen(true);
    }
  };
  const [filteredPets, setFilteredPets] = useState<IPets[]>([]);

  useEffect(() => {
    const filtered = pets.filter((pet) => {
      return pet.nome.toLowerCase().includes(searchpet.toLowerCase());
    });
    setFilteredPets(filtered);
  }, [searchpet, pets]);

  const indexOfLastPet = currentPage * petsPerPage;
  const indexOfFirstPet = indexOfLastPet - petsPerPage;
  const currentPets = filteredPets.slice(indexOfFirstPet, indexOfLastPet);

  const MudarPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setSelectedPet(null); 
    setIsPopupOpen(false);
    console.log('Mudou de página. Nova página:', pageNumber);
  };

  console.log('Current Page:', currentPage);
  console.log('Index of First Pet:', indexOfFirstPet);
  console.log('Selected Pet:', selectedPet);

  return (
    <main>
      <div className={styles.ContainerPetList}>
        {currentPets.map((pet, index) => (
          <Pets
            key={index + indexOfFirstPet} 
            pet={pet}
            onClick={() => handlePetClick(pet)}
            selectedPet={selectedPet}
            isClicked={isPopupOpen && selectedPet?.id === pet.id}
          />
        ))}
      </div>
      <div className={styles.Pagination_Container}>
        <div className={styles.Pagination}>
        <button
          className={styles.PaginationButton}
          onClick={() => {
            setCurrentPage(currentPage - 1);
            setSelectedPet(null); 
            setIsPopupOpen(false); 
          }}
          disabled={currentPage === 1}
        >
          Anterior
        </button>


        {[...Array(Math.ceil(filteredPets.length / petsPerPage))].map((_, index) => (
          
          <button
            key={index}
            className={`${styles.PaginationButton} ${currentPage === index + 1 ? styles.Active : ''}`}
            onClick={() => MudarPage(index + 1)}
          >{<span>de</span>}
            {index + 1}
          </button>
        ))}


        <button
          className={styles.PaginationButton}
          onClick={() => {
            setCurrentPage(currentPage + 1);
            setSelectedPet(null); 
            setIsPopupOpen(false); 
          }}
          disabled={currentPage === Math.ceil(filteredPets.length / petsPerPage)}
        >
          Próximo
        </button>
        </div>
      </div>
    </main>
  );
};

export default PetList;
