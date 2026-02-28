import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import Link from "next/link";

export function LocationHours() {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="font-headline text-4xl md:text-5xl font-bold">Find Us in Alhambra</h2>
              <p className="text-muted-foreground text-lg">
                Authentic Thai flavors in the heart of Alhambra.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-10">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-primary/5 p-3 rounded-full text-primary shrink-0 h-fit">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-lg">Address</h4>
                    <p className="text-muted-foreground leading-relaxed">707 E Main St,<br />Alhambra, CA 91801</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/5 p-3 rounded-full text-primary shrink-0 h-fit">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-lg">Phone</h4>
                    <p className="text-muted-foreground">(626) 537-1355</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary/5 p-3 rounded-full text-primary shrink-0 h-fit">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold mb-1 text-lg">Hours</h4>
                  <ul className="text-muted-foreground text-sm space-y-2">
                    <li className="flex justify-between gap-4 border-b border-border pb-1">
                      <span>Mon - Sun</span> 
                      <span className="font-medium text-foreground">11:00 AM - 9:00 PM</span>
                    </li>
                    <li className="text-[10px] uppercase font-bold text-primary tracking-widest pt-1">
                      Open Daily
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild className="rounded-full h-14 px-8 text-lg w-full sm:w-auto shadow-lg hover:shadow-xl transition-all">
                <Link href="https://maps.google.com/?q=707+E+Main+St,+Alhambra,+CA+91801" target="_blank" className="flex items-center gap-2">
                  <Navigation className="w-4 h-4" /> Get Directions
                </Link>
              </Button>
              <Button asChild variant="secondary" className="rounded-full h-14 px-8 text-lg w-full sm:w-auto bg-background border hover:bg-muted transition-all">
                <Link href="tel:+16265371355" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Call Now
                </Link>
              </Button>
            </div>
          </div>

          <div className="h-[350px] sm:h-[450px] rounded-2xl overflow-hidden shadow-xl border border-border relative grayscale hover:grayscale-0 transition-all duration-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.582306859367!2d-118.1165163!3d34.0934182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2cf71ad83ff9d%3A0x51480f7457d779!2s707%20E%20Main%20St%2C%20Alhambra%2C%20CA%2091801!5e0!3m2!1sen!2susa!4v1711234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}