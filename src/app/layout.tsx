import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Password Generator Website',
  description: 'Website for password generation',
  icons: {
    icon: '/s.png',
  },
  openGraph: {
    title: 'Password Generator Website',
    description: 'Website for password generation',
    url: 'https://skypass-nine.vercel.app/',
    images: [
      {
        url: 'https://cdn.discordapp.com/attachments/630400955019558938/1308773754586927187/image.png?ex=673f2a0a&is=673dd88a&hm=5487f2c580e598ce67e707024857fd70fb5d83492c1b3d0035e265be745aa370&',
        alt: 'Password generator website image preview',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Password Generator Website',
    description: 'Website for password generation',
    images: [
      {
        url: 'https://cdn.discordapp.com/attachments/630400955019558938/1308773754586927187/image.png?ex=673f2a0a&is=673dd88a&hm=5487f2c580e598ce67e707024857fd70fb5d83492c1b3d0035e265be745aa370&',
        alt: 'Twitter image preview',
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`$${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
