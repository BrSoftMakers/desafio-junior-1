"use client"

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import petIcon from '@/app/assets/petIcon.svg';
import setaModal from '@/app/assets/seta-modal.svg';
import nameDono from '@/app/assets/nameDono.svg';
import namePet from '@/app/assets/namePet.svg';
import editeIcon from '@/app/assets/editeIcon.svg';
import removeIcon from '@/app/assets/removeIcon.svg';
import ageIcon from "@/app/assets/ageIcon.svg";
import dateIcon from "@/app/assets/dateIcon.svg";
import phoneIcon from "@/app/assets/phoneIcon.svg";
import RemoveModal from "./remove-modal";
import EditeModal from "./edite-modal";

interface CardPetProps {
  petName: string;
  ownerName: string;
}
type StyleOptionModal = "remove" | "update" | 'closed' 

const CardPet: React.FC<CardPetProps> = ({ petName, ownerName }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalWidth, setModalWidth] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [HowModal, setHowModal] = useState<StyleOptionModal>('closed');
  const [registerIsOpe, setRegisterIsOpen] = useState<boolean>()
  
  useEffect(() => {
    function handleResize() {
      if (modalOpen && modalRef.current) {
        const siblingWidth = getSiblingWidth();
        setModalWidth(siblingWidth);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [modalOpen]);

  const getSiblingWidth = () => {
    if (modalRef.current) {
      const sibling = modalRef.current.previousElementSibling;
      if (sibling instanceof HTMLElement) {
        return sibling.offsetWidth;
      }
    }
    return null;
  };

  const handleClickModal = () => {
    if (!modalOpen) {
      const siblingWidth = getSiblingWidth();
      setModalWidth(siblingWidth);
    }
    setModalOpen(!modalOpen);
  };

  const handleClickUpdate = () => {
    setHowModal("update");
  }

  const handleClickRemove = () => {
    setHowModal("remove");
  }
  

  const handleClickModalRegisterOpen = () => {
    setHowModal("closed")
  }

  return (
    <span className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 pr-4">
      <span
          style={
            {
              borderRadius: "10px",
              background: "linear-gradient(80deg, rgba(0, 30, 77, 1) 20%, rgba(0, 8, 20, 1) 100%", backgroundRepeat: 'no-repeat'}
          }
        className={`flex my-1 rounded-md border-2 p-2 w-auto justify-around items-center ${modalOpen ? 'border-blue-500 bg-blue-500' : "border-transparent"} hover:border-blue-500 hover:bg-blue-500`}>
        <Image src={petIcon} alt="pet-icon" className="size-16"/>
        <div>
          <p className="flex gap-2">
            <Image src={namePet} alt="name-pet" />
            {petName}
          </p>
          <p className="flex gap-2">
            <Image src={nameDono} alt="name-dono" />
            {ownerName}
          </p>
        </div>
        <button onClick={handleClickModal}>
          <Image src={setaModal} alt="modal-open" />
        </button>
      </span>

      {modalOpen && (
        <div
          ref={modalRef}
          style={
            {
              width: modalWidth || 0,
              borderRadius: "10px",
              background: "linear-gradient(80deg, rgba(0, 30, 77, 1) 20%, rgba(0, 8, 20, 1) 100%", backgroundRepeat: 'no-repeat'}
          }
          className="absolute p-5 my-1 bg-gradient-to-r from-blue-950 to-slate-900 border-blue-500 border-2 rounded-md"
        >
          <p className="flex gap-2 truncate"><Image src={dateIcon} alt="pet-name"/> Raça: dog</p>
          <p className="flex gap-2 truncate"><Image src={phoneIcon} alt="phone-number"/> telefone: 129192912</p>
          <p className="flex gap-2 truncate"><Image src={ageIcon} alt="age"/> idade: 2 anos (19/12/1998)</p>
          <div className="flex flex-col gap-3 mt-4 w-auto">
            <button
              onClick={handleClickUpdate}
              className="flex w-auto h-12 justify-center gap-2 rounded-md items-center bg-white">
              <Image src={editeIcon} alt="edite-icon" className="size-4"/>
              <p className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">Editar</p>
            </button>
            <button
              onClick={handleClickRemove}
              className="flex w-auto h-12 justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md items-center">
              <Image src={removeIcon} alt="remove-icon" className="size-4"/>
              Remover
            </button>
          </div>
        </div>
      )}
      {
        HowModal === 'update' && <EditeModal openClosed={handleClickModalRegisterOpen} /> 
      }
      {
        HowModal === "remove" && <RemoveModal openClosed={handleClickModalRegisterOpen} />
      }
    </span>
  );
};

export default CardPet;
