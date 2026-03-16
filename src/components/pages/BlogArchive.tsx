"use client";

import { useState } from "react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { BlogCard } from "@/components/BlogCard";
import { teamMembers } from "@/data/team";

interface BlogArchiveProps {
  onNavigate: (page: string, id?: string) => void;
}

export function BlogArchive({ onNavigate }: BlogArchiveProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const pyume = teamMembers.find((member) => member.slug === "pyume-wambua");
  const simon = teamMembers.find((member) => member.slug === "simon-waigwa");
  const mark = teamMembers.find((member) => member.slug === "mark-nzau");

  const categories = [
    { id: "all", label: "All Posts" },
    { id: "investment", label: "Property Investment" },
    { id: "lifestyle", label: "Design & Lifestyle" },
    { id: "market", label: "Market Trends" },
  ];

  const blogPosts = [
    {
      id: "property-investment-that-builds-long-term-wealth",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80",
      title: "Investment That Builds Long-Term Wealth",
      excerpt:
        "Property investment can build financial freedom through rental income, capital appreciation, and disciplined risk management.",
      author: pyume?.name ?? "Pyume Wambua",
      authorImage: pyume?.headshot ?? "/team-members/pyume-wambua.jpg",
      date: "Feb 23, 2026",
      readTime: "5 min read",
      views: 1234,
      comments: 23,
      likes: 89,
      category: "Property Investment",
    },
    {
      id: "desire-lifestyle-and-the-property-you-choose",
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80",
      title: "Desire, Lifestyle, and the Property You Choose",
      excerpt:
        "Lifestyle property choices should align design, comfort, amenities, and location with long-term personal priorities.",
      author: simon?.name ?? "Simon Waigwa",
      authorImage: simon?.headshot ?? "/team-members/simon-waigwa.jpg",
      date: "Feb 23, 2026",
      readTime: "5 min read",
      views: 2156,
      comments: 45,
      likes: 167,
      category: "Design & Lifestyle",
    },
    {
      id: "market-trends-shaping-smart-buying-decisions",
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80",
      title: "Market Trends Shaping Smart Buying Decisions",
      excerpt:
        "Reading demand, pricing, supply, and interest-rate signals helps buyers and investors make clearer decisions.",
      author: mark?.name ?? "Mark Nzau",
      authorImage: mark?.headshot ?? "/team-members/mark-nzau.jpg",
      date: "Feb 23, 2026",
      readTime: "5 min read",
      views: 987,
      comments: 12,
      likes: 54,
      category: "Market Trends",
    },
  ];

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category.toLowerCase().includes(selectedCategory.replace("-", " ")));

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[400px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1759428807275-b798a80e2801?auto=format&fit=max&w=1600&q=80"
          alt="Insights"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto max-w-[1280px] px-4 text-center text-white sm:px-6 lg:px-8">
            <nav className="mb-4 text-sm text-white/80">
              <button onClick={() => onNavigate("home")} className="hover:text-white">Home</button>
              <span className="mx-2">/</span>
              <span>Insights</span>
            </nav>
            <h1 className="mb-4 text-4xl md:text-5xl" style={{ color: "#FFFFFF", fontWeight: 600 }}>
              Insights & Resources
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-white/90">Expert advice, market trends, and property insights</p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white py-8">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-full px-6 py-2 transition-colors ${
                  selectedCategory === category.id
                    ? "bg-primary text-white"
                    : "bg-secondary text-foreground hover:bg-primary hover:text-white"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <BlogCard
                key={post.id}
                image={post.image}
                title={post.title}
                excerpt={post.excerpt}
                author={post.author}
                authorImage={post.authorImage}
                date={post.date}
                readTime={post.readTime}
                views={post.views}
                comments={post.comments}
                likes={post.likes}
                category={post.category}
                onReadMore={() => onNavigate("blog-post", post.id)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-white">
        <div className="mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl" style={{ color: "#FFFFFF" }}>
            Subscribe to Our Newsletter
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
            Get the latest property insights, market trends, and exclusive listings delivered to your inbox
          </p>
          <form className="mx-auto flex max-w-md gap-3" action="/api/newsletter" method="post">
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="flex-1 rounded bg-white px-4 py-3 text-foreground focus:outline-none"
            />
            <button
              type="submit"
              className="rounded bg-white px-8 py-3 text-primary transition-colors hover:bg-white/90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
