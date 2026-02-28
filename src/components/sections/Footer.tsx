"use client";

import { UtensilsCrossed, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-white border-t border-border pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="bg-primary p-2.5 rounded-full shadow-lg">
                <UtensilsCrossed className="w-6 h-6 text-white" />
              </div>
              <span className="font-headline text-3xl font-bold text-primary">Bangkok Soul</span>
            </Link>
            <p className="text-muted-foreground max-w-sm text-lg leading-relaxed italic">
              Experience the authentic soul of Bangkok street food in Alhambra. Family recipes, 12-hour braised signatures, and heartfelt hospitality.
            </p>
            <div className="flex gap-5">
              <Link href="#" className="p-3.5 bg-background rounded-full hover:bg-primary hover:text-white transition-all shadow-sm"><Instagram className="w-6 h-6" /></Link>
              <Link href="#" className="p-3.5 bg-background rounded-full hover:bg-primary hover:text-white transition-all shadow-sm"><Facebook className="w-6 h-6" /></Link>
              <Link href="#" className="p-3.5 bg-background rounded-full hover:bg-primary hover:text-white transition-all shadow-sm"><Twitter className="w-6 h-6" /></Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-8 uppercase tracking-widest text-primary">Explore</h4>
            <ul className="space-y-5 text-muted-foreground font-medium text-lg">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/menu" className="hover:text-primary transition-colors">Full Menu</Link></li>
              <li><Link href="/culture" className="hover:text-primary transition-colors">Thai Culture</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link href="/admin/dish-generator" className="hover:text-primary transition-colors">Admin Portal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-8 uppercase tracking-widest text-primary">Visit Us</h4>
            <ul className="space-y-5 text-muted-foreground text-lg">
              <li className="leading-relaxed">707 E Main St,<br />Alhambra, CA 91801</li>
              <li className="font-bold text-foreground">(626) 537-1355</li>
              <li className="text-primary underline font-semibold">hello@bangkoksoul.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-base text-muted-foreground italic">
          <p>© {year || 2024} Bangkok Soul Thai Restaurant. All rights reserved.</p>
          <div className="flex gap-10">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
