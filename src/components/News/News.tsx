"use client";

import React, { useState, useEffect, useMemo, memo } from "react";
import Image from "next/image";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { Article, ApiArticle, Category } from "./interface";
import { ArticleCard } from "./ArticleCard";
import NewsLoadingScreen from "@/components/NewsLoadingScreen/NewsLoadingScreen";
import { incrementArticleViews } from "./trackView"; 
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

// Memoized utility functions
const getMediaDetails = (
  newsImage?: string | { url: string; alt?: string; width?: number; height?: number },
  newsVideo?: string | { url: string; title?: string; duration?: number },
  videoUrl?: string
) => {
  if (videoUrl) {
    const embedDetails = getVideoEmbedDetails(videoUrl);
    return { type: embedDetails.type, src: embedDetails.src, isEmbed: true };
  }

  if (newsImage) {
    if (typeof newsImage === 'string') {
      return { type: "image" as const, src: newsImage, isEmbed: false };
    } else if (newsImage.url) {
      return { type: "image" as const, src: newsImage.url, isEmbed: false };
    }
  }

  if (newsVideo) {
    if (typeof newsVideo === 'string') {
      return { type: "video" as const, src: newsVideo, isEmbed: false };
    } else if (newsVideo.url) {
      return { type: "video" as const, src: newsVideo.url, isEmbed: false };
    }
  }

  return { type: "placeholder" as const, src: '/placeholder-image.jpg', isEmbed: false };
};

const getVideoEmbedDetails = (url: string) => {
  const normalizedUrl = url.startsWith("http") ? url : `https://${url}`;

  const directVideoRegex = /\.(mp4|avi|mov|wmv|flv|webm|ogv|mkv)$/i;
  if (directVideoRegex.test(normalizedUrl)) {
    return { type: "video" as const, src: normalizedUrl };
  }

  const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const youtubeMatch = normalizedUrl.match(youtubeRegex);
  if (youtubeMatch) {
    return { type: "iframe" as const, src: `https://www.youtube.com/embed/${youtubeMatch[1]}` };
  }

  const vimeoRegex = /(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/;
  const vimeoMatch = normalizedUrl.match(vimeoRegex);
  if (vimeoMatch) {
    return { type: "iframe" as const, src: `https://player.vimeo.com/video/${vimeoMatch[1]}` };
  }

  const dailymotionRegex = /(?:dailymotion\.com\/video\/|dailymotion\.com\/embed\/video\/)([a-zA-Z0-9]+)/;
  const dailymotionMatch = normalizedUrl.match(dailymotionRegex);
  if (dailymotionMatch) {
    return { type: "iframe" as const, src: `https://www.dailymotion.com/embed/video/${dailymotionMatch[1]}` };
  }

  const driveRegex = /\/file\/d\/([a-zA-Z0-9-_]+)(?:\/[^\/\s]*)?|open\?id=([a-zA-Z0-9-_]+)/;
  const driveMatch = normalizedUrl.match(driveRegex);
  if (driveMatch) {
    const fileId = driveMatch[1] || driveMatch[2];
    return { type: "iframe" as const, src: `https://drive.google.com/file/d/${fileId}/preview` };
  }

  return { type: "iframe" as const, src: normalizedUrl };
};

// Memoized components for better performance
const LatestArticleCard = memo<{ article: Article }>(({ article }) => {
  const mediaDetails = useMemo(
    () => getMediaDetails(article.newsImage, article.newsVideo, article.videoUrl),
    [article.newsImage, article.newsVideo, article.videoUrl]
  );
  const hasMedia = mediaDetails.type !== "placeholder";

  return (
    <LatestArticleCardLink
      href={`/News/${article.id || article._id}`}
      onClick={() => incrementArticleViews(article.id || article._id, article)}
    >
      <LatestImageWrapper>
        {hasMedia ? (
          mediaDetails.isEmbed && mediaDetails.type === "iframe" ? (
            <iframe
              src={mediaDetails.src as string}
              title={article.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              style={{ 
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%", 
                height: "100%", 
                borderRadius: "12px",
                border: "none"
              }}
            />
          ) : mediaDetails.type === "video" ? (
            <>
              <video
                src={mediaDetails.src as string}
                controls={false}
                preload="metadata"
                style={{ 
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%", 
                  height: "100%", 
                  objectFit: "cover", 
                  borderRadius: "12px" 
                }}
              />
              <PlayCircleFilledIcon
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  fontSize: "48px",
                  zIndex: 1,
                }}
              />
            </>
          ) : (
            <Image
              src={mediaDetails.src as string}
              alt={article.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              loading="lazy"
            />
          )
        ) : (
          <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#f3f4f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#6b7280'
          }}>
            No Image
          </div>
        )}
      </LatestImageWrapper>
      {article.author && (
        <AuthorInfo>
          <LatestMetaText>{article.author}</LatestMetaText>
          <LatestMetaText>•</LatestMetaText>
          <LatestMetaText>{article.publishedAt}</LatestMetaText>
          <LatestMetaText>•</LatestMetaText>
          <LatestMetaText>{article.readTime || "3 mins"}</LatestMetaText>
        </AuthorInfo>
      )}
      <LatestTitle>{article.title}</LatestTitle>
      <LatestCategoryMeta>
        <LatestCategory>{article.category}</LatestCategory>
        <span style={{ margin: "0 8px" }}>|</span>
        <span>{article.readTime || "3 mins"}</span>
      </LatestCategoryMeta>
    </LatestArticleCardLink>
  );
});

