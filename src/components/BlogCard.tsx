"use client";

import type { KeyboardEvent, MouseEvent } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, Clock, Eye, MessageCircle, ThumbsUp } from "lucide-react";

interface BlogCardProps {
  image: string;
  title: string;
  excerpt?: string;
  author: string;
  authorImage?: string;
  authorRole?: string;
  date: string;
  readTime: string;
  views?: number;
  comments?: number;
  likes?: number;
  category?: string;
  onReadMore?: () => void;
  onAuthorClick?: () => void;
}

export function BlogCard({
  image,
  title,
  excerpt,
  author,
  authorImage,
  authorRole,
  date,
  readTime,
  views,
  comments,
  likes,
  category,
  onReadMore,
  onAuthorClick,
}: BlogCardProps) {
  const handleCardKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (!onReadMore) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onReadMore();
    }
  };

  const handleNestedAction = (event: MouseEvent<HTMLButtonElement>, callback?: () => void) => {
    event.stopPropagation();
    callback?.();
  };

  return (
    <article
      className={`overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${onReadMore ? "cursor-pointer" : ""}`}
      onClick={onReadMore}
      onKeyDown={handleCardKeyDown}
      role={onReadMore ? "button" : undefined}
      tabIndex={onReadMore ? 0 : undefined}
    >
      <div className="relative h-56 overflow-hidden">
        <ImageWithFallback src={image} alt={title} className="h-full w-full object-cover" />
        {category ? (
          <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-sm text-white">
            {category}
          </div>
        ) : null}
      </div>
      <div className="p-6">
        <h3 className="mb-3 line-clamp-2 text-lg font-semibold text-[#0D402D]">{title}</h3>
        {excerpt ? <p className="mb-4 line-clamp-2 text-muted-foreground">{excerpt}</p> : null}
        <div className="mb-4 flex items-center">
          {onAuthorClick ? (
            <button
              type="button"
              onClick={(event) => handleNestedAction(event, onAuthorClick)}
              className="flex items-center text-left transition-colors hover:text-primary"
            >
              {authorImage ? (
                <ImageWithFallback
                  src={authorImage}
                  alt={author}
                  className="mr-3 h-10 w-10 rounded-full object-cover"
                />
              ) : null}
              <div>
                <div className="text-sm font-medium">{author}</div>
                {authorRole ? <div className="text-xs text-muted-foreground">{authorRole}</div> : null}
                <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                  <span className="flex items-center">
                    <Calendar className="mr-1 h-3 w-3" />
                    {date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="mr-1 h-3 w-3" />
                    {readTime}
                  </span>
                </div>
              </div>
            </button>
          ) : (
            <>
              {authorImage ? (
                <ImageWithFallback
                  src={authorImage}
                  alt={author}
                  className="mr-3 h-10 w-10 rounded-full object-cover"
                />
              ) : null}
              <div>
                <div className="text-sm font-medium">{author}</div>
                {authorRole ? <div className="text-xs text-muted-foreground">{authorRole}</div> : null}
                <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                  <span className="flex items-center">
                    <Calendar className="mr-1 h-3 w-3" />
                    {date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="mr-1 h-3 w-3" />
                    {readTime}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
        {views !== undefined || comments !== undefined || likes !== undefined ? (
          <div className="flex items-center space-x-4 border-t border-border pt-4 text-sm text-muted-foreground">
            {views !== undefined ? (
              <span className="flex items-center">
                <Eye className="mr-1 h-4 w-4" />
                {views}
              </span>
            ) : null}
            {comments !== undefined ? (
              <span className="flex items-center">
                <MessageCircle className="mr-1 h-4 w-4" />
                {comments}
              </span>
            ) : null}
            {likes !== undefined ? (
              <span className="flex items-center">
                <ThumbsUp className="mr-1 h-4 w-4" />
                {likes}
              </span>
            ) : null}
          </div>
        ) : null}
        {onReadMore ? (
          <button
            type="button"
            onClick={(event) => handleNestedAction(event, onReadMore)}
            className="mt-4 text-sm font-medium text-primary transition-colors hover:text-[#0a3222]"
          >
            Read insight →
          </button>
        ) : null}
      </div>
    </article>
  );
}
