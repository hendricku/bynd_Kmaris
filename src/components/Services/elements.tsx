"use client";

import { styled } from "@mui/material/styles";

export const Section = styled("section")(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.common.white,
  padding: "64px 32px",
  position: "relative",
  
}));

export const Container = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: theme.breakpoints.values.xl,
  margin: "0 auto",
}));

export const HeaderRow = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "0 0 32px 0",
  gap: 16,
  // marginBottom: 32, 
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));
export const HeaderRowServices = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  // padding: "0 0 32px 0",
  gap: 16,
  // marginBottom: 32, 
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export const Grid = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
//  padding:"32px 0 0 0",
  gap: "2rem",
  alignItems: "stretch",
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "repeat(4, 1fr)",
  },
}));

export const Card = styled("a")(({ theme }) => ({
  display: "flex",

  flexDirection: "column",
  height: "100%",
  textDecoration: "none",
  backgroundColor: theme.palette.common.white,
  border: "1px solid #E5E7EB",
  overflow: "hidden",
  "&:hover": {
    borderColor: theme.palette.primary.main,
  },
}));

export const ThumbWrap = styled("div")({
  position: "relative",
  overflow: "hidden",
  margin: "-1px",
});

export const Thumb = styled("img")({
  width: "100%",
  height: 240,
  objectFit: "cover",
});

export const CardBody = styled("div")({
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  gap: 12,
  flex: 1,
});

export const CardTitle = styled("h3")(({ theme }) => ({
  fontFamily: "var(--font-inter)",
  color: theme.palette.text.primary,
  fontSize: "20px",
  lineHeight: 1.3,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: 0.4,
  margin: 0,

}));

export const ButtonRow = styled("div")({
  marginTop: "auto",
  paddingTop: "16px",
});

export const ServiceButtonWrapper = styled("div")(({ theme }) => ({
  "& .app-button": {
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
    "& .MuiButton-endIcon": {
      marginLeft: "auto",
    },
  },
  "&.header-button": {
    paddingBottom: "2rem",
  },
}));
