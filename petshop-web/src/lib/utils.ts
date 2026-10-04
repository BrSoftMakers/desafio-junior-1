import { differenceInMonths, differenceInYears, format, parseISO } from 'date-fns';
export { cn } from "cn"

export function formatBirthDate(birthDate: string): string {
  return format(parseISO(birthDate), 'dd/MM/yyyy');
}

export function formatAge(birthDate: string): string {
  const date = parseISO(birthDate);
  const years = differenceInYears(new Date(), date);

  if (years >= 1) return `${years} ${years === 1 ? 'Ano' : 'Anos'}`;

  // filhote com menos de 1 ano: mostra em meses
  const months = differenceInMonths(new Date(), date);
  return `${months} ${months === 1 ? 'Mês' : 'Meses'}`;
}

export function maskPhone(value: string): string {
  const d = value.replace(/\D/g, '').slice(0, 11);
  if (d.length === 0) return '';
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 3) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2, 3)} ${d.slice(3)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 3)} ${d.slice(3, 7)}-${d.slice(7)}`;
}