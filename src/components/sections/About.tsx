
"use client";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function About() {
  const interiorImg = PlaceHolderImages.find(i => i.id === 'restaurant-interior')?.imageUrl || "https://picsum.photos/seed/about/800/1000";

  return (
    <section id="about" className="py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
              <Image 
                src={interiorImg}
                alt="Bangkok Soul Atmosphere"
                fill
                className="object-cover"
                data-ai-hint="restaurant interior"
              />
            </div>
            {/* Aesthetic offset frame */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-primary/20 rounded-2xl -z-0" />
            <div className="absolute -bottom-10 -right-10 bg-primary/10 w-64 h-64 rounded-full blur-3xl -z-0" />
          </div>

          <div className="flex-1 space-y-10">
            <div className="space-y-6">
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Authentic Heritage</span>
              <h2 className="font-headline text-5xl md:text-6xl font-bold leading-tight text-foreground">
                Crafting the Soul of <span className="text-primary">Bangkok</span> in San Gabriel.
              </h2>
              <div className="w-20 h-1.5 bg-primary/30 rounded-full" />
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
              <p>
                At Bangkok Soul, we believe food is a bridge to culture. Our kitchen is dedicated to the art of slow-cooking, using family recipes passed down through generations.
              </p>
              <p>
                Our signature 12-hour braised pork leg is more than a dish: it's a tribute to the vibrant street food stalls of Thailand, brought to life with premium local ingredients.
              </p>
            </div>

            <div className="pt-4">
              <Button asChild variant="link" className="p-0 text-primary text-lg font-bold group">
                <Link href="/about" className="flex items-center gap-2">
                  Read Our Full Story <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowRight(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
  );
}
