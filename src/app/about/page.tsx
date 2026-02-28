import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { About } from "@/components/sections/About";
import Image from "next/image";

export default function AboutPage() {
  const interiorImg =
    "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1650&auto=format&fit=crop";

  return (
    <main className="min-h-screen bg-background pt-24 md:pt-32">
      <Header />
      <div className="max-w-7xl mx-auto px-5 md:px-6 mb-12 md:mb-24 space-y-12 md:space-y-24">
        <div className="text-center space-y-3 md:space-y-4">
          <h1 className="font-headline text-3xl md:text-5xl lg:text-7xl font-bold text-primary">
            Our Story
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto italic">
            A journey from the streets of Bangkok to San Gabriel.
          </p>
        </div>

        <div className="relative h-[200px] sm:h-[350px] md:h-[500px] w-full rounded-2xl overflow-hidden">
          <Image
            src={interiorImg}
            alt="Bangkok Soul Interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-5 left-5 right-5 md:bottom-12 md:left-12 md:right-12 text-white text-center md:text-left">
            <h2 className="font-headline text-xl md:text-4xl font-bold mb-2 md:mb-4">
              Crafting Memories Since 2024
            </h2>
            <p className="text-sm md:text-xl text-white/90 max-w-2xl font-light hidden sm:block">
              We started with a simple vision: to create a space where authentic
              Thai tradition meets modern hospitality.
            </p>
          </div>
        </div>

        <About />

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center bg-white rounded-2xl p-5 md:p-12 md:shadow-xl border border-border/40 md:border-none">
          <div className="space-y-4 md:space-y-6">
            <h2 className="font-headline text-2xl md:text-4xl font-bold text-primary">
              Our Philosophy
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
              We believe that food is more than just sustenance: it's a
              connection to culture and soul. That's why we never compromise on
              our ingredients. Our chilies are imported, our herbs are fresh
              daily, and our sauces are made from scratch in our kitchen.
            </p>
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
              Whether you're joining us for a quick lunch or a celebratory
              dinner, our goal is to provide a warm, cozy atmosphere that makes
              you feel right at home.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="relative h-48 md:h-64 rounded-xl overflow-hidden md:mt-8">
              <Image
                src="/imges/all-food.png"
                alt="Chef at work"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-xl overflow-hidden">
              <Image
                src="https://plus.unsplash.com/premium_photo-1682098240884-9dfc7bf048f0?q=80&w=2070&auto=format&fit=crop"
                alt="Our philosophy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
