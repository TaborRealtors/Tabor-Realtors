"use client";

import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { Mail, Phone, Linkedin } from "lucide-react";
import { getPrimaryTeamMember, getTeamMemberBySlug } from "@/data/team";

interface TeamProfileProps {
  slug?: string;
  onNavigate: (page: string, id?: string) => void;
}

export function TeamProfile({ slug, onNavigate }: TeamProfileProps) {
  const profile = slug ? getTeamMemberBySlug(slug) : getPrimaryTeamMember();

  if (!profile) {
    return (
      <div className="min-h-screen bg-background px-4 py-24">
        <div className="mx-auto max-w-2xl rounded-2xl bg-white p-10 text-center shadow-sm">
          <h1 className="mb-4 text-3xl font-semibold text-[#0D402D]">Team profile not found</h1>
          <p className="mb-8 text-muted-foreground">
            The requested author profile could not be found. Return to the team directory to continue browsing.
          </p>
          <button
            type="button"
            onClick={() => onNavigate("team")}
            className="rounded bg-primary px-6 py-3 text-white transition-colors hover:bg-[#0a3222]"
          >
            Back to Our Team
          </button>
        </div>
      </div>
    );
  }

  const bio = [profile.shortBio, profile.fullBio].filter(
    (paragraph, index, allParagraphs) => Boolean(paragraph) && allParagraphs.indexOf(paragraph) === index
  );

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[500px] overflow-hidden">
        <ImageWithFallback
          key={`${profile.slug}-hero`}
          src={profile.heroImage}
          alt={profile.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute top-8 left-0 right-0">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-white">
              <button onClick={() => onNavigate("home")} className="hover:underline">Home</button>
              <span className="mx-2">/</span>
              <button onClick={() => onNavigate("team")} className="hover:underline">Our Team</button>
              <span className="mx-2">/</span>
              <span>{profile.name}</span>
            </nav>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <h1 className="mb-2 text-4xl md:text-5xl" style={{ color: "#FFFFFF", fontWeight: 600 }}>
              {profile.name}
            </h1>
            <p className="text-xl text-white/90">{profile.role}</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-1">
            <div className="relative mb-6 h-[400px] overflow-hidden rounded-lg shadow-lg">
              <ImageWithFallback
                key={`${profile.slug}-headshot`}
                src={profile.headshot}
                alt={profile.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="rounded-lg bg-secondary p-6">
              <h3 className="mb-4 text-lg" style={{ color: "#0D402D" }}>
                Contact Information
              </h3>
              <div className="space-y-3">
                {profile.email ? (
                  <div className="flex items-center text-muted-foreground">
                    <Mail className="mr-3 h-5 w-5 text-primary" />
                    <a href={`mailto:${profile.email}`} className="transition-colors hover:text-primary">
                      {profile.email}
                    </a>
                  </div>
                ) : null}
                {profile.phone ? (
                  <div className="flex items-center text-muted-foreground">
                    <Phone className="mr-3 h-5 w-5 text-primary" />
                    <a
                      href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                      className="transition-colors hover:text-primary"
                    >
                      {profile.phone}
                    </a>
                  </div>
                ) : null}
                {profile.linkedinUrl ? (
                  <div className="flex items-center text-muted-foreground">
                    <Linkedin className="mr-3 h-5 w-5 text-primary" />
                    <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-primary">
                      Connect on LinkedIn
                    </a>
                  </div>
                ) : null}
              </div>
              <button
                type="button"
                onClick={() => onNavigate("contact")}
                className="mt-6 w-full rounded bg-primary px-6 py-3 text-white transition-colors hover:bg-[#0a3222]"
              >
                Schedule a Meeting
              </button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="mb-6 text-2xl" style={{ color: "#0D402D" }}>
              Biography
            </h2>
            <div className="prose max-w-none space-y-4 text-muted-foreground">
              {bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="mb-4 text-lg" style={{ color: "#0D402D" }}>
                Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.expertise.map((item) => (
                  <span key={item} className="rounded-full bg-secondary px-4 py-2 text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-white">
        <div className="mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 text-6xl opacity-50">&quot;</div>
            <blockquote className="mb-6 text-2xl italic">
              {profile.quote}
            </blockquote>
            <cite className="text-lg not-italic">- {profile.name}</cite>
          </div>
        </div>
      </section>
    </div>
  );
}
