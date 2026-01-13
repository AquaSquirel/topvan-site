import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "Topvan | Transporte Executivo",
  description: "Transporte com vans executivas para turismo, eventos, transporte escolar e universitário. Fundada por Juliano Amaral.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}