import localFont from 'next/font/local';
import './globals.css';
import { Metadata } from 'next';

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: '판다 마켓',
  description: '판다 마켓에 방문하면 물건을 사고 팔고, 소통을 할 수 있어요!',
  openGraph: {
    title: '판다 마켓',
    description: '판다 마켓에 방문하면 물건을 사고 팔고, 소통을 할 수 있어요!',
    images: ['/assets/images/home_top_banner.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className={`${pretendard.variable}`}>
      <head>
        <link rel='icon' type='image/png' href='/assets/images/logo_img.png' />
      </head>
      <body className={`${pretendard.className} min-h-screen`}>{children}</body>
    </html>
  );
}
