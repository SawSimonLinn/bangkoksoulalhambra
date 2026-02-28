import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";

const menuData = {
  appetizers: [
    {
      name: "Chicken Satay",
      price: "$10.95",
      desc: "Grilled marinated chicken skewers with peanut sauce.",
    },
    {
      name: "Crispy Spring Rolls",
      price: "$8.95",
      desc: "Vegetable filling served with sweet and sour sauce.",
    },
    {
      name: "Thai Dumplings",
      price: "$11.50",
      desc: "Steamed pork and shrimp dumplings with ginger soy.",
    },
  ],
  mains: [
    {
      name: "Bangkok Braised Pork Leg + Soup",
      price: "$18.95",
      desc: "Our house specialty. 12-hour slow-cooked pork leg served with jasmine rice, pickled greens, and spicy-sour chili sauce. Includes soup.",
      isSpecial: true,
    },
    {
      name: "Pad Thai",
      price: "$16.95",
      desc: "Traditional stir-fried noodles with shrimp, tofu, and sprouts.",
    },
    {
      name: "Green Curry",
      price: "$15.95",
      desc: "Spicy coconut curry with bamboo shoots and Thai basil.",
    },
    {
      name: "Pad See Ew",
      price: "$14.95",
      desc: "Wide rice noodles stir-fried with Chinese broccoli and sweet soy.",
    },
    {
      name: "Pineapple Fried Rice",
      price: "$15.50",
      desc: "Jasmine rice with turmeric, raisins, and cashews.",
    },
    {
      name: "Basil Stir-Fry (Pad Krapow)",
      price: "$16.50",
      desc: "Spicy basil stir-fry with choice of ground meat.",
    },
  ],
  desserts: [
    {
      name: "Mango Sticky Rice",
      price: "$9.95",
      desc: "Sweet mango with coconut infused sticky rice.",
    },
    {
      name: "Fried Bananas",
      price: "$7.50",
      desc: "Crispy bananas drizzled with honey and sesame.",
    },
  ],
};

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-background pt-24 md:pt-32">
      <Header />
      <div className="max-w-7xl mx-auto px-5 md:px-6 mb-12 md:mb-24">
        <div className="text-center mb-8 md:mb-16 space-y-3 md:space-y-4">
          <h1 className="font-headline text-3xl md:text-5xl lg:text-7xl font-bold text-primary">
            Our Authentic Menu
          </h1>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto italic">
            Featuring Alhambra's most authentic Bangkok Braised Pork Leg.
          </p>
        </div>

        <Tabs defaultValue="mains" className="w-full">
          <div className="flex justify-center mb-6 md:mb-12 overflow-x-auto">
            <TabsList className="bg-white/50 p-1 rounded-full h-auto flex gap-1 border border-border shadow-sm">
              <TabsTrigger
                value="appetizers"
                className="rounded-full px-4 md:px-8 py-2 md:py-3 text-xs md:text-sm data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Appetizers
              </TabsTrigger>
              <TabsTrigger
                value="mains"
                className="rounded-full px-4 md:px-8 py-2 md:py-3 text-xs md:text-sm data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Main Courses
              </TabsTrigger>
              <TabsTrigger
                value="desserts"
                className="rounded-full px-4 md:px-8 py-2 md:py-3 text-xs md:text-sm data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Desserts
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(menuData).map(([category, items]) => (
            <TabsContent
              key={category}
              value={category}
              className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500 outline-none"
            >
              <div className="grid md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-0">
                {items.map((item, i) => (
                  <div
                    key={i}
                    className={`flex justify-between items-start border-b border-border pb-4 p-3 md:p-4 transition-all rounded-lg ${item.isSpecial ? "bg-secondary/5 border-secondary/20" : ""}`}
                  >
                    <div className="space-y-1 pr-3 md:pr-4">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-sm md:text-xl">
                          {item.name}
                        </h3>
                        {item.isSpecial && (
                          <span className="inline-flex items-center gap-1 bg-secondary/10 text-secondary text-[10px] font-bold uppercase px-2 py-0.5 rounded-full">
                            <Star className="w-2.5 h-2.5 fill-current" />{" "}
                            Signature
                          </span>
                        )}
                      </div>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                    <span className="font-bold text-secondary text-sm md:text-lg whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-10 md:mt-20 p-5 md:p-12 bg-white rounded-2xl border border-border/40 md:border-border/50 md:shadow-xl flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div className="flex-1 space-y-4 md:space-y-6">
            <h2 className="font-headline text-2xl md:text-4xl font-bold">
              Why our Pork Leg is Special?
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg italic leading-relaxed font-light">
              We follow a family recipe from the heart of Bangkok. The pork is
              braised in a complex master stock of five-spice, cinnamon, and
              Thai herbs until the collagen melts into a rich, silky texture.
              It's a rare find in California, and we're proud to serve it with
              traditional clear broth.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-1 md:pt-2">
              <Button
                asChild
                size="lg"
                className="rounded-full px-6 md:px-8 bg-primary w-full sm:w-auto"
              >
                <Link
                  href="https://order.toasttab.com/online/bangkok-soul-smb-nro-707-e-main-st"
                  target="_blank"
                  className="flex items-center justify-center gap-2"
                >
                  Order Online <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-6 md:px-8 border-primary text-primary w-full sm:w-auto hover:bg-primary/5 hover:text-primary transition-colors"
              >
                <Link
                  href="/blog/the-story-behind-our-12-hour-pork-leg"
                  className="flex items-center justify-center gap-2"
                >
                  <Star className="w-4 h-4 mr-2 text-secondary fill-current" />{" "}
                  Our Story
                </Link>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/3 relative h-52 md:h-80 rounded-xl overflow-hidden order-first md:order-last">
            <Image
              src={
                PlaceHolderImages.find((i) => i.id === "dish-braised-pork-leg")
                  ?.imageUrl || "https://picsum.photos/seed/pork/600/800"
              }
              alt="Bangkok Braised Pork Leg"
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
