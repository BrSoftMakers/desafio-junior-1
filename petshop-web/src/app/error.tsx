'use client';

import { startTransition, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  function handleRetry() {
    // o erro aconteceu no servidor: refresh() busca os dados de novo
    // e reset() tira a tela de erro. Dentro de startTransition fazem isso juntos.
    startTransition(() => {
      router.refresh();
      reset();
    });
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center gap-6 p-6 text-center">
      <Image src="/img/logo.svg" alt="SoftPet" width={182} height={48} />

      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Não foi possível carregar os pets</h1>
        <p className="text-white/60">
          Verifique se a API está rodando e tente novamente.
        </p>
      </div>

      <button
        type="button"
        onClick={handleRetry}
        className="bg-brand-gradient h-10 rounded-lg px-6 text-sm font-bold hover:opacity-90"
      >
        Tentar novamente
      </button>
    </main>
  );
}