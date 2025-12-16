import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero-section";
import ExploreSection from "@/components/sections/explore-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ExploreSection />
      </main>
    </div>
  );
}
