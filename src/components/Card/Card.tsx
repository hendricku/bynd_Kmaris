"use client";

import React from "react";
import Link from "next/link";
import { CardProps } from "./interface";
import { CardRoot } from "./elements";
  
export function Card({
  href,
  children,
  padding = 16,
  elevation = "md",
  clickable = true,
  className,
  accentBottom,
  accentColor,
  minHeight,
}: CardProps) {
  const cardContent = (
    <CardRoot

      $padding={padding}
      $elevation={elevation}
      $clickable={clickable}
      $accentBottom={accentBottom}
      $accentColor={accentColor}
      $minHeight={minHeight}
      className={className}
    >
      {children}
    </CardRoot>
  );


  if (href) {
    return (
      <Link href={href} style={{ textDecoration: 'none' }}>
        {cardContent}
      </Link>
    );
  }


  return cardContent;
}

export default Card;