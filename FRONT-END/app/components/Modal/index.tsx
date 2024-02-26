"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { BsArrowLeftCircle } from "react-icons/bs";
import { FaRegEdit, FaRegTrashAlt, FaRegUserCircle } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosAddCircleOutline, IoMdCalendar } from "react-icons/io";
import { LiaDnaSolid } from "react-icons/lia";
import { SiDatadog } from "react-icons/si";

interface ModalProps {
  type: string;
  names: string;
  close?: boolean;
  x?: boolean;
  handle?: () => void;
  handleCreate: (data: any) => void;
}
interface PetListProps {
  id: string;
  name: string;
  owner: string;
  race: string;
  phone: string;
  type: string;
  date?: string;
}
const Modal = ({
  type,
  names,
  close,
  handle,
  handleCreate,
  petData,
}: ModalProps & { petData: PetListProps | null }) => {
  if (close) {
    return null;
  }

  const handleClose = () => {
    if (handle) {
      handle();
    }
  };

  let icon;

  switch (type) {
    case "Deletar":
      icon = <FaRegTrashAlt size={40} color="#DDD" />;
      break;
    case "Editar":
      icon = <FaRegEdit size={38} color="#DDD" />;
      break;
    case "Adicionar":
      icon = <IoIosAddCircleOutline size={40} color="#DDD" />;
      break;
    default:
      icon = null;
  }

  const form = useForm<PetListProps>({
    defaultValues: {
      name: "",
      date: "",
      owner: "",
      phone: "",
      race: "",
      type: "",
    },
  });
  const { register, formState, handleSubmit, reset } = form;
  const { errors, isSubmitSuccessful } = formState;

  const onSubmit = async (data: PetListProps) => {
    handleCreate(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  useEffect(() => {
    if (petData) {
      reset(petData);
    }
  }, [petData, reset]);

  return (
    <div className="flex justify-center items-center mt-40 mr-72 ">
      <div className="flex flex-col gradient rounded-2xl outline outline-offset-2 outline-colorSecondary mb-52 ml-96 justify-center">
        <div className="flex items-center justify-between m-3 p-3">
          <div className="flex items-center justify- gap-3">
            <div className="text-colorText bg-colorSecondary p-4 ml-6 rounded-full">
              {icon}
            </div>
            <h2 className="text-colorText font-extrabold text-2xl">{names}</h2>
          </div>
          <div className="mr-5">
            <button
              onClick={handleClose}
              className="opacity-70 text-colorText p-10"
            >
              X
            </button>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col m-3 p-3  w-full"
        >
          <div className="flex items-center">
            <div className="flex  items-center gap-4 flex-col px-8">
              <div className="flex flex-col">
                <label
                  className="text-colorText flex gap-2 items-center"
                  htmlFor="name"
                >
                  <SiDatadog size={15} color="#FFF" />
                  Nome
                </label>
                <input
                  placeholder="Digite o nome do pet"
                  {...register("name", {
                    maxLength: 10,
                    required: {
                      value: true,
                      message: "Campo obrigatório",
                    },
                  })}
                  className="bg-colorDetailsHeader rounded-md px-2 py-1  outline-none text-colorText"
                  type="text"
                />
                <p className="validate">{errors?.name?.message}</p>
                {errors?.name && errors.name.type === "maxLength" && (
                  <span className="validate">
                    Este nome execedeu o limite(10){" "}
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  className="text-colorText flex gap-2 items-center"
                  htmlFor="owner"
                >
                  <FaRegUserCircle size={15} color="#FFF" />
                  Dono
                </label>
                <input
                  placeholder="Digite o nome do dono"
                  {...register("owner", {
                    required: {
                      value: true,
                      message: "Campo obrigatorio",
                    },
                  })}
                  className="bg-colorDetailsHeader rounded-md px-2 py-1  outline-none text-colorText"
                  type="text"
                />
                <p className="validate">{errors?.owner?.message}</p>
              </div>

              <div className="flex flex-col">
                <label
                  className="text-colorText flex gap-2 items-center"
                  htmlFor="phone"
                >
                  <FiPhoneCall size={15} color="#FFF" />
                  Telefone
                </label>
                <input
                  placeholder="(DD) #####-####"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Campo obrigatorio",
                    },
                    minLength: 11,
                  })}
                  className="bg-colorDetailsHeader rounded-md px-2 py-1  outline-none text-colorText"
                  type="text"
                />
                <p className="validate">{errors?.phone?.message}</p>
                {errors?.phone && errors?.phone?.type === "minLength" && (
                  <span className="validate">
                    Este número precisa ter 11 digitos
                  </span>
                )}
              </div>
            </div>
            <div className=" flex flex-col gap-2 px-8">
              <label
                className="text-colorText flex gap-2 items-center"
                htmlFor="radio1"
              >
                <LiaDnaSolid size={15} color="#FFF" />
                Animal
              </label>
              <div className="flex gap-3">
                <div className="flex gap-3 items-center justify-center border-2 border-colorText px-2 py-1">
                  <input
                    {...register("type")}
                    id="radio1"
                    type="radio"
                    value="cachorro"
                  />
                  <label htmlFor="radio1" className="text-colorText">
                    Cachorro
                  </label>
                </div>
                <div className="flex gap-3 items-center justify-center border-2 border-colorText  active::opacity-5 px-2 py-1">
                  <input
                    {...register("type")}
                    id="radio2"
                    type="radio"
                    value="gato"
                  />
                  <label htmlFor="radio2" className="text-colorText">
                    Gato
                  </label>
                </div>
              </div>

              <div className="flex flex-col">
                <label
                  className="text-colorText flex gap-2 items-center"
                  htmlFor="race"
                >
                  <LiaDnaSolid size={15} color="#FFF" />
                  Raça
                </label>
                <input
                  {...register("race", {
                    required: {
                      value: true,
                      message: "Campo obrigatorio",
                    },
                  })}
                  className="bg-colorDetailsHeader rounded-md px-2 py-1  outline-none text-colorText"
                  type="text"
                />
                <p className="validate">{errors?.race?.message}</p>
              </div>

              <div className=" flex flex-col">
                <label
                  className="text-colorText flex gap-2 items-center"
                  htmlFor="data"
                >
                  <IoMdCalendar size={15} color="#FFF" />
                  Nascimento <span className="opacity-20">(Aproximado)</span>
                </label>
                <input
                  {...register("date")}
                  type="date"
                  className="bg-colorDetailsHeader rounded-md px-2 py-1  outline-none text-colorText"
                />
                <p className="validate">{errors?.date?.message}</p>
              </div>
            </div>
          </div>
          {type === "Deletar" && (
            <div className="mt-6 flex items-center justify-center">
              <h2 className="text-center text-colorText font-extrabold">
                Tem certeza que deseja remover este pet?
              </h2>
            </div>
          )}
          <div className="flex  gap-3 justify-around my-10 ">
            <div className="bg-colorText px-8 py-2 rounded flex items-center">
              <button
                onClick={handleClose}
                className="flex items-center gap-3 text-colorSecondary "
              >
                <BsArrowLeftCircle />
                <span> Voltar</span>
              </button>
            </div>
            <div
              className={`bg-${
                type !== "Deletar" ? "colorSecondary" : "colorBtnRemove"
              } px-8 py-2 rounded flex items-center`}
            >
              <button className="flex items-center gap-3 text-colorText ">
                {type === "Adicionar" && (
                  <IoIosAddCircleOutline size={25} color="#DDD" />
                )}
                {type === "Editar" && <FaRegEdit />}
                {type === "Deletar" && <FaRegTrashAlt />}
                <span>
                  {" "}
                  {type === "Adicionar" && "Adicionar"}
                  {type === "Editar" && "Editar"}
                  {type === "Deletar" && "Deletar"}
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
