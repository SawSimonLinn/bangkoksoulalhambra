import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { BookOpen, Languages, Heart, Sparkles } from "lucide-react";

const phrases = [
  { thai: "สวัสดี", phonetic: "Sa-wat-dee", meaning: "Hello / Goodbye", context: "Use with a 'Wai' (bow)" },
  { thai: "ขอบคุณ", phonetic: "Khop-khun", meaning: "Thank You", context: "Essential for every interaction" },
  { thai: "อร่อยมาก", phonetic: "A-roi Maak", meaning: "Very Delicious!", context: "Say this to the Chef!" },
  { thai: "เท่าไหร่?", phonetic: "Tao-rai?", meaning: "How much?", context: "Useful for the bill" },
  { thai: "เช็คบิล", phonetic: "Check-bin", meaning: "Bill, please", context: "To finish your meal" },
];

export default function CulturePage() {
  return (
    <main className="min-h-screen bg-background pt-24 md:pt-32">
      <Header />
      <div className="max-w-5xl mx-auto px-5 md:px-8 mb-16 md:mb-32 space-y-12 md:space-y-24">
        <div className="text-center space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-primary/10 text-primary text-[10px] md:text-sm font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4" /> Discover Thailand
          </div>
          <h1 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold text-primary">Soul of Thailand</h1>
          <p className="text-muted-foreground text-base md:text-xl max-w-2xl mx-auto italic font-light">
            Beyond the food, we want to share the warmth and wisdom of our heritage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div className="space-y-8 md:space-y-12">
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-xl md:text-3xl font-bold flex items-center gap-2 md:gap-3">
                <Heart className="text-primary w-6 h-6 md:w-8 md:h-8 shrink-0" /> The Spirit of Sanuk
              </h2>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed font-light">
                Thai culture is rooted in <strong>Sanuk</strong>: the idea that life should be approached with a sense of joy and playfulness. Even the most mundane tasks are done with a smile. At Bangkok Soul, we bring this spirit to our service and our kitchen.
              </p>
            </div>
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-xl md:text-3xl font-bold flex items-center gap-2 md:gap-3">
                <BookOpen className="text-primary w-6 h-6 md:w-8 md:h-8 shrink-0" /> The Wai
              </h2>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed font-light">
                The traditional Thai greeting involves pressing your palms together in a prayer-like gesture and bowing slightly. It's a sign of respect and heart-to-heart connection. Feel free to Wai back when you visit us!
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 md:p-10 border border-border/50 md:border-none md:shadow-xl space-y-5 md:space-y-8">
            <h2 className="text-xl md:text-3xl font-bold flex items-center gap-2 md:gap-3 text-primary">
              <Languages className="w-6 h-6 md:w-8 md:h-8 shrink-0" /> Speak Like a Local
            </h2>
            <div className="space-y-4 md:space-y-6">
              {phrases.map((p, i) => (
                <div key={i} className="group border-b border-border pb-3 md:pb-4 last:border-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-lg md:text-2xl font-bold text-primary">{p.thai}</span>
                    <span className="text-sm md:text-lg font-medium italic text-muted-foreground">{p.phonetic}</span>
                  </div>
                  <p className="font-bold text-sm md:text-lg mb-0.5 md:mb-1">{p.meaning}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{p.context}</p>
                </div>
              ))}
            </div>
            <div className="pt-2 md:pt-4 text-center">
              <p className="text-xs md:text-sm text-primary font-bold italic leading-relaxed">
                Pro Tip: Add "Krup" (if you're male) or "Ka" (if you're female) at the end of every sentence to be extra polite!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}