import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Fontes
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata
export const metadata: Metadata = {
  title: "Stec",
  description: "Desenvolvendo sua solução com IA",
  icons: {
    icon: "/favicon.ico",
  },
  authors: [
    {
      name: "Elnata Correa",
      url: "https://my-portfolio-seven-theta-28.vercel.app/",
    },
  ],
  openGraph: {

    title: "Stec",
    description: "Desenvolvendo sua solução",
    images: [
      {
        url: "https://my-portfolio-seven-theta-28.vercel.app/portifolio-elnata.png",
        alt: "Stec",
      }
    ],
    authors: "Elnata",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Adicionando o favicon */}
        <link rel="icon" href="/Stec.png" sizes="any" type="image/x-icon" />
        <title>{"Stec"}</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
