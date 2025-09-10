"use client";

import React from "react";
import { HeadingRoot } from "./elements";
import { HeadingProps, HeadingTag } from "./interface";

export function Heading({
  level = 2,
  variant = "section",
  children,
  color,
  uppercase = false,
  align = "left",
  maxWidth,
  marginBottom,
}: HeadingProps) {
  // Ensure the semantic heading level is always a valid number between 1 and 6.
  const sanitizedLevel = Math.min(Math.max(level, 1), 6);
  const Tag = `h${sanitizedLevel}` as HeadingTag;

  return (
    <HeadingRoot
      as={Tag} // Dynamically sets the component to be <h1>, <h2>, etc. for SEO.
      $variant={variant}
      $color={color}
      $uppercase={uppercase}
      $align={align}
      $maxWidth={maxWidth}
      $marginBottom={marginBottom}
    >
      {children}
    </HeadingRoot>
  );
}

export default Heading;