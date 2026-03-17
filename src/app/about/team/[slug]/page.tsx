import TeamProfilePage from "@/components/pages/TeamProfilePage";

export default async function Page({
  params,
}: {
  params?: Promise<{ slug: string }> | { slug: string };
}) {
  const resolved = params ? await Promise.resolve(params) : undefined;
  return <TeamProfilePage slug={resolved?.slug} />;
}
