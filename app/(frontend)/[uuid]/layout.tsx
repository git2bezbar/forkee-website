import NotFound from "@/app/not-found";
import Footer from "@/components/frontend/Footer";
import Header from "@/components/frontend/Header";
import { getContactSettings, getCustomizationSettings, getGeneralSettings, getMenu } from "@/services/api";
import type { Metadata } from "next";
import { DM_Sans, Poppins, Raleway } from "next/font/google";
import "../../globals.css";

const raleway = Raleway({ subsets: ["latin"], weight: ["500", "600", "700"] });
const poppins = Poppins({ subsets: ['latin'], weight: ['500', '600', '700'] });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['500', '600', '700'] });

const getWebsiteFont = (font: string) => {
  switch (font) {
    case "dm-sans":
      return dmSans;
    case "raleway":
      return raleway;
    case "poppins":
      return poppins;
    default:
      return raleway;
  }
}

export const metadata: Metadata = {
  title: "Forkee | La solution pour les restaurateurs",
  description: "Forkee permet aux restaurateurs de gérer le site de leur " + 
  "restaurant en toute simplicité.",
};

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  params: { uuid: string };
  children: React.ReactNode;
}>) {

  const { uuid } = params;
  const menu = await getMenu(uuid);
  const generalSettings = await getGeneralSettings(uuid);
  const contactSettings = await getContactSettings(uuid);
  const customizationSettings = await getCustomizationSettings(uuid);

  if (!menu || !generalSettings || !contactSettings || !customizationSettings) {
    return <NotFound />;
  }

  metadata.title = generalSettings.websiteTitle;
  const websiteFont = getWebsiteFont(customizationSettings.textFont);

  return (
    <html lang="fr">
      <body 
        style={{
          '--color-primary': customizationSettings.primaryColor,
          '--color-secondary': customizationSettings.secondaryColor,
        } as React.CSSProperties} 
        className={websiteFont.className}
      >
      <Header
        menu={menu}
        uuid={uuid}
        restaurantName={generalSettings.websiteTitle}
      />
      <main>
        {children}
      </main>
      <Footer
        menu={menu}
        uuid={uuid}
        phoneNumber={contactSettings.phoneNumber}
        socialLinks={contactSettings.socialLinks}
        street={generalSettings.street}
        postCode={generalSettings.postCode}
        city={generalSettings.city}
        timeSlots={generalSettings.timeSlots}
        restaurantName={generalSettings.websiteTitle}
      />
      </body>
    </html>
  );
}
