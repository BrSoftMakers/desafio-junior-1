"use client"
/* eslint-disable @next/next/no-img-element */
import styles from '@/components/FormCreateModal/FormCreateModal.module.css'
import axios from '@/api/index'



interface CreateModalProps {
  onClose: () => void;
}

function addPet(event) {
  event.preventDefault();
  event.stopPropagation();

  let name: string = document.getElementById('name')
  let owner: string = document.getElementById('owner')
  let phone: string = document.getElementById('phone')
  let race: string = document.getElementById('race')
  let birth: string = document.getElementById('birth')

  // checked inputs
  let dog = document.getElementById('dog')
  let cat = document.getElementById('cat')

  var animalType: string = ''

  if (dog.checked) {
    animalType == 'dog'
  } else {
    animalType == 'cat'
  }

  const pet = {
    name: name.value,
    owner: owner.value,
    phone_number: phone.value,
    race: race.value,
    birth: birth.value,
    species: animalType
  }

  axios.post('/pets', pet).then(() => {
    window.location.href = '/'

  })


}

export const FormCreateModal: React.FC<CreateModalProps> = ({ onClose }) => {

  return (
    <form className={styles.formCreateModal}>
      <div className={styles.modalCreateLeftSide}>
        <label className={styles.label} htmlFor="name" >
          <p>nome</p>
          <input className={styles.inputText} type="text" name="name" placeholder='Nome do pet' id='name' /></label>


        <label className={styles.label} htmlFor="owner" >
          <p>Dono</p>
          <input className={styles.inputText} type="text" name="owner" placeholder='Nome do Dono' id='owner' />
        </label>


        <label className={styles.label} htmlFor="phone">
          <p>Telefone</p>
          <input className={styles.inputText} type="phone" name="Telefone" placeholder='Telefone para contato' maxLength={11} id='phone' />
        </label>


        <button onClick={onClose} className={styles.buttonClose}>
          <img src="/images/union.png" alt="" />
          <p>Voltar</p>
        </button>
        <div />

      </div>



      <div className={styles.modalCreateRigthSide}>
        <label className={styles.label}>Animal</label>
        <div className={styles.selector}>

          <div>
            <label className={styles.label} htmlFor="dog">Cachorro</label>
            <input type="checkbox" name="dog" id="dog" />
          </div>


          <div>
            <label className={styles.label} htmlFor="cat">Gato</label>
            <input type="checkbox" name="cat" id='cat' />
          </div>
        </div>

        <label className={styles.label} htmlFor="race">Raça</label>
        <input className={styles.inputText} type="text" name="race" placeholder='Raça do animal' id='race' />

        <label className={styles.label} htmlFor="birth" >Nascimento</label>
        <input className={styles.inputText} type="date" id='birth' />

        <button type="submit" onClick={addPet} className={styles.buttonCadastrar}>
          <img src="/images/cadastrarIcon.png" alt="" />
          <p>Cadastrar</p>
        </button >
      </div>



    </form>
  );
};