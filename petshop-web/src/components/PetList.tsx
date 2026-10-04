'use client';

import { useState } from 'react';
import DeletePetModal from '@/components/DeletePetModal';
import PetFormModal from '@/components/PetFormModal';
import PetItem from '@/components/PetItem';
import { Pet } from '@/types/pet';

export default function PetList({ pets }: { pets: Pet[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [editing, setEditing] = useState<Pet | null>(null);
  const [deleting, setDeleting] = useState<Pet | null>(null);

  return (
    <>
      <section className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pets.map((pet) => (
          <PetItem
            key={pet.id}
            pet={pet}
            open={openId === pet.id}
            onToggle={() => setOpenId(openId === pet.id ? null : pet.id)}
            onEdit={() => setEditing(pet)}
            onDelete={() => setDeleting(pet)}
          />
        ))}
      </section>

      <PetFormModal
        open={!!editing}
        onOpenChange={(open) => !open && setEditing(null)}
        pet={editing ?? undefined}
      />
      <DeletePetModal pet={deleting} onClose={() => setDeleting(null)} />
    </>
  );
}