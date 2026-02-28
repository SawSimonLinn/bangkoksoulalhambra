
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
    <main className="min-h-screen bg-background pt-32">
      <Header />
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center mb-16 space-y-4">
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary">Visit Bangkok Soul</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto italic">
            Authentic Thai flavors right in the heart of San Gabriel Valley.
          </p>
        </div>

        <LocationHours />

        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg text-center p-8 bg-white hover:scale-105 transition-transform">
            <CardContent className="space-y-4 pt-6">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl">Reservations</h3>
              <p className="text-sm text-muted-foreground">Planning a large gathering? We recommend booking in advance.</p>
              <Button asChild variant="link" className="text-primary font-bold">
                <Link href="tel:+16265371355">Call to Reserve</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg text-center p-8 bg-white hover:scale-105 transition-transform">
            <CardContent className="space-y-4 pt-6">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl">Email Us</h3>
              <p className="text-sm text-muted-foreground">For general inquiries and catering questions.</p>
              <p className="text-primary font-bold">hello@bangkoksoul.com</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg text-center p-8 bg-white hover:scale-105 transition-transform">
            <CardContent className="space-y-4 pt-6">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl">Feedback</h3>
              <p className="text-sm text-muted-foreground">We'd love to hear about your experience.</p>
              <Button asChild variant="link" className="text-primary font-bold">
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
