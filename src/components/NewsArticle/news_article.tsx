"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs, Typography } from "@mui/material";
import { ArticleDetail } from "@/components/ArticleDetail/ArticleDetail";
import { NewsArticleProps } from "./interface";
import { Article } from "@/components/News/interface";
import {
  ArticleSection,
  Container,
  MainContent,
  Sidebar,
  ArticleTitle,
  ArticleImage,
  ArticleBody,
  SidebarTitle,
  RelatedArticlesContainer, 
  BreadcrumbContainer,
} from "./elements";
import { ArticleCard } from "@/components/News/ArticleCard";

export function NewsArticle({ article, relatedArticles }: NewsArticleProps) {
  return (
    <ArticleSection>
      <Container>
        <MainContent>
          <BreadcrumbContainer>
            <Breadcrumbs aria-label="breadcrumb">
              <Link href="/" passHref>
                <Typography color="inherit" component="a" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                  Home
                </Typography>
              </Link>
              <Link href="/News" passHref>
                <Typography color="inherit" component="a" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                  News
                </Typography>
              </Link>
              <Typography color="text.primary">{article.title}</Typography>
            </Breadcrumbs>
          </BreadcrumbContainer>
          <ArticleTitle>{article.title}</ArticleTitle>
          <ArticleImage>
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              style={{ objectFit: "cover" }}
            />
          </ArticleImage>
          <ArticleBody>
            <p>{article.summary}</p>

          </ArticleBody>
        </MainContent >
        <Sidebar>
          
          <SidebarTitle> Related News</SidebarTitle>
          <RelatedArticlesContainer>
            {relatedArticles.map((related: Article) => (
              <ArticleCard key={related.id} article={related} variant="list" truncate={true} />
            ))}
          </RelatedArticlesContainer>
        </Sidebar>
      </Container>
    </ArticleSection>
  );
}
