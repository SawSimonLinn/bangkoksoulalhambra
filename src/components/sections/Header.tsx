
"use client";

import { Button } from "@/components/ui/button";
import { Menu, ArrowUpRight, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader, SheetDescription } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/culture", label: "Culture" },
  { href: "/contact", label: "Contact Us" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const showSolidStyle = !isHomePage || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      {/* Top Utility Bar - Hidden on small mobile, visible on tablet+ */}
      <div className={cn(
        "hidden sm:block py-2.5 px-6 md:px-8 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.1em] transition-all border-b",
        showSolidStyle 
          ? "bg-white text-muted-foreground border-border" 
          : "bg-black/20 text-white/80 border-white/10"
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="truncate mr-4">707 E MAIN ST, ALHAMBRA, CA 91801</span>
          <span className="whitespace-nowrap flex items-center gap-2">
            OPEN DAILY • 11:00 AM TO 09:00 PM
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={cn(
        "px-6 md:px-8 transition-all duration-500",
        showSolidStyle ? "bg-white/95 backdrop-blur-xl shadow-md py-3 md:py-4" : "bg-transparent py-5 md:py-6"
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between lg:grid lg:grid-cols-3">
          
          {/* Desktop Nav Links (Left) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[11px] font-bold uppercase tracking-[0.2em] transition-colors",
                  showSolidStyle ? "text-muted-foreground hover:text-primary" : "text-white/80 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Logo (Center on Desktop, Left on Mobile) */}
          <div className="flex lg:justify-center">
            <Link href="/" className="group">
              <span className={cn(
                "font-headline text-2xl md:text-3xl font-bold tracking-tight transition-colors",
                showSolidStyle ? "text-primary" : "text-white"
              )}>
                bangkok soul.
              </span>
            </Link>
          </div>

          {/* Action Buttons (Right) */}
          <div className="flex justify-end items-center gap-3 md:gap-4">
            <Button asChild size="sm" className={cn(
              "rounded-full px-5 md:px-8 h-10 md:h-12 text-[10px] md:text-[11px] uppercase tracking-widest font-bold border-none transition-all hover:scale-105",
              showSolidStyle ? "bg-primary text-white" : "bg-primary text-white shadow-xl"
            )}>
              <Link href="https://order.toasttab.com/online/bangkok-soul-smb-nro-707-e-main-st" target="_blank" className="flex items-center gap-2">
                Order <span className="hidden sm:inline">Now</span> <ArrowUpRight className="w-3 h-3 md:w-3.5 md:h-3.5" />
              </Link>
            </Button>

            {/* Mobile Menu Trigger */}
            <div className="lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className={cn("transition-colors p-0 h-10 w-10", showSolidStyle ? "text-primary" : "text-white")}>
                    <Menu className="w-6 h-6 md:w-7 md:h-7" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-background border-none w-full sm:w-[350px] p-0">
                  <div className="flex flex-col h-full bg-white">
                    <SheetHeader className="px-8 py-6 border-b space-y-0">
                      <div className="flex items-center">
                        <SheetTitle className="font-headline text-2xl font-bold text-primary text-left">
                          bangkok soul.
                        </SheetTitle>
                      </div>
                      <SheetDescription className="sr-only">
                        Bangkok Soul navigation menu
                      </SheetDescription>
                    </SheetHeader>
                    <nav className="flex flex-col gap-2 p-8">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "text-4xl font-headline font-bold py-4 transition-colors",
                            pathname === link.href ? "text-primary" : "text-foreground/40"
                          )}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                    <div className="mt-auto p-8 border-t bg-muted/30">
                      <div className="space-y-4">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Follow Us</p>
                        <div className="flex gap-4">
                          <Link href="#" className="w-10 h-10 rounded-full bg-white border flex items-center justify-center text-primary shadow-sm text-[10px] font-bold">IG</Link>
                          <Link href="#" className="w-10 h-10 rounded-full bg-white border flex items-center justify-center text-primary shadow-sm text-[10px] font-bold">FB</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
