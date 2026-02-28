
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const testimonials = [
  {
    author: "Grey C",
    stars: 5,
    text: "The food and service was outstanding. I had the snow tofu, pad thai, and the signature Bangkok braised pork leg—the meat was very tender and flavorful. The chili sauce provided was excellent as well. Staff were really attentive and answered any questions we had. Please give this place a try!",
  },
  {
    author: "Brandon Sato",
    stars: 5,
    text: "Came here with a friend for lunch and we both got the fried chicken lunch special. The ginger rice goes well with the chicken, as well as the chicken sauce. The lunch special itself is decent and gives you good value. Staff was attentive and we had no issues.",
  },
  {
    author: "Danika",
    stars: 4,
    text: "Thainese Chicken Rice and Soup was the best dish to me—I liked that they have crispy bits of the rice! Good portion. Coconut Ice Cream had a very generous portion and you can really taste the coconut. The peanut sauce on the Lean Roll was great too.",
  },
];

export function Reviews() {
  return (
    <section className="py-14 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">What Our Guests Say</h2>
          <div className="flex justify-center gap-1 text-secondary">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-current" />)}
          </div>
          <p className="text-muted-foreground text-sm md:text-base">Rated 4.9/5 stars based on 500+ reviews</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8 mb-8 md:mb-12">
          {testimonials.map((t, idx) => (
            <Card key={idx} className="border border-border/50 md:border-none md:shadow-lg bg-white relative pt-10 md:pt-12">
              <div className="absolute top-0 left-6 md:left-8 -translate-y-1/2 bg-primary text-white p-3 md:p-4 rounded-xl md:rounded-2xl">
                <Quote className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <CardContent className="space-y-3 md:space-y-4">
                <div className="flex gap-0.5 text-secondary">
                  {[...Array(t.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="italic text-foreground/80 leading-relaxed text-sm md:text-base">"{t.text}"</p>
                <div className="pt-3 md:pt-4 border-t border-border">
                  <p className="font-bold text-sm md:text-base">{t.author}</p>
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
