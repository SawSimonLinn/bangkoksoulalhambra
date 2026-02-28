
"use client";

import { Utensils, ShoppingBag, Truck, MousePointerClick } from "lucide-react";

const services = [
  { icon: Utensils, title: "Dine-In", desc: "Minimal & Cozy" },
  { icon: ShoppingBag, title: "Takeout", desc: "Freshly Packed" },
  { icon: Truck, title: "Delivery", desc: "To Your Door" },
  { icon: MousePointerClick, title: "Order Online", desc: "Fast & Easy" },
];

export function ServiceOptions() {
  return (
    <section className="py-8 md:py-16">
      {/* Mobile: horizontal scroll strip */}
      <div className="md:hidden px-5 overflow-x-auto scrollbar-none">
        <div className="flex gap-3 w-max">
          {services.map((s, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-white border border-border/30 rounded-2xl px-4 py-3 cursor-default group">
              <div className="bg-primary/5 p-2.5 rounded-xl shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                <s.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
              </div>
              <div>
                <p className="font-headline text-sm font-bold leading-tight">{s.title}</p>
                <p className="text-muted-foreground text-xs">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: open layout, no card */}
      <div className="hidden md:block max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-4 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-4 group cursor-default">
              <div className="bg-primary/5 p-6 rounded-2xl transition-colors group-hover:bg-primary group-hover:text-white">
                <s.icon className="w-8 h-8 transition-transform group-hover:scale-110" />
              </div>
              <div className="space-y-1">
                <h3 className="font-headline text-xl font-bold">{s.title}</h3>
                <p className="text-muted-foreground text-sm font-medium">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
