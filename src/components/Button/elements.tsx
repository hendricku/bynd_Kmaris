"use client";

import { styled } from "@mui/material/styles";
import { AppButtonProps } from "./interface";

type ButtonRootProps = Omit<AppButtonProps, 'label' | 'onClick'> & {
  widthPercent?: number;
};

export const ButtonRoot = styled("a")<ButtonRootProps>(
  ({ theme, size = 'large', variant = 'default', withArrow = false, long = false, widthPercent }) => {
    const tokensBySize = {
      small: { minHeight: 36, padY: 8, padX: 14, fontSize: 13 },
      medium: { minHeight: 42, padY: 10, padX: 18, fontSize: 14 },
      large: { minHeight: 48, padY: 12, padX: 24, fontSize: 15 },
    } as const;
    const t = tokensBySize[size];
    const compactPad = t.padY + 2;
    const padding = variant === 'compact' ? `${compactPad}px` : `${t.padY}px ${t.padX}px`;

    return {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 12,
      border: 0,
      background: theme.palette.primary.main,
      color: theme.palette.common.white,
      textDecoration: "none",
      fontFamily: theme.typography.fontFamily,
      fontWeight: 600,
      transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
      boxShadow: `0 2px 8px ${theme.palette.primary.main}33`,
      cursor: "pointer",
      gap: withArrow ? 12 : 8,
      padding,
      fontSize: t.fontSize,
      minHeight: t.minHeight,
      width: widthPercent ? `${widthPercent}%` : undefined,
      position: "relative",
      overflow: "hidden",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: -100,
        width: "100%",
        height: "100%",
        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
        transition: "left 0.5s ease",
      },

      ...(long && {
        minWidth: size === 'small' ? 140 : size === 'medium' ? 160 : 180,
        [theme.breakpoints.up('sm')]: {
          minWidth: size === 'small' ? 150 : size === 'medium' ? 170 : 190,
        },
        [theme.breakpoints.up('md')]: {
          minWidth: size === 'small' ? 160 : size === 'medium' ? 180 : 200,
        },
      }),

      [theme.breakpoints.down('sm')]: {
        fontSize: size === 'small' ? 12 : size === 'medium' ? 13 : 14,
        minHeight: size === 'small' ? 32 : size === 'medium' ? 38 : 44,
        padding: variant === 'compact'
          ? `${Math.max(compactPad - 2, 6)}px`
          : `${Math.max(t.padY - 2, 8)}px ${Math.max(t.padX - 4, 12)}px`,
      },

      ':hover': {
        background: theme.palette.primary.dark,
        transform: 'translateY(-2px)',
        boxShadow: `0 4px 12px ${theme.palette.primary.main}55`,
      },
      ':hover::before': {
        left: '150%',
      },
      ':active': {
        transform: 'translateY(0)',
        boxShadow: `0 2px 8px ${theme.palette.primary.main}33`,
      },
    };
  }
);

export const Arrow = styled("span")(({ theme }) => ({
  display: "inline-block",
  fontFamily: theme.typography.fontFamily,
  transition: "transform 200ms cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    transform: "translateX(2px)"
  }
}));