import styles from '../../styles/petlist.module.css';
import Pets from './pets';
import { IPets } from '../../../types/pets';
import { useEffect, useState } from 'react';

interface PetListProps {
  pets: IPets[];
  searchpet: string; 
}

const PetList: React.FC<PetListProps> = ({ pets, searchpet}) => {
  const [selectedPet, setSelectedPet] = useState<IPets | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [petsPerPage] = useState(16);

  const handlePetClick = (pet: IPets,index: number) => {
    console.log("Índice do pet selecionado:", index);
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


  return (
    <main>
      <div className={styles.ContainerPetList}>
        
        {currentPets.map((pet, index) => (
          
          <Pets
            key={index + indexOfFirstPet} 
            pet={pet}
            onClick={() => handlePetClick(pet,index)}
            selectedPet={selectedPet}
            isClicked={isPopupOpen && selectedPet?.id === pet.id}
            className={index >= 7 ? styles.PetsWithSelectUp : ''}
            
          />
          
        ))}
      
      </div>
      <div className={styles.Pagination_Container}>
        <div className={styles.Pagination}>
        <button
          className={styles.PaginationButton}
          onClick={() => {
            setCurrentPage(currentPage - 1);
            if (currentPage < 0 ){

            }
            setSelectedPet(null); 
            setIsPopupOpen(false); 
          }}
          disabled={currentPage === 1}
        >
         <img src="/ArrowPageBack.svg" alt="" />
        </button>

       <div className={styles.Pagination_info}>{currentPage} <span>de</span> {Math.ceil(filteredPets.length / petsPerPage)}</div> 

        <button
          className={styles.PaginationButton}
          onClick={() => {
            setCurrentPage(currentPage + 1);
            setSelectedPet(null); 
            setIsPopupOpen(false); 
          }}
          disabled={currentPage === Math.ceil(filteredPets.length / petsPerPage)}
        >
          <img src="/ArrowPageNext.svg" alt="" />
        </button>
        </div>
      </div>
    </main>
  );
};

export default PetList;
