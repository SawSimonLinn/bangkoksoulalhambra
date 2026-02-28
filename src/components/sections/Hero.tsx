
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowUpRight, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const reviews = [
  {
    name: "Nadia Chuen",
    role: "Google Review",
    text: "A hidden gem in Alhambra. The Braised Pork Leg melts in your mouth—you can taste the care in every bite.",
    avatar: "https://picsum.photos/seed/nadia/200/200"
  },
  {
    name: "Simchelin Guide",
    role: "Local Guide · 333 Reviews",
    text: "Really feeds the soul. Service is top notch and the food came out quickly. Highly recommend for Thai food.",
    avatar: "https://picsum.photos/seed/simchelin/200/200"
  },
  {
    name: "William Fong",
    role: "Local Guide · 33 Reviews",
    text: "The fried rice has a strong wok smell making it authentic. Crabmeat was generous for the price. Very worthwhile.",
    avatar: "https://picsum.photos/seed/williamfong/200/200"
  }
];

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [activeReview, setActiveReview] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setActiveReview((prev) => (prev + 1) % reviews.length);
        setIsFading(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const heroImage = PlaceHolderImages.find(img => img.id === "hero-thai-food") || {
    imageUrl: "https://picsum.photos/seed/thai/1920/1080",
    description: "Authentic Thai Table",
    imageHint: "thai food table"
  };

  return (
    <section className="relative h-screen min-h-[700px] md:min-h-[800px] flex items-stretch overflow-hidden">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover brightness-[0.45]"
          priority
          data-ai-hint={heroImage.imageHint}
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full flex items-end pb-12 md:pb-24">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-end w-full">
          
          {/* Left Bottom Content */}
          <div className={`space-y-6 md:space-y-8 transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <Avatar key={i} className="w-5 h-5 border-2 border-white/10">
                    <AvatarImage src={`https://picsum.photos/seed/${i + 10}/100/100`} />
                    <AvatarFallback className="bg-primary text-[8px]">U</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <span className="text-[10px] font-bold tracking-wide uppercase">Rated 4.9 by users</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-[1.1] tracking-tight max-w-xl">
                A unique Thai Restaurant in San Gabriel.
              </h1>
              <p className="text-sm md:text-base text-white/70 max-w-md font-light leading-relaxed">
                Bangkok Soul brings a modern edge to timeless recipes blending elegant design with our signature 12 hour braised pork leg.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" asChild className="rounded-full px-8 h-14 text-xs font-bold bg-primary hover:bg-primary/90 shadow-xl border-none group transition-all">
                <Link href="/contact" className="flex items-center gap-3">
                  <div className="bg-white/20 p-1 rounded-full">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                  </div>
                  Make a reservation
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Bottom Content - Floating Review Card */}
          <div className={`hidden sm:flex lg:justify-end transition-all duration-1000 delay-300 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="w-[240px] md:w-[280px] relative group">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl" />
              <div className={`relative h-full flex flex-col items-center p-6 text-center text-white transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                
                <div className="mb-4 relative">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-white/10 shadow-lg">
                    <Image 
                      src={reviews[activeReview].avatar} 
                      alt={reviews[activeReview].name} 
                      width={100} 
                      height={100} 
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-primary p-1.5 rounded-full shadow-md">
                    <Star className="w-3 h-3 fill-white text-white" />
                  </div>
                </div>

                <h3 className="font-headline text-lg font-bold mb-1">{reviews[activeReview].name}</h3>
                <p className="text-white/50 text-[9px] mb-4 uppercase tracking-[0.2em] font-bold">{reviews[activeReview].role}</p>
                
                <p className="text-xs md:text-sm italic font-light leading-relaxed mb-6 text-white/80 h-16 flex items-center justify-center">
                  "{reviews[activeReview].text}"
                </p>

                <div className="flex gap-1.5">
                  {reviews.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1 rounded-full transition-all duration-300 ${activeReview === i ? 'w-4 bg-primary' : 'w-1 bg-white/20'}`} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Accents */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-3 opacity-30">
        <span className="text-[8px] uppercase tracking-[0.5em] text-white font-bold">Discover</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
