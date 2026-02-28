
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { blogPosts } from "@/lib/blog-posts";
import { ReadCounter } from "@/components/blog/ReadCounter";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Bangkok Soul`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const others = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-background pt-32">
      <Header />

      {/* Hero image */}
      <div className="relative h-[50vh] min-h-[360px] w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover"
          data-ai-hint={post.imageHint}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-6 pb-14 space-y-4 w-full">
            <div className="flex items-center gap-3">
              <span className="bg-primary text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-white/70 text-sm">{post.date}</span>
              <span className="text-white/70"><ReadCounter slug={post.slug} /></span>
            </div>
            <h1 className="font-headline text-4xl md:text-6xl font-bold text-white leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="max-w-4xl mx-auto px-6 py-20">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-12 hover:gap-3 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
          Back to all stories
        </Link>

        {/* Lead */}
        <p className="text-xl text-muted-foreground leading-relaxed font-light italic border-l-4 border-primary pl-6 mb-12">
          {post.excerpt}
        </p>

        {/* Body blocks */}
        <div className="space-y-8 text-foreground">
          {post.body.map((block, i) => (
            <div key={i} className="space-y-3">
              {block.heading && (
                <h2 className="font-headline text-2xl md:text-3xl font-bold text-foreground">
                  {block.heading}
                </h2>
              )}
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                {block.text}
              </p>
            </div>
          ))}
        </div>
      </article>

      {/* More stories */}
      {others.length > 0 && (
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6 space-y-10">
            <h2 className="font-headline text-3xl font-bold text-foreground">
              More Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {others.map((other) => (
                <Link key={other.slug} href={`/blog/${other.slug}`} className="group block">
                  <div className="rounded-2xl overflow-hidden shadow-md bg-background h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={other.image}
                        alt={other.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={other.imageHint}
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1 space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                          {other.category}
                        </span>
                      </div>
                      <h3 className="font-headline text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug flex-1">
                        {other.title}
                      </h3>
                      <span className="text-primary font-bold text-sm inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                        Read more
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
