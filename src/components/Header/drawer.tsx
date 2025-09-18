"use client";

import { styled } from "@mui/material/styles";

export const MobileDrawerOverlay = styled("div", {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open: boolean }>(({ open, theme }) => ({
  position: "fixed",
  inset: 0,
  background: "rgba(0, 0, 0, 0.6)",
  opacity: open ? 1 : 0,
  visibility: open ? "visible" : "hidden",
  transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)",
  zIndex: 1200,
  backdropFilter: "blur(4px)",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const MobileDrawerPanel = styled("div", {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open: boolean }>(({ open, theme }) => ({
  position: "fixed",
  top: 0,
  right: 0,
  height: "100vh",
  width: "85%",
  maxWidth: 320,
  background: theme.palette.navy.main,
  transform: open ? "translateX(0)" : "translateX(100%)",
  transition: "transform 300ms cubic-bezier(0.4, 0, 0.2, 1)",
  zIndex: 1300,
  display: "flex",
  flexDirection: "column",
  boxShadow: "-8px 0 32px rgba(0, 0, 0, 0.25)",
  overflow: "hidden",
  backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const MobileDrawerHeader = styled("div")(({ theme }) => ({
  padding: "28px 24px",
  borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "transparent",
  position: "relative",
  flexShrink: 0,
}));

export const DrawerLogoSection = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  flex: 1,
});

export const DrawerSubtitle = styled("span")(({ theme }) => ({
  color: "#6b7280",
  fontSize: "13px",
  fontWeight: 400,
  fontFamily: theme.typography.fontFamily,
  letterSpacing: "0.025em",
}));

export const DrawerCloseButton = styled("button")(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.1)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  cursor: "pointer",
  padding: "10px",
  borderRadius: "8px",
  transition: "all 200ms ease",
  outline: "none",
  color: "#ffffff",
  fontSize: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "44px",
  height: "44px",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderColor: "rgba(255, 255, 255, 0.3)",
    transform: "scale(1.05)",
  },
  "&:focus": {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderColor: theme.palette.primary.main,
    boxShadow: `0 0 0 2px ${theme.palette.primary.main}40`,
  },
  "&:active": {
    transform: "scale(0.95)",
  },
}));

export const DrawerContent = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  minHeight: 0,
});

export const DrawerNav = styled("nav")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "24px 0",
  fontFamily: theme.typography.fontFamily,
  flex: 1,
}));

export const DrawerLink = styled("a")(({ theme }) => ({
  color: "rgba(255, 255, 255, 0.9)",
  textDecoration: "none",
  padding: "18px 28px",
  fontSize: "16px",
  fontWeight: 500,
  transition: "all 220ms ease",
  borderRadius: 0,
  outline: "none",
  position: "relative",
  display: "flex",
  alignItems: "center",
  borderLeft: "3px solid transparent",
  
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    color: "#ffffff",
    borderLeftColor: theme.palette.primary.main,
    transform: "translateX(4px)",
  },
  
  "&:focus": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "#ffffff",
    borderLeftColor: theme.palette.primary.main,
    boxShadow: "inset 0 0 0 2px rgba(221, 28, 35, 0.3)",
  },

  "&:active": {
    backgroundColor: "rgba(255, 255, 255, 0.12)",
    transform: "translateX(2px)",
  },
}));

export const DrawerFooter = styled("div")(({ theme }) => ({
  marginTop: "auto",
  padding: "24px",
  borderTop: "1px solid rgba(255, 255, 255, 0.15)",
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  flexShrink: 0,
}));

export const DrawerIconSection = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  
  "& > div": {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
  },

  "& button": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "rgba(255, 255, 255, 0.9)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "8px",
    padding: "12px",
    minWidth: "48px",
    height: "48px",
    transition: "all 200ms ease",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      borderColor: "rgba(255, 255, 255, 0.3)",
      color: "#ffffff",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
      transform: "translateY(-2px)",
    },
    
    "&:focus": {
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      borderColor: theme.palette.primary.main,
      boxShadow: `0 0 0 2px ${theme.palette.primary.main}40, 0 4px 12px rgba(0, 0, 0, 0.2)`,
    },

    "&:active": {
      transform: "translateY(0)",
    },
  },
}));

export const DrawerSectionTitle = styled("h3")(({ theme }) => ({
  fontSize: "11px",
  fontWeight: 600,
  color: "rgba(255, 255, 255, 0.6)",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  margin: "0 28px 16px 28px",
  fontFamily: theme.typography.fontFamily,
}));

export const DrawerDivider = styled("hr")({
  border: "none",
  borderTop: "1px solid rgba(255, 255, 255, 0.15)",
  margin: "0",
});