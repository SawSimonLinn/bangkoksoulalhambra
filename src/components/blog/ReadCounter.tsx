
"use client";

import { useEffect, useState } from "react";
import { doc, getDoc, setDoc, increment } from "firebase/firestore";
import { db } from "@/lib/firebase";

export function ReadCounter({ slug }: { slug: string }) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    async function trackRead() {
      try {
        const ref = doc(db, "blog_reads", slug);
        await setDoc(ref, { count: increment(1) }, { merge: true });
        const snap = await getDoc(ref);
        setCount(snap.data()?.count ?? 1);
      } catch {
        // Firebase not configured or offline — fail silently
      }
    }
    trackRead();
  }, [slug]);

  if (count === null) return null;

  return (
    <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
      {count.toLocaleString()} {count === 1 ? "read" : "reads"}
    </span>
  );
}
