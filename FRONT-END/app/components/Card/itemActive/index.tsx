import { useState } from "react";
import toast from "react-hot-toast";
import { FaPhoneVolume } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoMdCalendar } from "react-icons/io";
import { PiDna } from "react-icons/pi";
import { api } from "../../../services/axios";
import Modal from "../../Modal";

interface ItemActiveProps {
  phone: string;
  race: string;
  date?: Date;
  data: string;
  descVisibles?: boolean;
  age: string;
  owner: string;
  type: string;
  id: string;
  name: string;
}

const ItemActive = ({
  phone,
  race,
  data,
  descVisibles,
  age,
  owner,
  id,
  name,
  type,
}: ItemActiveProps) => {
  if (!descVisibles) {
    return null;
  }
  const [modalVisiblEdit, setModalVisibleEdit] = useState(false);

  const toggleModalEdit = () => {
    setModalVisibleEdit((prevVisible) => !prevVisible);
  };
  const [modalVisibleDelete, setModalVisibleDelete] = useState(false);

  const toggleModalDelete = () => {
    setModalVisibleDelete((prevVisible) => !prevVisible);
  };

  const updatePet = async (data: any) => {
    try {
      await api.patch(`/pet/${id}`, data);
      toast.success("Pet atualizado", {
        style: {
          background: "#0056E2",
          color: "#FFF",
        },
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const deletePet = async () => {
    try {
      await api.delete(`/pet/${id}`);
      toast.success("Pet removido", {
        style: {
          background: "#0056E2",
          color: "#FFF",
        },
      });

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col z-10 absolute gradient border-2 border-colorSecondary shadow-colorSecondary/90 p-4 w-72 h-56 mr-36 mt-16 rounded-lg ">
      <div className="flex items-center gap-3 ">
        <PiDna color="#fff" />
        <span className="text-colorText text-center">Raça: {race}</span>
      </div>
      <div className="flex items-center gap-3 ">
        <FaPhoneVolume color="#fff" />
        <span className="text-colorText text-center">Telefone: {phone}</span>
      </div>
      <div className="flex items-center gap-3 ">
        <IoMdCalendar color="#fff" />
        <span className="text-colorText text-center">Idade: {age}</span>
      </div>
      <div>
        <div className="w-full ">
          <button
            onClick={toggleModalEdit}
            className="flex items-center justify-center rounded-md gap-3 my-3 p-2 bg-colorText w-full"
          >
            <FaRegPenToSquare color="#0056E2" />
            <p className="text-colorSecondary text-center">Editar</p>
          </button>
        </div>
        <div className="w-full">
          <button
            onClick={toggleModalDelete}
            className="flex items-center justify-center rounded-md gap-3 my-3 p-2 bg-colorSecondary w-full"
          >
            <FaRegPenToSquare color="#FFF" />
            <p className="text-colorText">Remover</p>
          </button>
        </div>
      </div>

      {modalVisiblEdit && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-colorBack bg-opacity-50">
          <Modal
            names="Editar"
            close={!modalVisiblEdit}
            handle={toggleModalEdit}
            type="Editar"
            handleCreate={updatePet}
            petData={{ name, phone, race, type, id, owner }}
          />
        </div>
      )}
      {modalVisibleDelete && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-colorBack bg-opacity-50">
          <Modal
            names="Deletar"
            close={!modalVisibleDelete}
            handle={toggleModalDelete}
            type="Deletar"
            handleCreate={deletePet}
            petData={{ name, phone, race, type, id, owner }}
          />
        </div>
      )}
    </div>
  );
};

export default ItemActive;
