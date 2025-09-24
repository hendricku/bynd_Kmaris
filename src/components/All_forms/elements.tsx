"use client";

import { styled } from "@mui/material/styles";

export const PageWrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.common.white,

  width: "100%",
}));

export const Container = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: theme.breakpoints.values.xl,
  margin: "0 auto", 
  padding: "64px 0",
  [theme.breakpoints.down('md')]: {
    padding: "32px 32px",
  },
}));

export const TabsWrapper = styled("div")({
  borderBottom: "1px solid #E5E5E5",
  marginBottom: 40,
  overflowX: "auto",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

export const Tabs = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent:"center",
  minWidth: "min-content",
  padding: "16px 0",
  margin: "0 auto",
  gap: "48px",
  [theme.breakpoints.down('md')]: {
    gap: "32px",
    padding: "16px 8px",
  },
}));

export const Tab = styled("button", {
  shouldForwardProp: (prop) => prop !== '$active',
})<{ $active?: boolean }>(({ theme, $active }) => ({
  background: "none",
  border: "none",
  padding: 0,
  fontSize: 15,
  fontWeight: 600,
  whiteSpace: "nowrap",
  color: $active ? theme.palette.primary.main : theme.palette.text.primary,
  cursor: "pointer",
  fontFamily: theme.typography.fontFamily,
}));

export const Grid = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "2rem",
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: "repeat(2, minmax(280px, 1fr))",
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: "repeat(3, minmax(280px, 1fr))",
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: "repeat(4, minmax(280px, 1fr))",
  },
}));

export const FormHeader = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.navy.main,
  padding: "32px 20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px",
  height: "220px",
  justifyContent: "center",
  position: "relative",
}));

export const FormId = styled("h3")(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: "18px",
  fontWeight: 700,
  margin: 0,
  fontFamily: theme.typography.fontFamily,
  lineHeight: 1.2,
  textAlign: "center",
  wordWrap: "break-word",
  hyphens: "auto",
  maxWidth: "100%",
}));



export const PackageText = styled("div")(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: "14px",
  fontWeight: 500,
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  textAlign: "center",
  marginTop: "4px",
  fontFamily: theme.typography.fontFamily,
}));

export const FormContent = styled("div")({
  padding: "16px",
  textAlign: "center",
  // height: "100px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // justifyContent: "space-between",
  overflow: "hidden",
});

export const FormTitle = styled("p")(({ theme }) => ({
  margin: 0,
  fontSize: "14px",
  color: theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,
  lineHeight: 1.5,
  fontWeight: 500,
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
}));