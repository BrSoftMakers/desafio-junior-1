import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CirclePlus, Search } from 'lucide-react';
import PetList from '@/components/PetList';
import Pagination from '@/components/Pagination';
import CreatePetButton from '@/components/CreatePetButton';
import { petsApi } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Pets',
  description: 'Lista de pets cadastrados na petshop.',
};

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; q?: string }>;
}) {
  const { page, q = '' } = await searchParams;
  const { data: pets, page: current, lastPage } = await petsApi.list({
    page: Number(page) || 1,
    search: q,
  });

  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col gap-6 p-6">
      <header className="flex items-center gap-2 text-2xl font-medium">
        <Link href="/">
          <Image src="/img/logo.svg" alt="Petshop" width={182} height={48} />
        </Link>
      </header>

      <div className="flex items-center gap-4">
        <form
          action="/"
          className="search-frame flex flex-1 items-center rounded-lg"
        >
          <span className="flex h-10 w-11 items-center justify-center rounded-l-[6px] bg-gray">
            <Search className="size-4" />
          </span>
          <input
            name="q"
            defaultValue={q}
            placeholder="Buscar por pet ou dono"
            className="h-10 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-white/40"
          />
          <button
            type="submit"
            className="cursor-pointer bg-gray  mr-1 p-2 text-xs font-bold hover:bg-gray/80 rounded-sm"
          >
            Pesquisar
          </button>
        </form>

        <CreatePetButton />
      </div>

      {pets.length === 0 ? (
        <p className="py-16 text-center text-white/60">
          {q ? `Nenhum resultado para "${q}".` : 'Nenhum pet cadastrado ainda.'}
        </p>
      ) : (
        <PetList pets={pets} />
      )}

      <div className="mt-auto">
        <Pagination page={current} lastPage={lastPage} search={q} />
      </div>
    </main>
  );
}