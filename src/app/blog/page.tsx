
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { blogPosts } from "@/lib/blog-posts";
import { ReadBadge } from "@/components/blog/ReadBadge";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blog | Bangkok Soul",
  description:
    "Stories, recipes, culture, and news from Bangkok Soul — authentic Thai restaurant in San Gabriel, CA.",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <main className="min-h-screen bg-background pt-32">
      <Header />

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 mb-20 space-y-4 text-center">
        <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">
          Bangkok Soul
        </span>
        <h1 className="font-headline text-5xl md:text-7xl font-bold text-foreground">
          Stories &amp; Culture
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Behind every dish is a story. Here we share ours — the food, the
          people, and the traditions that make Bangkok Soul what it is.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-32 space-y-16">
        {/* Featured post */}
        <Link href={`/blog/${featured.slug}`} className="group block">
          <div className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-xl bg-white">
            <div className="relative h-72 lg:h-auto min-h-[380px]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                data-ai-hint={featured.imageHint}
              />
            </div>
            <div className="p-10 lg:p-16 flex flex-col justify-center space-y-6">
              <div className="flex items-center gap-3">
                <span className="bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {featured.category}
                </span>
                <span className="text-muted-foreground text-sm">{featured.date}</span>
                <ReadBadge slug={featured.slug} />
              </div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                {featured.title}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-light">
                {featured.excerpt}
              </p>
              <span className="text-primary font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                Read more
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </div>
          </div>
        </Link>

        {/* Post grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <div className="rounded-2xl overflow-hidden shadow-md bg-white h-full flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={post.imageHint}
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 space-y-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-muted-foreground text-xs">{post.date}</span>
                    <ReadBadge slug={post.slug} />
                  </div>
                  <h3 className="font-headline text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug flex-1">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="text-primary font-bold text-sm inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all pt-1">
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
