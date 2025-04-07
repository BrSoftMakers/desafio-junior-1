import {
  ChevronDown,
  Pencil,
  Trash2,
  Dog,
  User,
  Phone,
  Calendar,
} from "lucide-react";
import { PetCardProps } from "../interfaces";
import { petIcon } from "../../../public";
import Image from "next/image";
import { format, differenceInYears } from "date-fns";
import { ptBR } from "date-fns/locale";
import PetForm from "./petForm";

export default function PetCard({ pet, isOpen, onToggle, onEdit, onRemove, onDetails }: PetCardProps) {
  const { id, name, customerName, breed, contact, age } = pet;

  const formattedDate = age
    ? format(new Date(age), "dd/MM/yyyy", { locale: ptBR })
    : "";
  const ageInYears = age
    ? differenceInYears(new Date(), new Date(age))
    : null;

  return (
    <div className="bg-white p-4 rounded-xl text-black border border-gray-300 w-[390px] shadow-sm transition-all duration-200 hover:border-[#00a8e4] hover:border-[1px] hover:bg-gray-100">
      <div className="flex items-center w-full">
        <Image
          src={petIcon}
          alt="Pet"
          width={64}
          height={64}
          className="rounded-full object-cover"
        />
        <div className="flex flex-col flex-1 ml-4 overflow-hidden">
          <div className="text-sm font-semibold text-gray-800 truncate flex items-center gap-2">
            <Dog size={16} /> {name}
          </div>
          <div className="text-sm font-medium text-gray-600 truncate flex items-center gap-2 mt-1">
            <User size={16} /> {customerName}
          </div>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-700">
        <div className="flex flex-col gap-1">
          {breed && (
            <div className="flex items-center gap-2">
              <Dog size={16} /> <span>{breed}</span>
            </div>
          )}
          {contact && (
            <div className="flex items-center gap-2">
              <Phone size={16} /> <span>{contact}</span>
            </div>
          )}
          {age && (
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>
                Nasc.: {formattedDate} ({ageInYears} {ageInYears === 1 ? "ano" : "anos"})
              </span>
            </div>
          )}
        </div>

        <div className="mt-4 flex justify-between gap-2">
          <button
            onClick={() => onEdit(pet)}
            className="flex-1 flex items-center justify-center gap-2 bg-gray-700 text-white px-3 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
          >
            <Pencil size={16} /> Editar
          </button>

          {id !== undefined && (
            <button
              onClick={() => onRemove(pet)}
              className="flex-1 flex items-center justify-center gap-2 bg-gray-600 text-white px-3 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
            >
              <Trash2 size={16} /> Remover
            </button>
          )}

          {id !== undefined && (
            <button
              onClick={() => onDetails(pet)}
              className="flex-1 flex items-center justify-center gap-2 bg-gray-500 text-white px-3 py-2 rounded-md hover:bg-gray-600 transition-colors duration-200 cursor-pointer"
            >
              <ChevronDown
                size={16}
                className={`transform transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
              Ver mais
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
