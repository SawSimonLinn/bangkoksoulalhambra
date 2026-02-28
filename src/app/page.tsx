
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { FeaturedDishes } from "@/components/sections/FeaturedDishes";
import { LunchSpecial } from "@/components/sections/LunchSpecial";
import { ServiceOptions } from "@/components/sections/ServiceOptions";
import { Reviews } from "@/components/sections/Reviews";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ServiceOptions />
      <div className="space-y-0">
        <About />
        <FeaturedDishes />
        <LunchSpecial />
        <div className="bg-white">
          <Reviews />
        </div>
      </div>
      <Footer />
    </main>
  );
}
