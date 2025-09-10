import React from 'react';

// Define the allowed HTML heading levels
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

// Define the visual styles the heading can have
export type HeadingVariant = 'hero' | 'section' | 'card' | 'group';

// Define text alignment options
export type HeadingAlign = 'left' | 'center' | 'right';

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
  /**
   * The content to be displayed inside the heading.
   */
  children: React.ReactNode;
  /**
   * Overrides the default color from the theme.
   */
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
}