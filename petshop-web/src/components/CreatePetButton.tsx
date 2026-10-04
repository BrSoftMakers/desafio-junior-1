'use client';

import { useState } from 'react';
import { CirclePlus } from 'lucide-react';
import PetFormModal from '@/components/PetFormModal';

export default function CreatePetButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="bg-brand-gradient flex h-10 items-center gap-2 rounded-lg px-5 text-sm font-bold hover:opacity-90"
      >
        <CirclePlus className="size-4" />
        Cadastrar
      </button>
      <PetFormModal open={open} onOpenChange={setOpen} />
    </>
  );
}