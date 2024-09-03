import ContactSection from "@/components/website/ContactSection";
import FeatureSection from "@/components/website/FeatureSection";
import Footer from "@/components/website/Footer";
import Header from "@/components/website/Header";
import HeroSection from "@/components/website/HeroSection";
import HighlightSection from "@/components/website/HighlightSection";
import OffersSection from "@/components/website/OffersSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HighlightSection />
        <FeatureSection
          title="Gérez votre site web simplement"
          subtitle="Retrouvez toutes les fonctionnalités nécessaires pour gérer votre site web simplement."
          advantages={[
            "Gérez votre site web sans avoir à coder",
            "Utilisez un dashboard intuitif",
            "Renseignez le menu de votre établissement",
          ]}
        />
        <FeatureSection
          title="Un site simple et performant à votre image en quelques clics"
          subtitle="Avec notre interface intuitive, personnalisez votre site selon vos préférences et lancez votre site internet"
          advantages={[
            "Rapide",
            "Personnalisable",
            "Optimisé pour les moteurs de recherche",
          ]}
          type="secondary"
        />
        <OffersSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
