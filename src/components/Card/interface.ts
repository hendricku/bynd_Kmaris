import { ReactNode } from "react";

export type CardElevation = "none" | "sm" | "md" | "lg";

export interface CardProps {

  href?: string;
  children: ReactNode;
  padding?: number | string;
  elevation?: CardElevation;
  clickable?: boolean;
  className?: string;
  accentBottom?: boolean;
  accentColor?: string;
  minHeight?: number;
}