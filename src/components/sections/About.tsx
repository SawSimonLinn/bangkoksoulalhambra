"use client";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function About() {
  const interiorImg =
    "https://images.unsplash.com/photo-1755998493421-307fea8a3bc4?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section
      id="about"
      className="py-14 md:py-32 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-32">
          <div className="flex-1 relative w-full">
            <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5]">
              <Image
                src={interiorImg}
                alt="Bangkok Soul Atmosphere"
                fill
                className="object-cover"
                data-ai-hint="restaurant interior"
              />
            </div>
            {/* Aesthetic offset frame - hidden on mobile to avoid overflow */}
            <div className="hidden md:block absolute -top-6 -left-6 w-full h-full border-2 border-primary/20 rounded-2xl -z-0" />
            <div className="absolute -bottom-10 -right-10 bg-primary/10 w-64 h-64 rounded-full blur-3xl -z-0" />
          </div>

          <div className="flex-1 space-y-7 md:space-y-10">
            <div className="space-y-4 md:space-y-6">
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">
                Authentic Heritage
              </span>
              <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Crafting the Soul of{" "}
                <span className="text-primary">Bangkok</span> in San Gabriel.
              </h2>
              <div className="w-16 h-1 md:w-20 md:h-1.5 bg-primary/30 rounded-full" />
            </div>

            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed font-light">
              <p>
                At Bangkok Soul, we believe food is a bridge to culture. Our
                kitchen is dedicated to the art of slow-cooking, using family
                recipes passed down through generations.
              </p>
              <p>
                Our signature 12-hour braised pork leg is more than a dish: it's
                a tribute to the vibrant street food stalls of Thailand, brought
                to life with premium local ingredients.
              </p>
            </div>

            <div className="pt-2 md:pt-4">
              <Button
                asChild
                variant="link"
                className="p-0 text-primary text-base md:text-lg font-bold group"
              >
                <Link href="/blog" className="flex items-center gap-2">
                  Read Our Full Story{" "}
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-2" />
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
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
