import React, { useState, useContext } from "react"
import Modal from "react-modal"

import Card from "../components/Card"

import { Context } from "../App"

function Home() {
  const context = useContext(Context)
  const pets = context.pets
  const handleChangeUpdate = context.handleChangeUpdate
  const handleGetUpdateValues = context.handleGetUpdateValues
  const handleUpdate = context.handleUpdate

  const [pet, setPet] = useState('')

  //Modal
  Modal.setAppElement("#root")

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const openModal = (pet) => {
    setModalIsOpen(true)
    setPet(pet)
    handleGetUpdateValues(pet)
  }

  return (
    <div className="cards-spacing">
      <div className="cards-container">
        {typeof pets !== "undefined" &&
          pets.map(pet => {
            return <Card key={pet.id} pet={pet} openModal={openModal} />
          })}

        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className='modal'>
              <div className="form">
                <div>
                  <input
                    type="text"
                    required
                    name="name"
                    defaultValue={pet.name}
                    placeholder="Pet's name"
                    onChange={(e) => handleChangeUpdate(e)}
                  />
                </div>
                <div>
                  <input
                    type="number"
                    required
                    name="age"
                    defaultValue={pet.age}
                    placeholder="Pet's age"
                    onChange={(e) => handleChangeUpdate(e)}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="type"
                    placeholder="Specie"
                    defaultValue={pet.type}
                    onChange={(e) => handleChangeUpdate(e)}
                  />
                </div>
                <div>

                  <input
                    type="text"
                    name="race"
                    placeholder="Race"
                    defaultValue={pet.race}
                    onChange={(e) => handleChangeUpdate(e)}
                  />
                </div>

                <div>

                  <input
                    type="text"
                    name="owner"
                    placeholder="Owner's name"
                    defaultValue={pet.owner}
                    onChange={(e) => handleChangeUpdate(e)}
                  />
                </div>

                <div>

                  <input
                    type="text"
                    name="address"
                    placeholder="Owner's address"
                    defaultValue={pet.address}
                    onChange={(e) => handleChangeUpdate(e)}
                  />
                </div>

                <div className="button-container">
                  <button onClick={closeModal}>Cancel</button>
                  <button onClick={() => {
                    handleUpdate()
                    closeModal()
                    }}>Send</button>
                  
                </div>

              </div>


        {/* <div className="">
          <section className="">
          </section>
        </div> */}
          
        </Modal>
      </div>
    </div>
  )
}

export default Home
