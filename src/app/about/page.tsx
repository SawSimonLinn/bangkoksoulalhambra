
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { About } from "@/components/sections/About";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AboutPage() {
  const interiorImg = PlaceHolderImages.find(i => i.id === 'restaurant-interior')?.imageUrl || "https://picsum.photos/seed/about/1200/600";

  return (
    <main className="min-h-screen bg-background pt-32">
      <Header />
      <div className="max-w-7xl mx-auto px-6 mb-24 space-y-24">
        <div className="text-center space-y-4">
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary">Our Story</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto italic">
            A journey from the streets of Bangkok to San Gabriel.
          </p>
        </div>

        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
          <Image 
            src={interiorImg}
            alt="Bangkok Soul Interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-12 left-12 right-12 text-white text-center md:text-left">
            <h2 className="font-headline text-4xl font-bold mb-4">Crafting Memories Since 2024</h2>
            <p className="text-xl text-white/90 max-w-2xl font-light">
              We started with a simple vision: to create a space where authentic Thai tradition meets modern hospitality.
            </p>
          </div>
        </div>

        <About />

        <div className="grid md:grid-cols-2 gap-16 items-center bg-white rounded-2xl p-12 shadow-xl">
          <div className="space-y-6">
            <h2 className="font-headline text-4xl font-bold text-primary">Our Philosophy</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that food is more than just sustenance: it's a connection to culture and soul. That's why we never compromise on our ingredients. Our chilies are imported, our herbs are fresh daily, and our sauces are made from scratch in our kitchen.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're joining us for a quick lunch or a celebratory dinner, our goal is to provide a warm, cozy atmosphere that makes you feel right at home.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-xl overflow-hidden mt-8 shadow-lg">
              <Image 
                src={PlaceHolderImages.find(i => i.id === 'dish-pad-thai')?.imageUrl || "https://picsum.photos/seed/pt/400/600"} 
                alt="Chef at work" fill className="object-cover" 
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <Image 
                src={PlaceHolderImages.find(i => i.id === 'dish-tom-yum')?.imageUrl || "https://picsum.photos/seed/ty/400/600"} 
                alt="Thai Herbs" fill className="object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
