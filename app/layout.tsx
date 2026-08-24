import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BookLibre — Presta, reserva y descubrí tu próxima lectura',
  description:
    'BookLibre es una plataforma colaborativa de préstamo de libros: catálogo con filtros, reservas entre usuarios y persistencia políglota (PostgreSQL, MongoDB, Redis). Portfolio preview.',
  openGraph: {
    title: 'BookLibre',
    description: 'Una comunidad para prestar, reservar y descubrir tu próxima lectura.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background font-body text-on-surface antialiased">{children}</body>
    </html>
  );
}
