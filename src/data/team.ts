import { TeamMember } from "@/types/realEstate";

export const teamMembers: TeamMember[] = [
  {
    id: "team-pyume",
    slug: "pyume-wambua",
    name: "Pyume Wambua",
    role: "Chief Executive Officer",
    shortBio:
      "Leads Tabor Realtors with a focus on trusted advisory, listing quality, and long-term client value.",
    fullBio:
      "Pyume is the Chief Executive Officer at Tabor Realtors and has spent years guiding clients through Kenya's evolving property market. She works closely with buyers, sellers, and developers to ensure every listing is presented with clarity, transparency, and care.",
    expertise: ["Executive Leadership", "Client Advisory", "Development Sales"],
    headshot:
      "/team-members/pyume-wambua.jpg",
    heroImage: "/team-members/pyume-wambua.jpg",
    quote: "Building dreams, creating value—one conversation at a time.",
    email: "pyume@taborrealtors.co.ke",
    phone: "+254 717 069 619",
    linkedinUrl: "https://www.linkedin.com/company/tabor-realtors/",
  },
  {
    id: "team-mark",
    slug: "mark-nzau",
    name: "Mark Nzau",
    role: "Head of Investments",
    shortBio:
      "Shapes investment strategy, feasibility, and structured transactions for growth-focused clients.",
    fullBio:
      "Mark blends finance, valuation, and on-the-ground intelligence to match investors with resilient assets. He leads feasibility studies and supports clients through negotiations.",
    expertise: ["Investment Advisory", "Deal Structuring", "Market Analysis"],
    headshot:
      "/team-members/mark-nzau.jpg",
    heroImage: "/team-members/mark-nzau.jpg",
    quote: "Smart capital needs clear information and decisive execution.",
    email: "mark@taborrealtors.co.ke",
    phone: "+254 724 224 793",
    linkedinUrl: "https://www.linkedin.com/company/tabor-realtors/",
  },
  {
    id: "team-simon",
    slug: "simon-waigwa",
    name: "Simon Waigwa",
    role: "Managing Partner",
    shortBio:
      "Drives client strategy, partnerships, and dependable advisory across the transaction journey.",
    fullBio:
      "Simon is a Managing Partner at Tabor Realtors with deep experience supporting clients across Kenya's real estate market. He leads relationship management, strategic partnerships, and client advisory services to ensure every transaction is handled with clarity and care.",
    expertise: ["Client Strategy", "Strategic Partnerships", "Property Advisory"],
    headshot:
      "/team-members/simon-waigwa.jpg",
    heroImage: "/team-members/simon-waigwa.jpg",
    quote: "Strong partnerships and trusted advice create lasting value.",
    email: "simon@taborrealtors.co.ke",
    phone: "+254 705 565 375",
    linkedinUrl: "https://www.linkedin.com/company/tabor-realtors/",
  },
];

const teamMembersBySlug = new Map(teamMembers.map((member) => [member.slug, member]));
const teamMembersByName = new Map(
  teamMembers.map((member) => [member.name.trim().toLowerCase(), member])
);

export const getPrimaryTeamMember = () => teamMembers[0];

export const getTeamMemberBySlug = (slug?: string | null) =>
  slug ? teamMembersBySlug.get(slug) : undefined;

export const resolveTeamMember = ({
  slug,
  name,
}: {
  slug?: string | null;
  name?: string | null;
}) => {
  const memberBySlug = getTeamMemberBySlug(slug);

  if (memberBySlug) {
    return memberBySlug;
  }

  if (!name) {
    return undefined;
  }

  return teamMembersByName.get(name.trim().toLowerCase());
};
