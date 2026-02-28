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
      <div className="max-w-5xl mx-auto px-6 md:px-8 mb-32 space-y-16 md:space-y-24">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] md:text-sm font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4" /> Discover Thailand
          </div>
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary">Soul of Thailand</h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto italic font-light">
            Beyond the food, we want to share the warmth and wisdom of our heritage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:grid-cols-2 md:gap-16 items-start">
          <div className="space-y-10 md:space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                <Heart className="text-primary w-7 h-7 md:w-8 md:h-8" /> The Spirit of Sanuk
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light">
                Thai culture is rooted in <strong>Sanuk</strong>: the idea that life should be approached with a sense of joy and playfulness. Even the most mundane tasks are done with a smile. At Bangkok Soul, we bring this spirit to our service and our kitchen.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                <BookOpen className="text-primary w-7 h-7 md:w-8 md:h-8" /> The Wai
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light">
                The traditional Thai greeting involves pressing your palms together in a prayer-like gesture and bowing slightly. It's a sign of respect and heart-to-heart connection. Feel free to Wai back when you visit us!
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-xl border border-border/50 space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-primary">
              <Languages className="w-7 h-7 md:w-8 md:h-8" /> Speak Like a Local
            </h2>
            <div className="space-y-6">
              {phrases.map((p, i) => (
                <div key={i} className="group border-b border-border pb-4 last:border-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-xl md:text-2xl font-bold text-primary">{p.thai}</span>
                    <span className="text-base md:text-lg font-medium italic text-muted-foreground">{p.phonetic}</span>
                  </div>
                  <p className="font-bold text-base md:text-lg mb-1">{p.meaning}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{p.context}</p>
                </div>
              ))}
            </div>
            <div className="pt-4 text-center">
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