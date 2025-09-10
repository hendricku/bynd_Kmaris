"use client";

import { styled, Theme } from "@mui/material/styles";
import { CardElevation } from "./interface";

interface StyledCardProps {
  $padding: number | string;
  $elevation: CardElevation;
  $clickable: boolean;
  $accentBottom?: boolean;
  $accentColor?: string;
  $minHeight?: number;
}

const getBoxShadow = (elevation: CardElevation) => {
  switch (elevation) {
    case "lg":
      return "0 12px 32px rgba(16,24,40,0.12), 0 4px 8px rgba(16,24,40,0.08)";
    case "md":
      return "0 4px 12px rgba(16,24,40,0.08), 0 2px 4px rgba(16,24,40,0.04)";
    case "sm":
      return "0 2px 8px rgba(16,24,40,0.06), 0 1px 2px rgba(16,24,40,0.04)";
    case "none":
    default:
      return "none";
  }
};

export const CardRoot = styled("div")<StyledCardProps>(
  ({ theme, $padding, $elevation, $clickable, $accentBottom, $accentColor, $minHeight }) => ({
    display: "flex",
    flexDirection: "column",
    background: theme.palette.common.white,
    borderRadius: 0,
    textDecoration: "none",
    boxShadow: getBoxShadow($elevation),
    padding: typeof $padding === "number" ? `${$padding}px` : $padding,
    transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: $clickable ? "pointer" : "default",
    position: "relative",
    minHeight: $minHeight,
    overflow: "hidden",

    "&::after": $accentBottom
      ? {
          content: '""',
          position: "absolute",
          left: 0,
          width: '100%',
          bottom: 0,
          height: 4,
          background: $accentColor || theme.palette.primary.main,
        }
      : undefined,

    ":hover": $clickable
      ? { 
          transform: "translateY(-4px)",
          boxShadow: getBoxShadow("lg"),
        }
      : undefined,

    ":focus-visible": {
      outline: `2px solid ${theme.palette.primary.main}`,
      outlineOffset: 2,
    },



    [theme.breakpoints.down('sm')]: {
      borderRadius: 12,
      padding: typeof $padding === "number" ? `${Math.max($padding - 4, 12)}px` : $padding,
    },
  })
);