"use client";

import { styled } from "@mui/material/styles";

export const HeroSection = styled("section")(({ theme }) => ({
  width: "100%",
  background: theme.palette.navy.main,
  backgroundColor: theme.palette.navy.main,
  position: "relative",
    margin:'0 auto',
}));

export const HeroBackground = styled("div")({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  overflow: "hidden",
});



export const HeroImageWrap = styled("div")({
  position: "relative",
  minHeight: "clamp(500px, 85vh, 800px)",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  width: "100%",
});



export const Overlay = styled("div")({
  position: "absolute",
  inset: 0,
    // display: "flex",
  background:
    "linear-gradient(135deg, rgba(0,37,66,0.9) 0%, rgba(0,37,66,0.7) 40%, rgba(0,37,66,0.2) 100%)",
});

export const ContentContainer = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: 1440,
  margin: "0 auto",
  position: "relative",
  zIndex: 3,
  height: "100%",
  display: "flex",
  alignItems: "center",
}));

export const Content = styled("div")(({ theme }) => ({
  position: "absolute",

  height: "10%",
  display: "flex",
  alignItems: "center",
  padding: "0 32px",
  zIndex: 2,

  [theme.breakpoints.values.sm]: {
    padding: "32px",
  },
   [theme.breakpoints.values.md]: {
    padding: "32px",
  },
   [theme.breakpoints.values.lg]: {
    padding: "32px",
  },
   [theme.breakpoints.values.xl]: {
    padding: "32px",
  },

}));


export const ContentBox = styled("div")(({ theme }) => ({
  color: theme.palette.common.white,
  fontFamily: "var(--font-inter)",
  animation: "fadeInUp 0.8s ease-out 0.2s both",
  maxWidth: "100%",
  borderLeft: "3px solid red",
  paddingLeft: theme.spacing(2),
  margin: "0 auto",
  textAlign: "left",
  [theme.breakpoints.up("sm")]: {
    maxWidth: 520,
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: 580,
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: 640,
  },
  [theme.breakpoints.up("xl")]: {
    maxWidth: 720,
  },
}));

export const Title = styled("h1")({
  fontFamily: "var(--font-inter)",
  fontSize: "clamp(28px, 5vw, 56px)",
  lineHeight: 1.1,
  fontWeight: 800,
  marginBottom: 16,
  whiteSpace: "pre-line",
  textShadow: "0 2px 4px rgba(0,0,0,0.3)",
});

export const Description = styled("p")({
  fontSize: "clamp(14px, 2.5vw, 18px)",
  lineHeight: 1.6,
  opacity: 0.95,
  marginBottom: 24,
  fontFamily: "var(--font-inter)",
});
