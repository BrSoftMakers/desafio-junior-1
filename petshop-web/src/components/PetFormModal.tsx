'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CirclePlus, SquarePen } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Icon from '@/components/Icon';
import ModalHeader from '@/components/ModalHeader';
import PetFields, { emptyValues, PetFormValues, petToValues } from '@/components/PetFields';
import { petsApi } from '@/lib/api';
import { Pet, PetInput } from '@/types/pet';

interface PetFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  pet?: Pet; // sem pet = cadastro
}

export default function PetFormModal({ open, onOpenChange, pet }: PetFormModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        aria-describedby={undefined}
        className="border-0 bg-transparent p-0 shadow-none sm:max-w-[620px]"
      >
        <PetForm key={pet?.id ?? 'new'} pet={pet} onClose={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
}

function PetForm({ pet, onClose }: { pet?: Pet; onClose: () => void }) {
  const router = useRouter();
  const isEdit = !!pet;
  const [values, setValues] = useState<PetFormValues>(pet ? petToValues(pet) : emptyValues);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function handleChange<K extends keyof PetFormValues>(key: K, value: PetFormValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!values.birthDate) {
      setError('Informe a data de nascimento');
      return;
    }

    const payload: PetInput = {
      name: values.name.trim(),
      birthDate: values.birthDate,
      type: values.type,
      breed: values.breed.trim(),
      owner: { name: values.owner.trim(), phone: values.phone },
    };

    setLoading(true);
    setError('');
    try {
      if (pet) await petsApi.update(pet.id, payload);
      else await petsApi.create(payload);
      onClose();
      router.refresh(); // pede ao servidor a lista atualizada
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro inesperado');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-gradient glow space-y-8 rounded-xl p-6 sm:p-12"
    >
      <ModalHeader
        icon={
          isEdit ? <SquarePen className="size-8 text-white" /> : <CirclePlus className="size-8 text-white" />
        }
        title={isEdit ? 'Editar' : 'Cadastrar'}
        onClose={onClose}
      />

      <PetFields values={values} onChange={handleChange} />

      {error && (
        <p className="text-danger text-sm whitespace-pre-line" role="alert">
          {error}
        </p>
      )}

      <div className="grid grid-cols-2 gap-8">
        <button
          type="button"
          onClick={onClose}
          className="text-brand-blue flex h-10 items-center justify-center gap-2 rounded bg-white text-sm font-bold hover:bg-white/90"
        >
          <Icon name="arrow-left" className="size-4" /> Voltar
        </button>

        <button
          type="submit"
          disabled={loading}
          className="bg-brand-gradient flex h-10 items-center justify-center gap-2 rounded text-sm font-bold hover:opacity-90 disabled:opacity-50"
        >
          {isEdit ? <SquarePen className="size-4" /> : <CirclePlus className="size-4" />}
          {loading ? 'Salvando...' : isEdit ? 'Salvar' : 'Cadastrar'}
        </button>
      </div>
    </form>
  );
}