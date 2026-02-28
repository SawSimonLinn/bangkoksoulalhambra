
"use client";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

const featured = [
  {
    name: "Bangkok Braised Pork Leg",
    description: "Our 12-hour legendary masterpiece. Tender pork leg served with jasmine rice and clear broth.",
    id: "dish-braised-pork-leg",
    price: "$18.95",
    tag: "Signature"
  },
  {
    name: "Signature Pad Thai",
    description: "Wok-fired rice noodles with fresh shrimp and our secret aged tamarind reduction.",
    id: "dish-pad-thai",
    price: "$16.95",
    tag: "Classic"
  },
  {
    name: "Mango Sticky Rice",
    description: "Sweet honey mango paired with warm coconut-infused glutinous rice. A soul-soothing finish.",
    id: "dish-mango-sticky-rice",
    price: "$9.95",
    tag: "Dessert"
  }
];

export function FeaturedDishes() {
  return (
    <section id="featured" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Chef's Selection</span>
            <h2 className="font-headline text-5xl font-bold text-foreground">Aesthetic Flavors</h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-md font-light italic">
            Carefully curated dishes that define the authentic soul of Bangkok street food.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featured.map((dish, idx) => {
            const imageData = PlaceHolderImages.find(img => img.id === dish.id) || {
              imageUrl: "https://picsum.photos/seed/placeholder/600/800",
              imageHint: "thai dish"
            };
            
            return (
              <div key={idx} className="group flex flex-col space-y-8 cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-md transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
                  <Image
                    src={imageData.imageUrl}
                    alt={dish.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    data-ai-hint={imageData.imageHint}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="bg-white text-primary p-4 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                      <ArrowUpRight className="w-8 h-8" />
                    </div>
                  </div>
                  <Badge className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-primary border-none px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full">
                    {dish.tag}
                  </Badge>
                </div>
                
                <div className="space-y-4 px-2">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-headline text-3xl font-bold group-hover:text-primary transition-colors leading-tight">{dish.name}</h3>
                    <span className="font-bold text-primary text-xl">{dish.price}</span>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed font-light line-clamp-2">
                    {dish.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
