"use client";

import React from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { Article } from "@/components/News/interface";
import { ArticleCard } from "@/components/News/ArticleCard"; // RE-USING YOUR COMPONENT!

// --- Interface ---
interface ArticleDetailProps {
  article: Article;
  relatedArticles: Article[];
}

// --- Styling ---
const ArticleSection = styled("section")(({ theme }) => ({
  width: '100%', backgroundColor: theme.palette.background.default,
}));
const Container = styled("div")(({ theme }) => ({
  maxWidth: '1200px', margin: '0 auto', padding: theme.spacing(6, 2),
  display: 'grid', gridTemplateColumns: '1fr', gap: theme.spacing(6),
  [theme.breakpoints.up('lg')]: { gridTemplateColumns: '2fr 1fr' },
}));
const MainContent = styled("article")({});
const Sidebar = styled("aside")({});
const ArticleTitle = styled("h1")(({ theme }) => ({
  fontSize: '42px', fontWeight: theme.typography.fontWeightBold,
  lineHeight: 1.2, marginBottom: theme.spacing(2),
}));
const ArticleImage = styled("div")({
  position: 'relative', width: '100%', aspectRatio: '16/9',
  borderRadius: '12px', overflow: 'hidden', margin: '24px 0',
});
const ArticleBody = styled("div")(({ theme }) => ({
  fontSize: '16px', lineHeight: 1.8, color: theme.palette.text.primary,
}));
const SidebarTitle = styled("h4")(({ theme }) => ({
    fontSize: '20px', fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(3), borderBottom: `2px solid ${theme.palette.primary.main}`,
    paddingBottom: theme.spacing(1),
}));

// --- The Component ---
export function ArticleDetail({ article, relatedArticles }: ArticleDetailProps) {
  return (
    <ArticleSection>
      <Container>
        <MainContent>
          <ArticleTitle>{article.title}</ArticleTitle>
          <ArticleImage>
            <Image src={article.imageUrl} alt={article.title} fill style={{ objectFit: 'cover' }} />
          </ArticleImage>
          <ArticleBody>
            <p>{article.summary}</p>
            <p>This is placeholder content for the full article body. In a real application, this would come from your CMS or database. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
          </ArticleBody>
        </MainContent>
        <Sidebar>
          <SidebarTitle>Related News</SidebarTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {relatedArticles.map(related => (
              <ArticleCard key={related.id} article={related} variant="list" />
            ))}
          </div>
        </Sidebar>
      </Container>
    </ArticleSection>
  );
}