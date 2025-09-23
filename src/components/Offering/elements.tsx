"use client";

import { styled } from "@mui/material/styles";

export const Section = styled("section")(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.common.white,
  padding: "120px 24px",
  position: "relative",
  display: "flex",
  alignItems: "center",
 
}));

export const Container = styled("div")(({ theme }) => ({
  width: "100%",
  margin: "0 auto",
    maxWidth: '1440px',
}));

export const Grid = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 80,
  alignItems: "center",
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: "1fr 1fr",
    gap: 40,
  },
}));

export const Image = styled("img")({
  width: "100%",
  height: "600px",
  objectFit: "cover",
  display: "block",
  borderRadius: 16,
  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
  transition: "transform 300ms ease, box-shadow 300ms ease",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 16px 48px rgba(0,0,0,0.15)",
  },
});

export const VideoContainer = styled("div")({
  width: "100%",
  height: "600px",
  position: "relative",
  borderRadius: 16,
  overflow: "hidden",
  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
  transition: "transform 300ms ease, box-shadow 300ms ease",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 16px 48px rgba(0,0,0,0.15)",
  },
  "& iframe": {
    width: "100% !important",
    height: "100% !important",
    objectFit: "cover !important",
    borderRadius: "16px",
  },
});

export const VideoThumbnail = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  cursor: "pointer",
});

export const PlayButton = styled("div")({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 80,
  height: 80,
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "all 300ms ease",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 1)",
    transform: "translate(-50%, -50%) scale(1.1)",
  },
  "&::before": {
    content: '""',
    width: 0,
    height: 0,
    borderLeft: "20px solid #002542",
    borderTop: "12px solid transparent",
    borderBottom: "12px solid transparent",
    marginLeft: "4px",
  },
});

export const Content = styled("div")({
  textAlign: "left",
});

export const Description = styled("p")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: "18px",
  lineHeight: 1.8,
  opacity: 0.9,
  marginBottom: 32,
  color: theme.palette.text.primary,
}));

export const ButtonWrapper = styled("div")({
  display: 'flex',
  justifyContent: 'flex-start',
});
