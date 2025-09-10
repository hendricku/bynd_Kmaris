
export interface FeedbackItem {
  id: number | string;
  name: string;
  role?: string;
  avatarSrc: string;
  rating?: number;
  text: string;
}

export interface FeedbackProps {

  items?: FeedbackItem[];
}