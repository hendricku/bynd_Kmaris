"use client";

import { styled } from "@mui/material/styles";

export const Section = styled("section")(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.navy.main,
  padding: "64px 32px",
  color: theme.palette.common.white,
}));

export const Container = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: theme.breakpoints.values.xl,
  margin: "0 auto",
}));

export const Grid = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 24,
  alignItems: "stretch",
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 32,
  },
}));

export const Card = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.common.white,
  borderRadius: 16,
  padding: 24, // Use a consistent padding
  color: theme.palette.text.primary,
  overflow: "hidden",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "5px",
    backgroundColor: theme.palette.primary.main,
  },
  [theme.breakpoints.up('sm')]: {
    padding: 32, // Increase padding on larger screens
  },
}));

// --- THIS IS THE KEY CORRECTION FOR MOBILE ---
export const CardInner = styled("div")(({ theme }) => ({
  // Mobile-First: A simple flex column layout
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  height: "100%",

  // Desktop Override: Switch to a precise grid layout
  [theme.breakpoints.up('sm')]: {
    display: "grid",
    gridTemplateColumns: "auto 1fr", // Avatar auto-sizes, text takes the rest
    gridTemplateRows: "1fr auto", // Text row grows, meta is at the bottom
    gap: "0 24px",
    gridTemplateAreas: `
      "avatar text"
      "meta   text"
    `,
  },
}));

export const Avatar = styled("img")({
  gridArea: "avatar",
  width: 100, // Slightly smaller for mobile
  height: 100,
  borderRadius: 16,
  objectFit: "cover",
  alignSelf: 'start', // Ensure it aligns correctly in flexbox
});

export const Text = styled("p")(({ theme }) => ({
  gridArea: "text",
  color: theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,
  lineHeight: 1.7,
  fontSize: "15px",
  margin: 0,
  // This is crucial for the flexbox layout on mobile
  flex: 1, 
}));

export const MetaCol = styled("div")({
  gridArea: "meta",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 8,
  // Ensures it's at the bottom in the flex layout
  marginTop: 'auto', 
  paddingTop: '16px',
});

export const StarsRow = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 4,
  color: theme.palette.primary.main,
  fontSize: 24,
}));

export const Name = styled("div")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.text.primary,
  fontSize: "18px",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
}));

export const Role = styled("div")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.text.primary,
  opacity: 0.7,
  fontSize: 13,
  textTransform: "uppercase",
  letterSpacing: "0.5px",
}));

export const Subheading = styled("div")({
  fontSize: 13,
  textTransform: "uppercase",
  opacity: 0.75,
  letterSpacing: 0.8,
  textAlign: "center",
  marginBottom: 12,
  fontFamily: "var(--font-inter)",
});