import type { Metadata } from "next";
import "../globals.css";

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
      <body
        style={{
          '--color-primary': '#6624ff',
        } as React.CSSProperties} 
      >
        { children }
      </body>
    </html>
  );
}
