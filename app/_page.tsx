import Header from "@/components/website/Header";
import HeroSection from "@/components/website/HeroSection";
import HighlightSection from "@/components/website/HighlightSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HighlightSection />
      </main>
    </>
  );
}
