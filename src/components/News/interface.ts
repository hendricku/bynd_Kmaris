export interface Author {
  name: string;
  avatarUrl: string;
}

export interface Article {
  id: string;
  category: string;
  readTime: string;
  title: string;
  summary?: string | null;
  imageUrl: string;
  // Make author and publishedAt optional to handle all article types
  author?: Author;
  publishedAt?: string;
}

export interface ArticleCardProps {
  article: Article;
  variant: 'featured' | 'list' | 'grid';
}