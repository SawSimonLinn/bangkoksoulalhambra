
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

const menuItems = [
  { name: "Pineapple Fried Rice", description: "Jasmine rice with turmeric, raisins, cashews", price: "$15.50" },
  { name: "Pad See Ew", description: "Wide rice noodles with Chinese broccoli, sweet soy", price: "$14.95" },
  { name: "Red Curry", description: "Rich coconut curry with red chilies and vegetables", price: "$15.95" },
  { name: "Thai Tea", description: "Traditional sweet tea with creamy milk", price: "$5.00" },
  { name: "Chicken Satay", description: "Grilled skewers with peanut sauce", price: "$10.95" },
  { name: "Papaya Salad", description: "Shredded green papaya with lime and chilies", price: "$12.50" },
];

export function MenuPreview() {
  return (
    <section id="menu" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold mb-4">Our Popular Classics</h2>
          <p className="text-muted-foreground">A curated selection of our guests' daily favorites.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 mb-16">
          {menuItems.map((item, idx) => (
            <div key={idx} className="flex justify-between items-start border-b border-border pb-6 group">
              <div className="space-y-1">
                <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
              <span className="font-medium text-secondary">{item.price}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button asChild size="lg" className="rounded-full px-8 h-14 bg-primary">
            <Link href="#full-menu" className="flex items-center gap-2">
              View Full Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 bg-white/50 border-primary/20 text-primary">
            <Link href="#" target="_blank" className="flex items-center gap-2">
              <FileText className="w-4 h-4" /> Download PDF Menu
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
