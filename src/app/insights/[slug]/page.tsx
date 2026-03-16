import BlogPostPage from "@/components/pages/BlogPostPage";

export default async function Page({
  params,
}: {
  params?: Promise<{ slug: string }> | { slug: string };
}) {
  const resolved = params ? await Promise.resolve(params) : undefined;
  const slug = resolved?.slug;
  return <BlogPostPage slug={slug} />;
}
