import React from "react";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type HeadingVariant = "hero" | "section" | "card" | "group";

export type HeadingAlign = "left" | "center" | "right";

export interface HeadingProps {
  /**
   * The semantic HTML heading level (e.g., 1 for <h1>, 2 for <h2>).
   * @default 2
   */
  level?: HeadingLevel;
  /**
   * The visual style variant to apply.
   * @default 'section'
   */
  variant?: HeadingVariant;

  children: React.ReactNode;

  color?: string;
  /**
   * If true, the text will be transformed to uppercase.
   * @default false
   */
  uppercase?: boolean;
  /**
   * Sets the text alignment.
   * @default 'left'
   */
  align?: HeadingAlign;

  maxWidth?: number | string;

  marginBottom?: number;

   paddingTop?: number;
}
