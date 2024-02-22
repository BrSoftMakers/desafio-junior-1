import styles from '../../styles/petlist.module.css';
import PetIcon from './icons/PetIcon';
import PetDonoIcon from './icons/PetDonoIcon';
import PetNameIcon from './icons/PetNameIcon';
import PetArrowInfo from './icons/PetArrowInfo';
import Pets from './pets';
import { IPets } from '../../../types/pets';

interface PetListProps{
    pets:IPets[]
}

const PetList:React.FC<PetListProps> = ({ pets }) =>{
  return (
    <div className={styles.ContainerPetList}>
        

        {pets.map(pet => (
        <Pets key={pet.id} pet={pet}/>

      ))}
       
        <div className={styles.Pet}>

            <span className={styles.PetIcon}>
                <PetIcon/>
            </span>
            
            <div className={styles.ContainerPetInfo}>
              
                    <span className={styles.PetInfo}><PetNameIcon/> <p>Simba Farias</p></span>
                    <span className={styles.PetInfo}><PetDonoIcon/> <p>Emmanuel Farias</p></span>
                  
            
            </div> 

            <span> <PetArrowInfo/> </span>
            
        </div>
    </div>
  );
}
export default PetList
