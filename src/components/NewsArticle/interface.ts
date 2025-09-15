import { Article } from "@/components/News/interface";

export interface NewsArticleProps {
  article: Article;
  relatedArticles: Article[];
}
