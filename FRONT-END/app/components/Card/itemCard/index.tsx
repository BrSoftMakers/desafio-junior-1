"use client";
import { FormEvent, useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosAddCircleOutline, IoIosArrowDown } from "react-icons/io";
import { PiCat, PiDogLight } from "react-icons/pi";
import ItemActive from "../itemActive";

import Image from "next/image";
import toast from "react-hot-toast";
import { CiSearch } from "react-icons/ci";
import { api } from "../../../services/axios";
import Modal from "../../Modal";
import PaginationCard from "../PaginationCard";
interface DescVisibilityState {
  [key: string]: boolean;
}

interface PetListProps {
  id: string;
  name: string;
  owner: string;
  race: string;
  phone: string;
  type: string;
  date: string;
}

const ItemCard = () => {
  const [petList, setPetList] = useState<PetListProps[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [descVisibles, setDescVisible] = useState<DescVisibilityState>({});
  const [input, setInput] = useState("");
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    loadPets();
  }, [skip]);

  async function loadPets() {
    const response = await api.get(`/pet/take/12/skip/${skip}`);
    setPetList(response.data);
  }

  const toggleDescVisibility = (itemId: string) => {
    setDescVisible((prevDescVisible) => ({
      ...prevDescVisible,
      [itemId]: !prevDescVisible[itemId],
    }));
  };

  const toggleModal = () => {
    setModalVisible((prevVisible) => !prevVisible);
  };

  async function createpet(data: any) {
    try {
      toast.success("Pet adicionado com sucesso", {
        style: {
          background: "#0056E2",
          color: "#FFF",
        },
      });
      await api.post("/pet", data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleFindPetByName(e: FormEvent) {
    if (input === "") {
      loadPets();
      return;
    }
    e.preventDefault();
    setPetList([]);
    const response = await api.get(`/pet/take/10/skip/${skip}/${input}`);

    setPetList(response.data);
  }

  return (
    <div className="m-1 p-1 flex flex-col gap-10 relative ">
      <header className="">
        <Image
          className="mb-2 w-full max-w-36 "
          src="/logo.svg"
          alt="img"
          width={100}
          height={100}
        />

        <div className=" flex  gap-6  ">
          <form className="flex  .gradient border-4 border-colorDetailsHeader rounded  w-full ">
            <div className="bg-colorDetailsHeader h-11 p-1  flex items-center">
              <CiSearch size={40} color="#001436" />
            </div>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="outline-none px-1 text-colorText w-full "
              type="text"
            />
            <button
              onClick={handleFindPetByName}
              className="text-colorText px-4 py-1 bg-colorDetailsHeader m-1"
            >
              Pesquisar
            </button>
          </form>

          <button
            onClick={toggleModal}
            className="flex  items-center gap-2  bg-gradient-to-r from-gradientBottomColorOne to-gradientBottomColorTwo py-3 px-4 rounded-md text-colorText"
          >
            <IoIosAddCircleOutline size={25} />
            Cadastrar
          </button>
        </div>
      </header>
      <div className="grid grid-cols-4 gap-4">
        {petList.map((item) => (
          <section className=" gradientCard basis-1 rounded-lg transition duration-300  hover:outline outline-offset-2 outline-colorSecondary w-full max-w-96 ">
            <div
              key={item.id}
              className="flex items-center justify-start mx-4 my-5 gap-4 w-full   "
            >
              <div className=" bg-gradient-to-r from-gradientBottomColorOne to-gradientBottomColorTwo rounded-full p-3 ">
                {item.type === "cachorro" ? (
                  <PiDogLight className="" size={40} color="#FFF" />
                ) : (
                  <PiCat
                    className="flex items-center justify-center max-w"
                    size={40}
                    color="#FFF"
                  />
                )}
              </div>
              <div>
                <div className="flex gap-2 items-center my-1">
                  {item.type === "cachorro" ? (
                    <PiDogLight
                      className="flex items-center -w"
                      size={20}
                      color="#FFF"
                    />
                  ) : (
                    <PiCat
                      className="flex items-center justify-center "
                      size={20}
                      color="#FFF"
                    />
                  )}
                  <p className="text-colorText">{item.name}</p>
                </div>
                <div className="flex gap-2 items-center my-1 ">
                  <FaRegUserCircle size={20} color="#FFF" />
                  <p className="text-colorText">{item.owner}</p>
                </div>
              </div>
              <div className="flex items-center  flex-col ">
                <button
                  onClick={() => toggleDescVisibility(item.id)}
                  className=" flex"
                >
                  <IoIosArrowDown size={40} color="#FFF" />
                </button>
                <ItemActive
                  descVisibles={descVisibles[item.id]}
                  phone={item.phone}
                  race={item.race}
                  data={""}
                  age={item.date}
                  type={item.type}
                  owner={item.owner}
                  id={item.id}
                  name={item.name}
                />
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center ">
        {modalVisible && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-colorBack bg-opacity-50">
            <Modal
              names="Adicionar"
              type="Adicionar"
              close={!modalVisible}
              handle={toggleModal}
              handleCreate={createpet}
              petData={null}
            />
          </div>
        )}
      </div>
      <div className="flex justify-end items-end gap-10">
        <PaginationCard
          handlePrev={() => setSkip((old) => Math.max(old - 1, 0))}
          handleNext={() =>
            setSkip((old) => (petList.length > 0 ? old + 1 : old))
          }
          page={skip}
        />
      </div>
    </div>
  );
};

export default ItemCard;
