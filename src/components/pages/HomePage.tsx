"use client";

import { ArrowRight } from "lucide-react";
import { SearchBar } from "@/components/SearchBar";
import { PropertyCard } from "@/components/PropertyCard";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { BlogCard } from "@/components/BlogCard";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { insights } from "@/data/insights";
import { resolveTeamMember, teamMembers } from "@/data/team";

interface HomePageProps {
  onNavigate: (page: string, id?: string) => void;
  onEnquire: (name: string) => void;
}

const homeInsightDateFormatter = new Intl.DateTimeFormat("en-KE", {
  year: "numeric",
  month: "short",
  day: "numeric",
  timeZone: "UTC",
});

export default function HomePage({ onNavigate, onEnquire }: HomePageProps) {
  const latestInsights = insights.slice(0, 3).map((item) => {
    const authorProfile = resolveTeamMember({ slug: item.authorSlug, name: item.authorName });

    return {
      id: item.slug,
      image: item.featuredImage,
      title: item.title,
      excerpt: item.excerpt,
      author: authorProfile?.name ?? item.authorName,
      authorSlug: authorProfile?.slug,
      authorImage: authorProfile?.headshot ?? "/team-members/pyume-wambua.jpg",
      authorRole: authorProfile?.role,
      date: homeInsightDateFormatter.format(new Date(item.publishedAt)),
      readTime: `${item.readTimeMinutes} min read`,
      views: item.views,
      comments: item.commentsCount,
      likes: item.likes,
      category: item.category ?? "Insights",
    };
  });

  return (
    <>
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1709420838688-ccd0517d6a2d?auto=format&fit=max&w=1600&q=80"
          alt="Luxury Property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-6xl mb-4" style={{ color: "#FFFFFF", fontWeight: 600 }}>
              Find Your Dream Home in Kenya
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Discover exceptional properties across the nation
            </p>
            <button
              onClick={() => onNavigate("developments")}
              className="inline-flex items-center px-8 py-4 bg-primary text-white rounded hover:bg-[#0a3222] transition-colors"
            >
              View Developments
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="relative -mt-20 z-10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <SearchBar />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="mb-2" style={{ color: "#0D402D" }}>
                Featured Developments
              </h2>
              <p className="text-muted-foreground">Explore our premium property developments</p>
            </div>
            <button
              onClick={() => onNavigate("developments")}
              className="flex items-center text-primary hover:underline"
            >
              View All
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PropertyCard
              type="development"
              images={[
                "/images/BUY/developments/CITI%20RISE/CITI%20RISE/3%20Bedrom%20%2B%20DSQ/A1.jpg",
                "/images/BUY/developments/CITI%20RISE/CITI%20RISE/3%20Bedroom/WST1.jpg",
              ]}
              status="Available"
              name="CITI RISE"
              location="Westlands, Mogotio Road"
              bedrooms={3}
              bathrooms={3}
              size="2-3 BR (86.77-142.39 sqm)"
              price="KSh 11.7M"
              onEnquire={() => onEnquire("CITI RISE")}
              onViewDetails={() => onNavigate("development", "citi-rise")}
            />

            <PropertyCard
              type="development"
              images={[
                "/images/BUY/developments/Jasper%20Westlands,%20Muthithi%20Road/IMG-20250901-WA0014.jpg",
                "/images/BUY/developments/Jasper%20Westlands,%20Muthithi%20Road/IMG-20250901-WA0015.jpg",
              ]}
              status="Available"
              name="JASPER APARTMENTS"
              location="Westlands, Nairobi"
              bedrooms={3}
              bathrooms={3}
              size="1 / 2 / 3 Bedroom Apartments"
              price="KSh 8.5M"
              onEnquire={() => onEnquire("JASPER APARTMENTS")}
              onViewDetails={() => onNavigate("development", "jasper-westlands-muthithi-road")}
            />

            <PropertyCard
              type="development"
              images={[
                "/images/BUY/developments/Juja%20RAFI/DStudio%201.jpg",
                "/images/BUY/developments/Juja%20RAFI/Studio%201.jpg",
              ]}
              status="Available"
              name="JUJA RAFI APARTMENTS"
              location="Juja, Kiambu"
              bedrooms={1}
              bathrooms={1}
              size="Single & Double Bed Studios"
              price="KSh 2.4M"
              onEnquire={() => onEnquire("JUJA RAFI APARTMENTS")}
              onViewDetails={() => onNavigate("development", "juja-rafi")}
            />

            <PropertyCard
              type="development"
              images={[
                "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.09.jpeg",
                "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.10.jpeg",
              ]}
              status="Available"
              name="The Marquis"
              location="Kileleshwa, off Nyeri Road"
              bedrooms={5}
              bathrooms={5}
              size="2-5 BR Apartments & Penthouses"
              price="KSh 23.2M"
              onEnquire={() => onEnquire("The Marquis")}
              onViewDetails={() => onNavigate("development", "the-marquis")}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="mb-2" style={{ color: "#0D402D" }}>
                Featured Rentals
              </h2>
              <p className="text-muted-foreground">Premium properties available for rent</p>
            </div>
            <button
              onClick={() => onNavigate("residential-rentals")}
              className="flex items-center text-primary hover:underline"
            >
              View All
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PropertyCard
              type="rental"
              images={[
                "/images/RENT/residential/JUNCTION%20GARDEN/%E2%84%A2Black_Sky_Lenses-22.jpg",
                "/images/RENT/residential/JUNCTION%20GARDEN/%E2%84%A2Black_Sky_Lenses-27.jpg",
              ]}
              status="Available"
              name="JUNCTION GARDENS"
              location="Lavington, Nairobi"
              bedrooms={3}
              bathrooms={3}
              size="3 Bedroom Townhouse"
              price="KSh 160,000"
              priceLabel="Per Month"
              onEnquire={() => onEnquire("JUNCTION GARDENS")}
              onViewDetails={() => onNavigate("rental", "junction-garden")}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759428807275-b798a80e2801?auto=format&fit=max&w=1600&q=80"
                alt="About Tabor Realtors"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="mb-6" style={{ color: "#0D402D" }}>
                About Tabor Realtors
              </h2>
              <p className="text-muted-foreground mb-6">
                Tabor Realtors is Kenya&apos;s premier real estate destination, dedicated to connecting discerning clients with exceptional properties across the nation. With years of experience and deep market knowledge, we provide personalized service that transforms your property dreams into reality.
              </p>
              <p className="text-muted-foreground mb-6">
                Our team of dedicated professionals brings unparalleled expertise in residential developments, luxury rentals, and commercial properties. We pride ourselves on our commitment to excellence, integrity, and client satisfaction.
              </p>
              <button
                onClick={() => onNavigate("about")}
                className="inline-flex items-center px-8 py-3 bg-primary text-white rounded hover:bg-[#0a3222] transition-colors"
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="mb-2" style={{ color: "#0D402D" }}>
                Meet Our Team
              </h2>
              <p className="text-muted-foreground">Expert professionals dedicated to your success</p>
            </div>
            <button
              onClick={() => onNavigate("team")}
              className="flex items-center text-primary hover:underline"
            >
              View Full Team
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.slug}
                image={member.headshot}
                name={member.name}
                role={member.role}
                summary={member.shortBio}
                email={member.email}
                phone={member.phone}
                onViewProfile={() => onNavigate("team-profile", member.slug)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="mb-2" style={{ color: "#0D402D" }}>
                Latest Insights
              </h2>
              <p className="text-muted-foreground">Expert advice and market updates</p>
            </div>
            <button
              onClick={() => onNavigate("insights")}
              className="flex items-center text-primary hover:underline"
            >
              Read All Insights
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestInsights.map((post) => (
              <BlogCard
                key={post.id}
                image={post.image}
                title={post.title}
                excerpt={post.excerpt}
                author={post.author}
                authorImage={post.authorImage}
                authorRole={post.authorRole}
                date={post.date}
                readTime={post.readTime}
                views={post.views}
                comments={post.comments}
                likes={post.likes}
                category={post.category}
                onAuthorClick={post.authorSlug ? () => onNavigate("team-profile", post.authorSlug) : undefined}
                onReadMore={() => onNavigate("blog-post", post.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
