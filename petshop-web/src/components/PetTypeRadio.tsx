import { PetType } from '@/types/pet';

const options: { value: PetType; label: string }[] = [
  { value: 'dog', label: 'Cachorro' },
  { value: 'cat', label: 'Gato' },
];

export default function PetTypeRadio({
  value,
  onChange,
  disabled = false,
}: {
  value: PetType;
  onChange?: (value: PetType) => void;
  disabled?: boolean;
}) {
  return (
    <div role="radiogroup" aria-label="Animal" className="flex gap-3">
      {options.map((option) => (
        <label
          key={option.value}
          className={`flex h-10 flex-1 items-center gap-2 rounded-lg border-2 border-[#404a5c] px-3 text-sm text-white/40 has-[:checked]:border-white has-[:checked]:text-white has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-cyan ${
            disabled ? 'cursor-default' : 'cursor-pointer'
          }`}
        >
          <input
            type="radio"
            name="pet-type"
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange?.(option.value)}
            disabled={disabled}
            className="peer sr-only"
          />
          {/* bolinha: vazada normal, preenchida quando marcado */}
          <span className="size-3 rounded-full border-2 border-current peer-checked:bg-current" />
          {option.label}
        </label>
      ))}
    </div>
  );
}