"use client";

import React from "react";
import { styled } from "@mui/material/styles";

export const Section = styled("section")(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.common.white,
  padding: "56px 24px",
  position: "relative",
}));

export const Container = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: theme.breakpoints.values.xl,
  margin: "0 auto",
}));

export const TopSection = styled("section")(({ theme }) => ({
  maxWidth: 1440,
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  gap: 64,

  [theme.breakpoints.down("lg")]: {
    gap: 48,
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: 32,
  },
}));

export const Image = styled("img")(({ theme }) => ({
  width: 624,
  height: 450,
  borderRadius: 8,
  objectFit: "cover",
  flexShrink: 0,
  [theme.breakpoints.down("lg")]: {
    width: 450,
    height: 280,
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: 280,
    maxWidth: 500,
  },
}));

export const TextContent = styled("div")(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

export const Title = styled("h1")(({ theme }) => ({
  fontFamily: 'var(--font-inter)',
  fontSize: "16px",
  fontWeight: 700,
  lineHeight: 1.2,
  margin: "0 0 16px 0",
  color: theme.palette.text.primary,
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.75rem",
  },
}));
export const MainTitle = styled("h1")(({ theme }) => ({
  fontFamily: 'var(--font-inter)',
  fontSize: "3rem",
  fontWeight: 700,
  lineHeight: 1.2,
  margin: "0 0 16px 0",
  color: theme.palette.text.primary,
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.75rem",
  },
}));

export const Description = styled("p")(({ theme }) => ({
  fontFamily: 'var(--font-inter)',
  fontSize: "1rem",
  fontWeight: 400,
  lineHeight: 1.6,
  margin: "0 0 32px 0",
  color: "#6B7280",
  maxWidth: 600,
}));

export const HowItWorksSection = styled("section")(({ theme }) => ({
  width: "100%",
  padding: "64px 0",

  [theme.breakpoints.down("md")]: {
    padding: "48px 0",
  },
}));

export const HowItWorksContainer = styled("div")(({ theme }) => ({
  maxWidth: 1440,
  margin: "0 auto",
  [theme.breakpoints.down("lg")]: {
    padding: "0 32px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "0 24px",
  },
}));

export const HowItWorksTitle = styled("h2")(({ theme }) => ({
  fontFamily: 'var(--font-inter)',
  textAlign: "center",
  fontWeight: 700,
  fontSize: "2rem",
  lineHeight: 1.25,
  margin: "0 0 48px 0",
  color: theme.palette.text.primary,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.75rem",
    margin: "0 0 40px 0",
  },
}));

export const StepsContainer = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: 32,
  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 24,
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    gap: 20,
  },
}));

export const StepCard = styled("article")(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: 8,
  padding: 0,
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  transition: "all 0.2s ease",
  overflow: "hidden",
  "&:hover": {
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    transform: "translateY(-1px)",
  },
}));

export const StepIconPlaceholder = styled("div")(({ theme }) => ({
  width: "100%",
  height: 160,
  backgroundColor: "#E5E7EB",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#9CA3AF",
  fontSize: "0.875rem",
  fontFamily: 'var(--font-inter)',
  fontWeight: 500,
  marginBottom: 20,
}));

export const StepImage = styled("img")(({ theme }) => ({
  width: '100%',
  height: '30%',
  borderRadius: 8,
  marginBottom: 12,
  objectFit: "cover",
  alignSelf: "center",
}));
