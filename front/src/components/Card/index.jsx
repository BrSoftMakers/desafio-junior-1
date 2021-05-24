import { CardContainer, CardItem, IconsCSS } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faPen,
  faStar,
  faStarHalf
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Card({
  openModal,
  img,
  name,
  specie,
  breed,
  deletePet,
  edit,
  setFav,
  removeFav,
  favPag
}) {
  return (
    <CardContainer>
      <CardItem onClick={openModal}>
        <img src={img} alt="" />
        <div>
          <p>{name}</p>
          <span>{specie}</span>
          <span>{breed}</span>
        </div>
      </CardItem>
      <IconsCSS>
        <div className="icons">
          <FontAwesomeIcon
            onClick={deletePet}
            className="icon"
            icon={faTrash}
          />
          <FontAwesomeIcon onClick={edit} className="icon" icon={faPen} />
        </div>
        <div>
          {favPag ? (
            <FontAwesomeIcon
              onClick={removeFav}
              className="icon"
              icon={faStar}
            />
          ) : (
            <FontAwesomeIcon
              onClick={setFav}
              className="icon"
              icon={faStarHalf}
            />
          )}
        </div>
      </IconsCSS>
    </CardContainer>
  );
}
