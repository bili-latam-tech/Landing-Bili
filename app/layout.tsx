import type { Metadata } from 'next';
import { DM_Sans, Poppins } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
});

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Bili App - Tu aliado financiero',
  description: 'Registra tus gastos, fija metas de ahorro y mejora tu vida financiera con Bili App. Únete a nuestra lista de espera y prueba nuestra versión beta.',
  keywords: 'ahorro, finanzas personales, app, gastos, metas financieras, billetera digital',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${dmSans.variable} ${poppins.variable}`}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-C75JMEPEWX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C75JMEPEWX');
            `,
          }}
        />
      </head>
      <body className="bg-gradient-to-br from-white to-gray-50 min-h-screen">{children}</body>
    </html>
  );
} 