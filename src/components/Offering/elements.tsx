"use client";

import { styled } from "@mui/material/styles";

export const Section = styled("section")(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.common.white,
  padding: "64px 24px",
  position: "relative",
}));

export const Container = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: theme.breakpoints.values.xl, 
  margin: "0 auto",
}));

export const Grid = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 40,
  alignItems: "center",
  [theme.breakpoints.up('lg')]: { 
    gridTemplateColumns: "1fr 1fr", 
    gap: 64,
  },
}));

export const Image = styled("img")({
  width: "100%",
  height: "auto",
  display: "block",
  borderRadius: 16,
  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
  transition: "transform 300ms ease, box-shadow 300ms ease",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 16px 48px rgba(0,0,0,0.15)",
  },
});

export const Content = styled("div")({
  textAlign: "left",
});

export const Description = styled("p")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: "15px",
  lineHeight: 1.6,
  opacity: 0.9,
  marginBottom: 28,
  color: theme.palette.text.primary,
}));

export const ButtonWrapper = styled("div")(({ theme }) => ({

  display: 'flex',
  justifyContent: 'flex-start', 
}));