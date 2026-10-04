'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Icon from '@/components/Icon';
import ModalHeader from '@/components/ModalHeader';
import PetFields, { petToValues } from '@/components/PetFields';
import { petsApi } from '@/lib/api';
import { Pet } from '@/types/pet';

export default function DeletePetModal({
  pet,
  onClose,
}: {
  pet: Pet | null;
  onClose: () => void;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function close() {
    setError('');
    onClose();
  }

  async function handleDelete() {
    if (!pet) return;
    setLoading(true);
    setError('');
    try {
      await petsApi.remove(pet.id);
      close();
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao remover');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={!!pet} onOpenChange={(open) => !open && close()}>
      <DialogContent
        showCloseButton={false}
        aria-describedby={undefined}
        className="border-0 bg-transparent p-0 shadow-none sm:max-w-[620px]"
      >
        {pet && (
          <div className="border-gradient glow space-y-8 rounded-xl p-6 sm:p-12">
            <ModalHeader
              icon={<Icon name="bin" className="size-8 text-white" />}
              title="Remover"
              onClose={close}
            />

            <PetFields values={petToValues(pet)} readOnly />

            <p className="text-center font-bold">Tem certeza que deseja remover esse pet?</p>

            {error && (
              <p className="text-danger text-center text-sm" role="alert">
                {error}
              </p>
            )}

            <div className="grid grid-cols-2 gap-8">
              <button
                type="button"
                onClick={close}
                className="text-brand-blue flex h-10 items-center justify-center gap-2 rounded bg-white text-sm font-bold hover:bg-white/90"
              >
                <Icon name="arrow-left" className="size-4" /> Voltar
              </button>

              <button
                type="button"
                onClick={handleDelete}
                disabled={loading}
                className="bg-danger flex h-10 items-center justify-center gap-2 rounded text-sm font-bold hover:opacity-90 disabled:opacity-50"
              >
                <Icon name="bin" className="size-4" />
                {loading ? 'Removendo...' : 'Remover'}
              </button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}