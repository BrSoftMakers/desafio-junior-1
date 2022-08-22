import React, { useContext } from 'react'

import { BsPencilSquare, BsX } from "react-icons/bs"

import { Context } from '../App'

function Card({pet, openModal}) {
  const context = useContext(Context)
  const handleDelete = context.handleDelete

  return (
    <div className='card' >
      <h3>{pet.name}</h3>
      <div className='card-items'>
        <span>Age: {pet.age}</span>
        <span>Type: {pet.type}</span>
        <span>Race: {pet.race}</span>
        <span>Owner: {pet.owner}</span>
        <span>Owner's Address: {pet.address}</span>
 
        <div className='card-icons'>
          <BsPencilSquare onClick={() => openModal(pet)}/>
          <BsX onClick={() => handleDelete(pet)}/>
        </div>
      </div>
    </div>
  )
}

export default Card