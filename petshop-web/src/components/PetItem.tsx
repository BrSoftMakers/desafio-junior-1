"use client";

import { SquarePen } from "lucide-react";
import Icon from "@/components/Icon";
import { cn } from "@/lib/utils";
import { formatAge, formatBirthDate } from "@/lib/utils";
import { Pet } from "@/types/pet";
import { maskPhone } from "@/lib/utils";

interface PetItemProps {
  pet: Pet;
  open: boolean;
  onToggle: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export default function PetItem({
  pet,
  open,
  onToggle,
  onEdit,
  onDelete,
}: PetItemProps) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="bg-card-gradient ring-gradient relative flex h-24 w-full items-center gap-4 rounded-lg px-4 text-left"
      >
        <span className="bg-brand-gradient flex size-16 shrink-0 items-center justify-center rounded-full">
          <Icon
            name={pet.type === "cat" ? "cat" : "dog"}
            className="size-9 text-white"
          />
        </span>

        <span className="min-w-0 flex-1 space-y-1.5 text-base">
          <span className="flex items-center gap-2">
            <Icon name="collar-pet" className="size-5" />
            <span className="truncate">{pet.name}</span>
          </span>
          <span className="flex items-center gap-2">
            <Icon name="user" className="size-5" />
            <span className="truncate">{pet.owner.name}</span>
          </span>
        </span>

        <Icon
          name="arrow-bottom"
          className={cn(
            "size-6 transition-transform duration-300 ease-out",
            open && "rotate-180",
          )}
        />
      </button>

      {open && (
        <div className="border-gradient glow animate-in fade-in-0 slide-in-from-top-2 mt-2 space-y-3 rounded-lg p-3 text-sm duration-300 motion-reduce:animate-none">
          <ul className="space-y-1">
            <li className="flex items-center gap-2">
              <Icon name="dna" /> Raça: {pet.breed}
            </li>
            <li className="flex items-center gap-2">
              <Icon name="evaPhoneCallOutline2" /> Telefone: {maskPhone(pet.owner.phone)}
            </li>
            <li className="flex items-center gap-2">
              <Icon name="calendar" /> Idade: {formatAge(pet.birthDate)} (
              {formatBirthDate(pet.birthDate)})
            </li>
          </ul>

          <button
            type="button"
            onClick={onEdit}
            className="cursor-pointer text-brand-blue flex h-10 w-full items-center justify-center gap-2 rounded bg-white font-bold hover:bg-white/90"
          >
            <SquarePen className="size-4" /> Editar
          </button>

          <button
            type="button"
            onClick={onDelete}
            className="cursor-pointer bg-brand-gradient flex h-10 w-full items-center justify-center gap-2 rounded font-bold hover:opacity-90"
          >
            <Icon name="bin" /> Remover
          </button>
        </div>
      )}
    </div>
  );
}
