"use client";

import { styled } from "@mui/material/styles";

export const HeroSection = styled("section")(
  ({ theme }) => ({
    width: "100%",
    backgroundColor: theme.palette.primary.main, 
    position: "relative",
    overflow: "hidden",
  })
);

export const HeroInner = styled("div")({
  width: "100%",
  // maxWidth: 1440,
  margin: "0 ",
  position: "relative",
});

export const HeroImageWrap = styled("div")({
  position: "relative",
  minHeight: "clamp(500px, 85vh, 800px)",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  width: "100%",
});

export const BgImage = styled("div")<{ src: string }>(
  ({ src }) => ({
    position: "absolute",
    inset: 0,
    backgroundImage: `url(${src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  })
);

export const Overlay = styled("div")({
  position: "absolute",
  inset: 0,
  background: "linear-gradient(135deg, rgba(0,37,66,0.9) 0%, rgba(0,37,66,0.7) 40%, rgba(0,37,66,0.2) 100%)",
});

export const Content = styled("div")(
  ({ theme }) => ({
    position: "absolute",
    height: "100%",
    display: "flex",
    alignItems: "center",
    padding: "0 16px",
    zIndex: 2,
    
    [theme.breakpoints.up('sm')]: {
      padding: "0 24px",
    },
    [theme.breakpoints.up('md')]: {
      padding: "0 48px",
    },
    [theme.breakpoints.up('lg')]: {
      padding: "0 64px",
    },
  })
);

export const ContentBox = styled("div")(
  ({ theme }) => ({
    color: theme.palette.common.white,
    fontFamily: "var(--font-inter)",
    animation: "fadeInUp 0.8s ease-out 0.2s both",
    maxWidth: "100%",
    [theme.breakpoints.up('sm')]: {
      maxWidth: 520,
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: 580,
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: 640,
    },
  })
);

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