"use client";

import { styled } from "@mui/material/styles";

export const Group = styled("div")({});

export const GroupTitle = styled("h4")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: 16,
  fontWeight: 600,
  letterSpacing: 0.8,
  textTransform: "uppercase",
  opacity: 0.95,
  marginBottom: 20,
}));

export const LinkList = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "grid",
  gap: 12,
});

export const LinkItem = styled("a")(({ theme }) => ({
  color: theme.palette.navy.main,
  textDecoration: "none",
  fontSize: 15,
  opacity: 0.85,
  transition: "opacity 120ms ease, transform 120ms ease",
  ":hover": {
    opacity: 1,
    transform: "translateX(2px)"
  },
}));
