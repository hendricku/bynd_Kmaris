"use client";

import { styled, Theme } from "@mui/material/styles";
import { HeadingVariant, HeadingAlign } from "./interface";

interface StyledHeadingProps {
  $variant: HeadingVariant;
  $color?: string;
  $uppercase?: boolean;
  $align?: HeadingAlign;
  $maxWidth?: number | string;
  $marginBottom?: number;
}


const getVariantStyles = (variant: HeadingVariant, theme: Theme) => {
  switch (variant) {
    case "hero":
      return {
        fontSize: "28px",
        fontWeight: theme.typography.fontWeightBold, 
        lineHeight: 1.1,
        [theme.breakpoints.up("sm")]: { fontSize: "36px" },
        [theme.breakpoints.up("md")]: { fontSize: "48px" },
        [theme.breakpoints.up("lg")]: { fontSize: "56px" },
      };
    case "section":
      return {
        fontSize: "36px",
        fontWeight: theme.typography.fontWeightBold,
        lineHeight: 1.15,
        [theme.breakpoints.up("md")]: { fontSize: "40px" },
      };
    case "card":
      return {
        fontSize: "18px",
        fontWeight: theme.typography.fontWeightBold,
        lineHeight: 1.25,
        letterSpacing: "0.4px",
        textTransform: "uppercase",
        [theme.breakpoints.up("md")]: { fontSize: "24px" },
      };
    case "group":
      return {
        fontSize: "16px",
        fontWeight: 600,
        lineHeight: 1.5,
        letterSpacing: "0.8px",
        opacity: 0.95,
      };
    default:
      return {};
  }
};

export const HeadingRoot = styled("div")`
  ${({
    theme,
    $variant,
    $color,
    $uppercase,
    $align,
    $maxWidth,
    $marginBottom,
  }: StyledHeadingProps & { theme: Theme }) => {
    const variantStyles = getVariantStyles($variant, theme);
    return `
      margin: 0;
      font-family: ${theme.typography.fontFamily};
      color: ${$color || theme.palette.text.primary};
      text-align: ${$align || "left"};
      text-transform: ${$uppercase ? "uppercase" : "none"};
      max-width: ${
        typeof $maxWidth === "number" ? `${$maxWidth}px` : $maxWidth || "none"
      };
      margin-bottom: ${$marginBottom ? `${$marginBottom}px` : 0};
      font-size: ${variantStyles.fontSize};
      font-weight: ${variantStyles.fontWeight};
      line-height: ${variantStyles.lineHeight};
      ${
        variantStyles.letterSpacing
          ? `letter-spacing: ${variantStyles.letterSpacing};`
          : ""
      }
      ${variantStyles.opacity ? `opacity: ${variantStyles.opacity};` : ""}

      ${Object.entries(variantStyles)
        .filter(([key]) => key.startsWith("["))
        .map(
          ([key, value]) => `
          ${key.slice(1, -1)} {
            ${Object.entries(value as object)
              .map(([k, v]) => `${k}: ${v};`)
              .join("\n")}
          }
        `
        )
        .join("\n")}
    `;
  }}
`;
