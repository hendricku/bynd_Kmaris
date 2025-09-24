import { Article } from "@/components/News/interface";

export interface NewsArticleProps {
  article: Article;
  relatedArticles: Article[];
}
export interface Category {
  _id: string;
  categoryName: string;
}