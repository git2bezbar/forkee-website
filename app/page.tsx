import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HighlightSection from "@/components/HighlightSection";

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
