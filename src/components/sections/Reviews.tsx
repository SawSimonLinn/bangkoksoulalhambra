
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const testimonials = [
  {
    author: "James L.",
    stars: 5,
    text: "Best Thai food in San Gabriel! Authentic and flavorful. The Pad Thai is exactly like the one I had in Bangkok.",
  },
  {
    author: "Sarah W.",
    stars: 5,
    text: "Modern, cozy, and the staff is incredibly warm. Their Green Curry is a must-try. Definitely our new favorite spot.",
  },
  {
    author: "Michael T.",
    stars: 5,
    text: "Super fresh ingredients and the spiciness levels are perfect. Delivery was quick and the food was still piping hot!",
  },
];

export function Reviews() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline text-4xl font-bold">What Our Guests Say</h2>
          <div className="flex justify-center gap-1 text-secondary">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
          </div>
          <p className="text-muted-foreground">Rated 4.9/5 stars based on 500+ reviews</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((t, idx) => (
            <Card key={idx} className="border-none shadow-lg bg-white relative pt-12">
              <div className="absolute top-0 left-8 -translate-y-1/2 bg-primary text-white p-4 rounded-2xl">
                <Quote className="w-6 h-6" />
              </div>
              <CardContent className="space-y-4">
                <div className="flex gap-0.5 text-secondary">
                  {[...Array(t.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="italic text-foreground/80 leading-relaxed">"{t.text}"</p>
                <div className="pt-4 border-t border-border">
                  <p className="font-bold">{t.author}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all">
            <Link href="https://www.google.com/maps/place/Bangkok+Soul/@34.0989628,-118.1199026,16z/data=!4m17!1m8!3m7!1s0x80c2c5000765b139:0x9a62f46dc5b7ca59!2sBangkok+Soul!8m2!3d34.0991383!4d-118.1199699!10e9!16s%2Fg%2F11xkg3r_cf!3m7!1s0x80c2c5000765b139:0x9a62f46dc5b7ca59!8m2!3d34.0991383!4d-118.1199699!9m1!1b1!16s%2Fg%2F11xkg3r_cf?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D#:~:text=Menu-,Reviews,-About" target="_blank">
              Leave a Review
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
