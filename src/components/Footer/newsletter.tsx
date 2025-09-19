"use client";

import { styled } from "@mui/material/styles";

export const Newsletter = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  width: "100%",
  maxWidth: 520,
});

export const NewsletterDescription = styled("p")({
  fontSize: 15,
  lineHeight: 1.7,
  opacity: 0.9,
  margin: 0,
});

export const NewsletterForm = styled("form")({
  display: "flex",
  position: "relative",
  height: 50,
  width: "100%",
});

export const NewsletterInput = styled("input")(({ theme }) => ({
  flex: 1,
  padding: "0 60px 0 20px",
  borderColor: theme.palette.navy.main,
  opacity:0.2,
  borderRadius: 8,
  background: theme.palette.common.white,
  color: theme.palette.navy.main,
  fontFamily: theme.typography.fontFamily,
  fontSize: 15,
}));

export const NewsletterButton = styled("button")(({ theme }) => ({
  position: "absolute",
  right: 6,
  top: 6,
  bottom: 6,
  width: 42,
  border: "none",
  background: theme.palette.primary.main,
  color: theme.palette.common.white,
  borderRadius: 8,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background 200ms ease",
  ":hover": {
    background: theme.palette.primary.dark, 
  },
}));