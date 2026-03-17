import { NextRequest, NextResponse } from "next/server";
import { getTeamMemberBySlug } from "@/data/team";

type Context = { params: Promise<{ slug: string }> };

export async function GET(_request: NextRequest, context: Context) {
  const { slug } = await context.params;
  const member = getTeamMemberBySlug(slug);
  if (!member) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(member);
}
