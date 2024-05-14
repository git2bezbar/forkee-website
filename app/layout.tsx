import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Forkee | La solution pour les restaurateurs",
  description: "Forkee permet aux restaurateurs de gérer le site de leur " + 
  "restaurant en toute simplicité.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
