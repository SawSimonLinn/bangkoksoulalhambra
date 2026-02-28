
"use client";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export function ReadBadge({ slug }: { slug: string }) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    async function fetchCount() {
      try {
        const snap = await getDoc(doc(db, "blog_reads", slug));
        if (snap.exists()) setCount(snap.data().count ?? 0);
      } catch {
        // Firebase not configured or offline — fail silently
      }
    }
    fetchCount();
  }, [slug]);

  if (!count) return null;

  return (
    <span className="inline-flex items-center gap-1 text-muted-foreground text-xs">
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
      {count.toLocaleString()}
    </span>
  );
}
