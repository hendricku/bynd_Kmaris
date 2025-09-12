export interface Article {
  id: string;
  title: string;
  summary?: string;
  description?: string;
  category: string;
  readTime: string;
  imageUrl: string;
}

export interface PillProps {
  label: string;
}
