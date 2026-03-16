"use client";

import { SingleDevelopment } from "./SingleDevelopment";
import { useRouter } from "next/navigation";
import { mapPageToPath } from "@/lib/navigation-map";
import { useEnquiry } from "@/components/EnquiryContext";

interface SingleDevelopmentPageProps {
  slug?: string;
}

export default function SingleDevelopmentPage({ slug }: SingleDevelopmentPageProps) {
  const router = useRouter();
  const { openEnquiry } = useEnquiry();

  return (
    <SingleDevelopment
      slug={slug}
      onNavigate={(p, id) => router.push(mapPageToPath(p, id))}
      onEnquire={(name) => openEnquiry(name)}
      isAdmin={false}
    />
  );
}
