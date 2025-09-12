"use client";

import React from "react";
import Image from "next/image";
import { ArticleCardProps } from "./interface";
import {
  FeaturedArticleRoot, FeaturedTitle, FeaturedMeta, FeaturedCategory, FeaturedImageWrapper,
  ListItemRoot, ListItemTextContent, ListItemTitle, ListItemSummary, ListItemMeta, ListItemCategory, ListItemImageWrapper,
  GridCardRoot, GridCardOverlay, GridCardTitle, GridCardMeta, GridCardCategory
} from "./elements";

export function ArticleCard({ article, variant }: ArticleCardProps) {
  if (variant === 'featured') {
    return (
      <FeaturedArticleRoot href={`/news/${article.id}`}>
        <div>
          <FeaturedTitle>{article.title}</FeaturedTitle>
          <FeaturedMeta>
            <FeaturedCategory>{article.category}</FeaturedCategory>
            <span>|</span>
            <span>{article.readTime}</span>
          </FeaturedMeta>
        </div>
        <FeaturedImageWrapper>
          <Image src={article.imageUrl} alt={article.title} fill style={{ objectFit: 'cover' }} />
        </FeaturedImageWrapper>
      </FeaturedArticleRoot>
    );
  }
  if (variant === 'list') {
    return (
      <ListItemRoot href={`/news/${article.id}`}>
        <ListItemTextContent>
          <ListItemTitle>{article.title}</ListItemTitle>
          {article.summary && <ListItemSummary>{article.summary}</ListItemSummary>}
          <ListItemMeta>
            <ListItemCategory>{article.category}</ListItemCategory>
            <span>|</span>
            <span>{article.readTime}</span>
          </ListItemMeta>
        </ListItemTextContent>
        <ListItemImageWrapper>
          <Image src={article.imageUrl} alt={article.title} fill style={{ objectFit: 'cover' }} />
        </ListItemImageWrapper>
      </ListItemRoot>
    );
  }
  if (variant === 'grid') {
    return (
      <GridCardRoot href={`/news/${article.id}`}>
        <Image src={article.imageUrl} alt={article.title} fill style={{ objectFit: 'cover' }} />
        <GridCardOverlay>
          <GridCardTitle>{article.title}</GridCardTitle>
          <GridCardMeta>
            <GridCardCategory>{article.category}</GridCardCategory>
            <span>|</span>
            <span>{article.readTime}</span>
          </GridCardMeta>
        </GridCardOverlay>
      </GridCardRoot>
    );
  }
  return null;
}