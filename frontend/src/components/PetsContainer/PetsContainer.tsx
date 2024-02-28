/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use cliente"
import styles from "../../app/page.module.css";

import axios from '../../api/index'
import { useEffect, useState } from "react";
import { CreateEditModal } from "../CreateEditModal";
import { FormEditModal } from "../FormEditModal/FormEditModal";

type petsProps = {
  id: string
  name: string
  owner: string
  phone_number: string
  species: string
  race: string
  birth: string
}



export const PetsContainer: React.FC<petsProps> = (petsProps) => {

  const [pets, setPets] = useState([petsProps])

  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);  //ESTADOS PARA CONTROLAR SE ESTÁ open OU close

  const handleOpenEditModal = () => setIsModalOpenEdit(true);
  const handleCloseEditModal = () => setIsModalOpenEdit(false);

  useEffect(() => {
    try {
      axios.get('/pets').then((response) => {
        setPets(response.data)
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  function deletePet(id: any) {
    axios.delete(`/pets/${id}`).then(() => {
      window.location.href = '/'
    })

  }

  return (
    <>
      {pets.map((pet, key) => (
        <div key={key} className={styles.petContainer}>
          <div className={styles.pataImgContainer}>
            <img src="/images/patas.png" alt="" className={styles.pataImg} />
          </div>

          <div className={styles.dataPetsContainer}>
            <div>
              <div className={styles.petTextOrganizer}>
                <img src="/images/petNameIcon.png" alt="" />
                <p>{pet.name}</p>
              </div>
              <div className={styles.petTextOrganizer}>
                <img src="/images/ownerNameIcon.png" alt="" />
                <p>{pet.owner}</p>
              </div>
            </div>
            <div>
              <div className={styles.buttonsContainer}>
                <button className={styles.buttonDelete} onClick={() => deletePet(pet.id)}>
                  <img src="/images/lixeira.png" alt="" className={styles.buttonPetImg} />
                </button>
                <button className={styles.buttonEdit} onClick={handleOpenEditModal}>
                  <img src="/images/lapis.png" alt="" className={styles.buttonPetImg} />
                </button>
              </div>
            </div>

          </div>

          {/* Edit Modal */}
          <CreateEditModal isOpenEdit={isModalOpenEdit} onCloseEdit={handleCloseEditModal} >
            <div className={styles.headerModal}>
              <div className={styles.headerModalText}>
                <div className={styles.headerModalImage}>
                  <img src="/images/cadastrarIcon_2.png" alt="" />
                </div>
                <h1>Cadastrar</h1>
              </div>
              <button onClick={handleCloseEditModal} className={styles.modalClosseButton}>x</button>
            </div>


            <FormEditModal onCloseEdit={handleCloseEditModal} id={pet.id} />
          </CreateEditModal>


        </div>
      ))}
    </>
  )
}