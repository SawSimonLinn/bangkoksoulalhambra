
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
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-white rounded-2xl shadow-lg p-12 border border-border/50">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {services.map((s, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-5 group cursor-default">
                <div className="bg-primary/5 p-6 rounded-xl transition-colors group-hover:bg-primary group-hover:text-white">
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
      </div>
    </section>
  );
}
