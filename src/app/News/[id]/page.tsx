"use client";

import React from "react";
import { notFound } from "next/navigation";
import newsData from "@/json/news.json";
import { Article } from "@/components/News/interface";
import { NewsArticle } from "@/components/NewsArticle/news_article";
import Footer from "@/components/Footer/Footer";

interface NewsArticlePageProps {
  params: {
    id: string;
  };
}

export default function NewsArticlePage({ params }: NewsArticlePageProps) {
  const { id } = params;

  const article: Article | undefined = [
    ...newsData.main_articles,
    ...newsData.latest_articles,
    ...newsData.video_news,
  ].find((a) => a.id === id);

  if (!article) {
    notFound();
  }

  const relatedArticles: Article[] = [
    ...newsData.main_articles,
    ...newsData.latest_articles,
    ...newsData.video_news,
  ].filter((a) => a.id !== id).slice(0, 4);

  return (
    <>
      <NewsArticle article={article} relatedArticles={relatedArticles} />
      <Footer />
    </>
  );
}