LatestArticleCard.displayName = "LatestArticleCard";

const LatestArticlesSection = memo<{ articles: Article[] }>(({ articles }) => (
  <div style={{ maxWidth: 1440 }}>
    <SectionTitle>Articles</SectionTitle>
    <LatestArticlesGrid>
      {articles.map((article) => (
        <LatestArticleCard key={article.id || article._id} article={article} />
      ))}
    </LatestArticlesGrid>
  </div>
));

LatestArticlesSection.displayName = "LatestArticlesSection";

const VideoNewsSection = memo<{ videos: Article[] }>(({ videos }) => (
  <div>
    <SectionTitle>News in Video</SectionTitle>
    <LatestArticlesGrid>
      {videos.map((video) => (
        <LatestArticleCard key={video.id || video._id} article={video} />
      ))}
    </LatestArticlesGrid>
  </div>
));

VideoNewsSection.displayName = "VideoNewsSection";

export default function News() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [articlesResponse, categoriesResponse] = await Promise.all([
          fetch('/api/articles', { 
            next: { revalidate: 60 },
            headers: { 'Accept': 'application/json' }
          }),
          fetch('/api/categories', { 
            next: { revalidate: 300 },
            headers: { 'Accept': 'application/json' }
          })
        ]);

        if (!articlesResponse.ok) {
          throw new Error(`Failed to fetch articles: ${articlesResponse.statusText}`);
        }
        if (!categoriesResponse.ok) {
          throw new Error(`Failed to fetch categories: ${categoriesResponse.statusText}`);
        }

        const [articlesData, categoriesData] = await Promise.all([
          articlesResponse.json(),
          categoriesResponse.json()
        ]);

        const categoryMap: Record<string, string> = {};
        categoriesData.forEach((cat: Category) => {
          categoryMap[cat._id] = cat.categoryName;
        });

        const formattedArticles: Article[] = articlesData.map((article: ApiArticle) => {
          const mediaDetails = getMediaDetails(article.newsImage, article.newsVideo, article.videoUrl);
          return {
            _id: article._id || "",
            id: article._id || "",
            title: article.title || "",
            author: article.author || "Unknown Author",
            publishedAt: article.date ? new Date(article.date).toLocaleDateString() : new Date().toLocaleDateString(),
            date: article.date || new Date().toISOString(),
            imageUrl: mediaDetails.src,
            newsImage: article.newsImage || '',
            newsVideo: article.newsVideo || '',
            videoUrl: article.videoUrl || '',
            readTime: article.readTime || "3 mins",
            category: categoryMap[article.category || ''] || article.category || "Uncategorized",
            description: article.description || "",
            summary: article.description || "",
            views: article.views || 0,
            status: article.status || "published",
            type: article.videoUrl || article.newsVideo ? 'video' : 'article'
          };
        });

        const sortedArticles = formattedArticles.sort((a, b) => 
          new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        setArticles(sortedArticles);
        setError(null);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An error occurred while fetching data';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const { 
    featuredArticle, 
    listArticles, 
    gridArticles, 
    articlesForSection, 
    videoNews 
  } = useMemo(() => {
    const publishedArticles = articles.filter(article => article.status === 'published');
    
    return {
      featuredArticle: publishedArticles[0],
      listArticles: publishedArticles.slice(1, 4),
      gridArticles: publishedArticles.slice(4, 6),
      articlesForSection: publishedArticles
        .slice(6)
        .filter(article => !article.videoUrl && !article.newsVideo),
      videoNews: publishedArticles.filter(article => article.videoUrl || article.newsVideo)
    };
  }, [articles]);

  if (loading) {
    return (
      <NewsSection>
        <NewsLoadingScreen />
      </NewsSection>
    );
  }

  if (error) {
    return (
      <NewsSection>
        <Container>
          <div style={{
            padding: '2rem',
            textAlign: 'center',
            color: '#ef4444',
            backgroundColor: '#fef2f2',
            border: '1px solid #fecaca',
            borderRadius: '8px',
            margin: '2rem 0'
          }}>
            <h3 style={{ margin: '0 0 1rem 0', fontSize: '18px', fontWeight: 600 }}>
              Unable to Load Articles
            </h3>
            <p style={{ margin: 0, fontSize: '14px' }}>
              {error}
            </p>
          </div>
        </Container>
      </NewsSection>
    );
  }

  return (
    <NewsSection>
      <Container>
        <TopSection>
          {featuredArticle && (
            <ArticleCard article={featuredArticle} variant="featured" />
          )}
          <ArticleList>
            {listArticles.map((article) => (
              <ArticleCard key={article.id || article._id} article={article} variant="list" />
            ))}
          </ArticleList>
        </TopSection>

        <BottomGrid>
          {gridArticles.map((article) => (
            <ArticleCard key={article.id || article._id} article={article} variant="grid" />
          ))}
        </BottomGrid>

        <SectionDivider />
        <LatestArticlesSection articles={articlesForSection} />
        
        {videoNews.length > 0 && (
          <>
            <SectionDivider />
            <VideoNewsSection videos={videoNews} />
          </>
        )}
      </Container>
    </NewsSection>
  );
}