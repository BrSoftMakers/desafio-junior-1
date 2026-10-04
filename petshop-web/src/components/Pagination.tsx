import Link from 'next/link';
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react';

export default function Pagination({
  page,
  lastPage,
  search,
}: {
  page: number;
  lastPage: number;
  search?: string;
}) {
  const href = (p: number) => {
    const qs = new URLSearchParams({ page: String(p) });
    if (search) qs.set('q', search);
    return `/?${qs}`;
  };

  const arrow = 'size-5';
  const disabled = 'pointer-events-none opacity-30';

  return (
    <nav className="flex items-center justify-end gap-2 text-xs font-bold" aria-label="Paginação">
      <Link
        href={href(page - 1)}
        aria-label="Página anterior"
        aria-disabled={page <= 1}
        className={page <= 1 ? disabled : ''}
      >
        <CircleArrowLeft className={arrow} />
      </Link>
      <span>{page} de {lastPage}</span>
      <Link
        href={href(page + 1)}
        aria-label="Próxima página"
        aria-disabled={page >= lastPage}
        className={page >= lastPage ? disabled : ''}
      >
        <CircleArrowRight className={arrow} />
      </Link>
    </nav>
  );
}