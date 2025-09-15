"use client";

import React from "react";
import Image from "next/image";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import newsData from "@/json/news.json";
import { Article } from "./interface";
import { ArticleCard } from "./ArticleCard";
import {
  NewsSection,
  Container,
  TopSection,
  ArticleList,
  BottomGrid,
  SectionDivider,
  SectionTitle,
  LatestArticlesGrid,
  LatestArticleCardLink,
  LatestImageWrapper,
  AuthorInfo,
  LatestMetaText,
  LatestTitle,
  LatestCategoryMeta,
  LatestCategory,
} from "./elements";

const LatestArticlesSection: React.FC<{ articles: Article[] }> = ({
  articles,
}) => (
  <div style={{ maxWidth: 1440 }}>
    <SectionTitle>Articles</SectionTitle>
    <LatestArticlesGrid>
      {articles.map((article) => (
        <LatestArticleCardLink
          key={article.id}
          href={`/News/${article.id}`}
        >
          <LatestImageWrapper>
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              style={{ objectFit: "cover" }}
            />
          </LatestImageWrapper>
          {article.author && (
            <AuthorInfo>
              <LatestMetaText>{article.author.name}</LatestMetaText>
              <LatestMetaText>•</LatestMetaText>
              <LatestMetaText>{article.publishedAt}</LatestMetaText>
            </AuthorInfo>
          )}
          <LatestTitle>{article.title}</LatestTitle>
          <LatestCategoryMeta>
            <LatestCategory>{article.category}</LatestCategory>
            <span style={{ margin: "0 8px" }}>|</span>
            <span>{article.readTime}</span>
          </LatestCategoryMeta>
        </LatestArticleCardLink>
      ))}
    </LatestArticlesGrid>
  </div>
);

const VideoNewsSection: React.FC<{ videos: Article[] }> = ({ videos }) => (
  <div>
    <SectionTitle>News in Video</SectionTitle>
    <LatestArticlesGrid>
      {videos.map((video) => (
        <LatestArticleCardLink
          key={video.id}
          href={`/News/${video.id}`}
        >
          <LatestImageWrapper>
            <Image
              src={video.imageUrl}
              alt={video.title}
              fill
              style={{ objectFit: "cover" }}
            />
            <PlayCircleFilledIcon
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                fontSize: "48px",
              }}
            />
          </LatestImageWrapper>
          <LatestTitle>{video.title}</LatestTitle>
          <LatestCategoryMeta>
            <LatestCategory>{video.category}</LatestCategory>
            <span style={{ margin: "0 8px" }}>|</span>
            <span>{video.readTime}</span>
          </LatestCategoryMeta>
        </LatestArticleCardLink>
      ))}
    </LatestArticlesGrid>
  </div>
);

export function News() {
  const mainArticles: Article[] = newsData.main_articles;
  const latestArticles: Article[] = newsData.latest_articles;
  const videoNews: Article[] = newsData.video_news;

  const featuredArticle = mainArticles[0];
  const listArticles = mainArticles.slice(1, 4);
  const gridArticles = mainArticles.slice(4);

  return (
    <NewsSection>
      <Container>
        <TopSection>
          {featuredArticle && (
            <ArticleCard article={featuredArticle} variant="featured" />
          )}
          <ArticleList>
            {listArticles.map((article) => (
              <ArticleCard key={article.id} article={article} variant="list" />
            ))}
          </ArticleList>
        </TopSection>

        <BottomGrid>
          {gridArticles.map((article) => (
            <ArticleCard key={article.id} article={article} variant="grid" />
          ))}
        </BottomGrid>

        <SectionDivider />
        <LatestArticlesSection articles={latestArticles} />
        <SectionDivider />
        <VideoNewsSection videos={videoNews} />
      </Container>
    </NewsSection>
  );
}
