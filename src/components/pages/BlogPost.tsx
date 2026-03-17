"use client";

import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { BlogCard } from "@/components/BlogCard";
import { insights } from "@/data/insights";
import { teamMembers } from "@/data/team";
import { Calendar, Clock, Eye, Share2, Facebook, Linkedin } from "lucide-react";
import { XLogo } from "@/components/icons/XLogo";

interface BlogPostProps {
  slug?: string;
  onNavigate: (page: string, id?: string) => void;
}

const blogPostDateFormatter = new Intl.DateTimeFormat("en-KE", {
  year: "numeric",
  month: "short",
  day: "numeric",
  timeZone: "UTC",
});

export function BlogPost({ slug, onNavigate }: BlogPostProps) {
  const post = insights.find((item) => item.slug === slug) ?? insights[0];
  const authorProfile = teamMembers.find((member) => member.slug === post.authorSlug);
  const recentPosts = insights
    .filter((item) => item.slug !== post.slug)
    .slice(0, 2)
    .map((item) => ({
      id: item.slug,
      image: item.featuredImage,
      title: item.title,
      author: item.authorName,
      authorSlug: item.authorSlug,
      authorImage: teamMembers.find((member) => member.slug === item.authorSlug)?.headshot,
      date: blogPostDateFormatter.format(new Date(item.publishedAt)),
      readTime: `${item.readTimeMinutes} min read`,
      views: item.views,
      comments: item.commentsCount,
      likes: item.likes,
      category: item.category ?? "Insights",
    }));
  const mainContent = post.content.split("\n\nAbout ")[0];
  const paragraphs = mainContent.split("\n\n").filter(Boolean);
  const fallbackAbout = post.content.includes("\n\nAbout ") ? `About ${post.content.split("\n\nAbout ")[1]}` : "";

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-white py-4">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-muted-foreground">
            <button onClick={() => onNavigate("home")} className="hover:text-primary">Home</button>
            <span className="mx-2">/</span>
            <button onClick={() => onNavigate("insights")} className="hover:text-primary">Insights</button>
            <span className="mx-2">/</span>
            <span>{post.title}</span>
          </nav>
        </div>
      </div>

      <article className="py-12">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="mb-4 inline-block rounded-full bg-primary px-3 py-1 text-sm text-white">
              {post.category ?? "Insights"}
            </div>
            <h1 className="mb-6 text-4xl" style={{ color: "#0D402D", fontWeight: 600 }}>
              {post.title}
            </h1>
            <div className="mb-6 flex items-center">
              <ImageWithFallback
                src={authorProfile?.headshot ?? "/team-members/pyume-wambua.jpg"}
                alt={authorProfile?.name ?? post.authorName}
                className="mr-4 h-12 w-12 rounded-full object-cover"
              />
              <div>
                {authorProfile ? (
                  <button
                    type="button"
                    onClick={() => onNavigate("team-profile", authorProfile.slug)}
                    className="font-medium text-[#0D402D] transition-colors hover:text-primary"
                  >
                    {authorProfile.name}
                  </button>
                ) : (
                  <div className="font-medium">{post.authorName}</div>
                )}
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    {blogPostDateFormatter.format(new Date(post.publishedAt))}
                  </span>
                  <span className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {post.readTimeMinutes} min read
                  </span>
                  <span className="flex items-center">
                    <Eye className="mr-1 h-4 w-4" />
                    {post.views.toLocaleString()} views
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 border-y border-border py-4">
              <span className="flex items-center text-sm text-muted-foreground">
                <Share2 className="mr-2 h-4 w-4" /> Share:
              </span>
              {[
                { key: "facebook", Icon: Facebook },
                { key: "x", Icon: XLogo },
                { key: "linkedin", Icon: Linkedin },
              ].map(({ key, Icon }) => (
                <button key={key} className="text-muted-foreground transition-colors hover:text-primary">
                  <Icon className="h-5 w-5" />
                </button>
              ))}
            </div>
          </div>

          <div className="relative mb-12 h-[500px] overflow-hidden rounded-lg">
            <ImageWithFallback
              src={post.featuredImage}
              alt={post.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="prose max-w-none text-muted-foreground">
            {paragraphs.map((paragraph, index) => (
              <p key={`${post.slug}-p-${index}`} className={index === 0 ? "text-lg" : undefined}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="my-12 flex flex-wrap gap-2">
            <span className="text-sm text-muted-foreground">Tags:</span>
            {(post.tags ?? []).map((tag) => (
              <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-sm">
                {tag}
              </span>
            ))}
          </div>

          <div className="my-12 rounded-lg bg-secondary p-8">
            <div className="flex items-start">
              <ImageWithFallback
                src={authorProfile?.headshot ?? "/team-members/pyume-wambua.jpg"}
                alt={authorProfile?.name ?? post.authorName}
                className="mr-6 h-20 w-20 rounded-full object-cover"
              />
              <div>
                <h3 className="mb-2 text-xl" style={{ color: "#0D402D" }}>
                  About {authorProfile?.name ?? post.authorName}
                </h3>
                <p className="mb-4 text-muted-foreground">
                  {authorProfile?.fullBio ??
                    fallbackAbout.replace(/^About\s+/, "")}
                </p>
                {authorProfile ? (
                  <button
                    onClick={() => onNavigate("team-profile", authorProfile.slug)}
                    className="text-primary hover:underline"
                  >
                    View Full Profile →
                  </button>
                ) : null}
              </div>
            </div>
          </div>

          <div className="my-12">
            <h3 className="mb-6 text-xl" style={{ color: "#0D402D" }}>
              Comments ({post.commentsCount})
            </h3>
            <div className="space-y-6">
              {[
                {
                  name: "Brian Otieno",
                  time: "2 days ago",
                  text: "Great insights! Very helpful for anyone looking to invest in Kenya's property market.",
                },
                {
                  name: "Mercy Wanjiku",
                  time: "3 days ago",
                  text: "Could you provide more details on the off-plan investment opportunities in Westlands?",
                },
              ].map((comment) => (
                <div key={comment.name} className="border-b border-border pb-6">
                  <div className="mb-3 flex items-start">
                    <div className="mr-3 h-10 w-10 rounded-full bg-secondary" />
                    <div className="flex-1">
                      <div className="mb-1 flex items-center">
                        <span className="mr-2 font-medium">{comment.name}</span>
                        <span className="text-sm text-muted-foreground">{comment.time}</span>
                      </div>
                      <p className="text-muted-foreground">{comment.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-lg bg-secondary p-6">
              <h4 className="mb-4 text-lg" style={{ color: "#0D402D" }}>
                Leave a Comment
              </h4>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="rounded border border-border bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="rounded border border-border bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <textarea
                  placeholder="Your comment"
                  rows={4}
                  className="w-full resize-none rounded border border-border bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="rounded bg-primary px-6 py-2 text-white transition-colors hover:bg-[#0a3222]"
                >
                  Post Comment
                </button>
              </form>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-2xl" style={{ color: "#0D402D" }}>
            Recent Posts
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {recentPosts.map((post) => (
              <BlogCard
                key={post.id}
                image={post.image}
                title={post.title}
                author={post.author}
                authorImage={post.authorImage}
                date={post.date}
                readTime={post.readTime}
                views={post.views}
                comments={post.comments}
                likes={post.likes}
                category={post.category}
                onAuthorClick={() => onNavigate("team-profile", post.authorSlug)}
                onReadMore={() => onNavigate("blog-post", post.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
