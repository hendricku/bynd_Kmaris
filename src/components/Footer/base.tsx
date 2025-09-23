"use client";

import { styled } from "@mui/material/styles";

export const FooterRoot = styled("footer")(({ theme }) => ({
  width: "100%",
  background: theme.palette.common.white,
  color: theme.palette.navy.main,
  fontFamily: theme.typography.fontFamily,
}));

export const Top = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: theme.breakpoints.values.xl,
  margin: "0 auto",
   padding: "48px 24px",
  display: "grid",
  gap: 48,
  gridTemplateColumns: "1fr",
  [theme.breakpoints.up('md')]: {
    padding: "64px 32px",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 64,
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: "2fr 1fr 2fr",
  },
}));

export const Bottom = styled("div")({
  width: "100%",
  borderTop: `1px solid rgba(255,255,255,0.1)`,
});

export const BottomInner = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: theme.breakpoints.values.xl,
  margin: "0 auto",
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 16,
  fontSize: 14,
  [theme.breakpoints.up('md')]: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

export const BottomLinks = styled("div")(({ theme }) => ({
  display: "flex",
  gap: 24,
  "& a": {
    color: theme.palette.navy.main,
    textDecoration: "none",
    opacity: 0.8,
    transition: "opacity 200ms ease",
    "&:hover": {
      opacity: 1,
    },
  },
}));
