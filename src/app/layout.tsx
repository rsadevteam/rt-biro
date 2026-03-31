import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "RT Biro – Računovodstvene usluge | Laktaši, BiH",
  description:
    "RT BIRO – Radovan Trninić s.p. pruža profesionalne računovodstvene, knjigovodstvene i poreske usluge na području Laktaša i šire. Kontaktirajte nas za konsultacije.",
  keywords:
    "računovodstvo, knjigovodstvo, poreski savjetnik, Laktaši, BiH, RT Biro, Radovan Trninić",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bs"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
