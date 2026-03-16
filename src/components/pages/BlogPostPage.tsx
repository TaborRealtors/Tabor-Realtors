"use client";

import { BlogPost } from "./BlogPost";
import { useRouter } from "next/navigation";
import { mapPageToPath } from "@/lib/navigation-map";

export default function BlogPostPage({ slug }: { slug?: string }) {
  const router = useRouter();
  return <BlogPost slug={slug} onNavigate={(p, id) => router.push(mapPageToPath(p, id))} />;
}
