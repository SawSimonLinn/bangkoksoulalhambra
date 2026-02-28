
"use client";

import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const standardDishes = [
  "Bangkok Chili Basil",
  "Chinese Broccoli & Crispy Pork",
  "Cashew Delight",
  "Spicy Thai Eggplant",
  "Soul Veggie Tofu",
  "Yellow Curry",
  "Chow Mein (No Rice)",
];

const premiumDishes = [
  "Pad Thai (No Rice)",
  "Pad See You (No Rice)",
  "Pad Kee Mao (No Rice)",
  "Thainanese Chicken",
  "Crispy Fried Chicken",
  "Moo Daeng + Moo Krob",
  "Braised Pork Leg",
  "Soul Boat Noodle with Stewed Beef",
];

export function LunchSpecial() {
  return (
    <section className="py-14 md:py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-4 md:gap-8">
          <div className="space-y-3 md:space-y-4">
            <span className="text-white/60 font-bold uppercase tracking-[0.2em] text-sm">
              Lunch Special
            </span>
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-white">
              $15.95 Lunch Deal
            </h2>
            <p className="text-white/80 text-sm md:text-base font-light">
              1 Dish · 1 Side · 1 Soup · 1 Drink &nbsp;|&nbsp; All served with
              Jasmine Rice
            </p>
            <p className="text-white/60 text-xs md:text-sm font-light italic">
              Protein: Chicken, Pork, Tofu, Mix Veggies &nbsp;·&nbsp; Shrimp /
              Beef +$2
            </p>
          </div>
          <div className="shrink-0">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 bg-white text-primary hover:bg-white/90 font-bold w-full sm:w-auto"
            >
              <Link
                href="https://order.toasttab.com/online/bangkok-soul-smb-nro-707-e-main-st"
                target="_blank"
                className="flex items-center justify-center gap-2"
              >
                Order Now <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Dish grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
          {/* Standard */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 md:p-8">
            <h3 className="font-headline text-lg md:text-xl font-bold text-white mb-4 md:mb-6">
              Dishes
            </h3>
            <ul className="space-y-3">
              {standardDishes.map((dish, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-white/40 font-mono text-xs w-5 shrink-0">
                    {i + 1}.
                  </span>
                  <span className="text-white text-sm md:text-base font-medium">
                    {dish}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Premium */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <h3 className="font-headline text-lg md:text-xl font-bold text-white">
                Premium Dishes
              </h3>
              <span className="inline-flex items-center gap-1 bg-yellow-300/20 text-yellow-200 text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border border-yellow-200/30">
                <Star className="w-2.5 h-2.5 fill-current" /> +$2
              </span>
            </div>
            <ul className="space-y-3">
              {premiumDishes.map((dish, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-white/40 font-mono text-xs w-5 shrink-0">
                    {i + 8}.
                  </span>
                  <span className="text-white text-sm md:text-base font-medium">
                    {dish}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sides / Soup / Drinks strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-white/20">
            <h4 className="text-white/60 font-bold uppercase tracking-widest text-xs mb-3">
              Choose 1 Side
            </h4>
            <p className="text-white text-sm md:text-base font-medium leading-relaxed">
              Pot Stickers · Egg Roll · Green Salad · Curry Croquette
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-white/20">
            <h4 className="text-white/60 font-bold uppercase tracking-widest text-xs mb-3">
              Soup
            </h4>
            <p className="text-white text-sm md:text-base font-medium">
              Bangkok Daikon Soup
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-white/20">
            <h4 className="text-white/60 font-bold uppercase tracking-widest text-xs mb-3">
              Choose 1 Drink
            </h4>
            <p className="text-white text-sm md:text-base font-medium leading-relaxed">
              Thai Iced Tea · Chrysanthemum Tea · Herbal Tea
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
