import SingleDevelopmentPage from "@/components/pages/SingleDevelopmentPage";

export default async function Page({
  params,
}: {
  params?: Promise<{ slug: string }> | { slug: string };
}) {
  const resolved = params ? await Promise.resolve(params) : undefined;
  const slug = resolved?.slug;
  return <SingleDevelopmentPage slug={slug} />;
}
