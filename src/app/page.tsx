
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { FeaturedDishes } from "@/components/sections/FeaturedDishes";
import { ServiceOptions } from "@/components/sections/ServiceOptions";
import { Reviews } from "@/components/sections/Reviews";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <div className="relative z-10 -mt-20">
        <ServiceOptions />
      </div>
      <div className="space-y-16">
        <About />
        <FeaturedDishes />
        <div className="bg-white py-12">
          <Reviews />
        </div>
      </div>
      <Footer />
    </main>
  );
}
