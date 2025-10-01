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

export const NewsletterForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 14,
  width: "100%",
  
  "& .name-inputs": {
    display: "flex",
    gap: 12,
    width: "100%",
    
    // Stack on mobile
    [theme.breakpoints.down('sm')]: {
      flexDirection: "column",
      gap: 14,
    },
  },
  
  "& .email-row": {
    display: "flex",
    gap: 12,
    width: "100%",
    alignItems: "stretch",
    
    // Stack on mobile
    [theme.breakpoints.down('sm')]: {
      flexDirection: "column",
      gap: 14,
    },
  },
  
  "& .email-input": {
    flex: 1,
    minWidth: 0, // Prevents flex overflow issues
  },
}));

export const NewsletterInput = styled("input")(({ theme }) => ({
  flex: 1,
  padding: "14px 18px",
  border: `1.5px solid ${theme.palette.navy.main}`,
  borderRadius: 10,
  background: theme.palette.common.white,
  color: theme.palette.navy.main,
  fontFamily: theme.typography.fontFamily,
  fontSize: 15,
  opacity: 1,
  transition: "border-color 200ms ease, box-shadow 200ms ease, opacity 200ms ease",
  outline: "none",
  height: 50,
  boxSizing: "border-box",
  
  "&::placeholder": {
    color: theme.palette.navy.main,
    opacity: 0.5,
  },
  
  "&:focus": {
    borderColor: theme.palette.primary.main,
    boxShadow: `0 0 0 3px ${theme.palette.primary.main}15`,
  },
  
  "&:hover:not(:disabled)": {
    borderColor: theme.palette.primary.main,
  },
  
  "&:disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },
  
  // Mobile optimizations
  [theme.breakpoints.down('sm')]: {
    fontSize: 16, 
    padding: "12px 16px",
  },
}));

export const NewsletterButton = styled("button")(({ theme }) => ({
  padding: "0 28px",
  border: "none",
  background: theme.palette.primary.main,
  color: theme.palette.common.white,
  borderRadius: 10,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  fontWeight: 600,
  fontSize: 15,
  transition: "background 200ms ease, transform 150ms ease, opacity 200ms ease",
  minWidth: 120,
  height: 50,
  flexShrink: 0,
  
  "&:hover:not(:disabled)": {
    background: theme.palette.primary.dark,
    transform: "translateY(-1px)",
  },
  
  "&:active:not(:disabled)": {
    transform: "translateY(0)",
  },
  
  "&:disabled": {
    opacity: 0.7,
    cursor: "not-allowed",
    transform: "none",
  },
  
  // Full width on mobile
  [theme.breakpoints.down('sm')]: {
    width: "100%",
    minWidth: "100%",
    padding: "14px 28px",
  },
}));