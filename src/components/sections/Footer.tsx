"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-white border-t border-border pt-12 pb-8 md:pt-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mb-10 md:mb-20">
          <div className="col-span-2 space-y-5 md:space-y-8">
            <Link href="/" className="flex items-center gap-2 md:gap-3 group">
              <Image
                src="/imges/logo.png"
                alt="Bangkok Soul logo"
                width={48}
                height={48}
                className="object-contain"
              />
              <span className="font-headline text-2xl md:text-3xl font-bold text-primary">Bangkok Soul</span>
            </Link>
            <p className="text-muted-foreground max-w-sm text-sm md:text-lg leading-relaxed italic">
              Experience the authentic soul of Bangkok street food in Alhambra. Family recipes, 12-hour braised signatures, and heartfelt hospitality.
            </p>
            <div className="flex gap-3 md:gap-5">
              <Link href="https://www.instagram.com/bangkoksoulalhambra/" target="_blank" rel="noopener noreferrer" className="p-2.5 md:p-3.5 bg-background rounded-full hover:bg-primary hover:text-white transition-all"><Instagram className="w-5 h-5 md:w-6 md:h-6" /></Link>
              <Link href="#" className="p-2.5 md:p-3.5 bg-background rounded-full hover:bg-primary hover:text-white transition-all"><Facebook className="w-5 h-5 md:w-6 md:h-6" /></Link>
              <Link href="#" className="p-2.5 md:p-3.5 bg-background rounded-full hover:bg-primary hover:text-white transition-all"><Twitter className="w-5 h-5 md:w-6 md:h-6" /></Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xs md:text-sm mb-5 md:mb-8 uppercase tracking-widest text-primary">Explore</h4>
            <ul className="space-y-3 md:space-y-5 text-muted-foreground font-medium text-sm md:text-lg">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/menu" className="hover:text-primary transition-colors">Full Menu</Link></li>
              <li><Link href="/culture" className="hover:text-primary transition-colors">Thai Culture</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs md:text-sm mb-5 md:mb-8 uppercase tracking-widest text-primary">Visit Us</h4>
            <ul className="space-y-3 md:space-y-5 text-muted-foreground text-sm md:text-lg">
              <li className="leading-relaxed">707 E Main St,<br />Alhambra, CA 91801</li>
              <li className="font-bold text-foreground">(626) 537-1355</li>
              <li className="text-primary underline font-semibold">hello@bangkoksoul.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 md:pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-sm md:text-base text-muted-foreground italic">
          <p>© {year || 2024} Bangkok Soul Thai Restaurant. All rights reserved.</p>
          <div className="flex gap-6 md:gap-10">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-use" className="hover:text-primary transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
