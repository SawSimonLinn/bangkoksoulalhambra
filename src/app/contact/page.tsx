
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { LocationHours } from "@/components/sections/LocationHours";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Mail, Phone, Calendar } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const reviewUrl = "https://www.google.com/maps/place/Bangkok+Soul/@34.0989628,-118.1199026,16z/data=!4m17!1m8!3m7!1s0x80c2c5000765b139:0x9a62f46dc5b7ca59!2sBangkok+Soul!8m2!3d34.0991383!4d-118.1199699!10e9!16s%2Fg%2F11xkg3r_cf!3m7!1s0x80c2c5000765b139:0x9a62f46dc5b7ca59!8m2!3d34.0991383!4d-118.1199699!9m1!1b1!16s%2Fg%2F11xkg3r_cf?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D#:~:text=Menu-,Reviews,-About";

  return (
    <main className="min-h-screen bg-background pt-24 md:pt-32">
      <Header />
      <div className="max-w-7xl mx-auto px-5 md:px-6 mb-12 md:mb-24">
        <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
          <h1 className="font-headline text-3xl md:text-5xl lg:text-7xl font-bold text-primary">Visit Bangkok Soul</h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto italic">
            Authentic Thai flavors right in the heart of San Gabriel Valley.
          </p>
        </div>

        <LocationHours />

        <div className="mt-10 md:mt-24 grid md:grid-cols-3 gap-4 md:gap-8">
          <Card className="border border-border/50 md:border-none md:shadow-lg text-center p-5 md:p-8 bg-white">
            <CardContent className="space-y-3 md:space-y-4 pt-4 md:pt-6">
              <div className="mx-auto w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Calendar className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="font-bold text-base md:text-xl">Reservations</h3>
              <p className="text-sm text-muted-foreground">Planning a large gathering? We recommend booking in advance.</p>
              <Button asChild variant="link" className="text-primary font-bold text-sm md:text-base">
                <Link href="tel:+16265371355">Call to Reserve</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border border-border/50 md:border-none md:shadow-lg text-center p-5 md:p-8 bg-white">
            <CardContent className="space-y-3 md:space-y-4 pt-4 md:pt-6">
              <div className="mx-auto w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Mail className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="font-bold text-base md:text-xl">Email Us</h3>
              <p className="text-sm text-muted-foreground">For general inquiries and catering questions.</p>
              <p className="text-primary font-bold text-sm md:text-base">hello@bangkoksoul.com</p>
            </CardContent>
          </Card>

          <Card className="border border-border/50 md:border-none md:shadow-lg text-center p-5 md:p-8 bg-white">
            <CardContent className="space-y-3 md:space-y-4 pt-4 md:pt-6">
              <div className="mx-auto w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="font-bold text-base md:text-xl">Feedback</h3>
              <p className="text-sm text-muted-foreground">We'd love to hear about your experience.</p>
              <Button asChild variant="link" className="text-primary font-bold text-sm md:text-base">
                <Link href={reviewUrl} target="_blank">Leave a Review</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </main>
  );
}
