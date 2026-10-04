'use client';

import BirthDatePicker from '@/components/BirthDatePicker';
import FormField from '@/components/FormField';
import PetTypeRadio from '@/components/PetTypeRadio';
import { formatBirthDate, maskPhone } from '@/lib/utils';
import { Pet, PetType } from '@/types/pet';

export interface PetFormValues {
  name: string;
  owner: string;
  phone: string;
  type: PetType;
  breed: string;
  birthDate: string;
}

export const emptyValues: PetFormValues = {
  name: '',
  owner: '',
  phone: '',
  type: 'dog',
  breed: '',
  birthDate: '',
};

export function petToValues(pet: Pet): PetFormValues {
  return {
    name: pet.name,
    owner: pet.owner.name,
    phone: maskPhone(pet.owner.phone),
    type: pet.type,
    breed: pet.breed,
    birthDate: pet.birthDate,
  };
}

type ChangeFn = <K extends keyof PetFormValues>(key: K, value: PetFormValues[K]) => void;

const base = 'h-10 w-full px-3 text-sm outline-none placeholder:text-white/30';
const editable = `${base} input-frame`;
const locked = `${base} rounded-lg bg-[#404a5c] text-white disabled:opacity-100`;

export default function PetFields({
  values,
  onChange,
  readOnly = false,
}: {
  values: PetFormValues;
  onChange?: ChangeFn;
  readOnly?: boolean;
}) {
  const set: ChangeFn = (key, value) => onChange?.(key, value);
  const input = readOnly ? locked : editable;

  return (
    <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
      <FormField icon="collar-pet" label="Nome" htmlFor="pet-name">
        <input
          id="pet-name"
          className={input}
          placeholder="Nome Sobrenome"
          value={values.name}
          onChange={(e) => set('name', e.target.value)}
          disabled={readOnly}
          autoFocus={!readOnly}
          required
        />
      </FormField>

      <FormField icon="dna" label="Animal">
        <PetTypeRadio
          value={values.type}
          onChange={(type) => set('type', type)}
          disabled={readOnly}
        />
      </FormField>

      <FormField icon="user" label="Dono" htmlFor="pet-owner">
        <input
          id="pet-owner"
          className={input}
          placeholder="Nome Sobrenome"
          value={values.owner}
          onChange={(e) => set('owner', e.target.value)}
          disabled={readOnly}
          required
        />
      </FormField>

      <FormField icon="dna" label="Raça" htmlFor="pet-breed">
        <input
          id="pet-breed"
          className={input}
          placeholder="Raça"
          value={values.breed}
          onChange={(e) => set('breed', e.target.value)}
          disabled={readOnly}
          required
        />
      </FormField>

      <FormField icon="evaPhoneCallOutline2" label="Telefone" htmlFor="pet-phone">
        <input
          id="pet-phone"
          className={input}
          placeholder="(00) 0 0000-0000"
          inputMode="tel"
          value={values.phone}
          onChange={(e) => set('phone', maskPhone(e.target.value))}
          disabled={readOnly}
          required
        />
      </FormField>

      <FormField icon="calendar" label="Nascimento" hint="(Aproximado)" htmlFor="pet-birth">
        {readOnly ? (
          <input
            id="pet-birth"
            className={locked}
            value={formatBirthDate(values.birthDate)}
            disabled
          />
        ) : (
          <BirthDatePicker
            id="pet-birth"
            value={values.birthDate}
            onChange={(date) => set('birthDate', date)}
          />
        )}
      </FormField>
    </div>
  );
}