import { styled } from "@mui/material/styles";

export const ArticleSection = styled("section")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  width: "100%",
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(4, 0),
}));

export const Container = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: `calc(1440px + 4rem)`, 
  margin: "0 auto",
  padding: "0 2rem", 
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: theme.spacing(6),
  boxSizing: "border-box",
  
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "2fr 1fr",
  },
  
  [theme.breakpoints.down("sm")]: {
    padding: "0 1rem", 
    maxWidth: `calc(1440px + 2rem)`, 
  },
}));

export const MainContent = styled("article")({
  width: "100%",
});

export const Sidebar = styled("aside")({
  width: "100%",
});

export const BreadcrumbContainer = styled("nav")(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontSize: "14px",
  color: theme.palette.text.secondary,
}));

export const ArticleTitle = styled("h1")(({ theme }) => ({
  fontFamily: "Inter, sans-serif",
  fontSize: "36px",
  fontWeight: theme.typography.fontWeightBold,
  lineHeight: 1.1,
  marginBottom: theme.spacing(3),
  color: theme.palette.text.primary,
}));

export const ArticleImage = styled("div")({
  position: "relative",
  width: "100%",
  aspectRatio: "16/8.5",
  borderRadius: "12px",
  overflow: "hidden",
  margin: "24px 0",
});

export const ArticleBody = styled("div")(({ theme }) => ({
  fontFamily: "Inter, sans-serif",
  fontSize: "18px",
  lineHeight: 1.8,
  color: theme.palette.text.primary,
  "& p": {
    marginBottom: theme.spacing(2),
  },
}));

export const SidebarTitle = styled("h4")(({ theme }) => ({
  fontFamily: "Inter, sans-serif",
  fontSize: "20px",
  fontWeight: theme.typography.fontWeightBold,
  marginBottom: theme.spacing(3),
  borderBottom: `2px solid ${theme.palette.primary.main}`,
  paddingBottom: theme.spacing(1),
  color: theme.palette.text.primary,
}));

export const RelatedArticlesContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});