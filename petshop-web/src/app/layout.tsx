import type { Metadata, Viewport } from 'next';
import { Ubuntu, Geist } from 'next/font/google';
import './globals.css';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu',
});

export const metadata: Metadata = {
  title: {
    default: 'Petshop | Gestão de pets',
    template: '%s | Petshop',
  },
  description:
    'Sistema para cadastrar, listar, editar e excluir animais de estimação e os dados de seus donos.',
  applicationName: 'Petshop',
  keywords: ['petshop', 'pets', 'cadastro de animais', 'cachorro', 'gato', 'CRUD'],
  authors: [{ name: 'Pedro' }],
  robots: { index: false, follow: false }, // sistema interno, não precisa aparecer no Google
  openGraph: {
    title: 'Petshop | Gestão de pets',
    description: 'Cadastro e gerenciamento de pets e seus donos.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Petshop',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2563eb', // troque pela cor principal do Figma
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={cn(ubuntu.variable)}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}