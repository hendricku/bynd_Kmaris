import { styled } from "@mui/material/styles";

export const PillRoot = styled("div")(({ theme }) => ({
  background: theme.palette.common.white,
  color: theme.palette.primary.main,
  padding: "6px 14px",
  borderRadius: "20px",
  fontSize: "13px",
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightBold,
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  whiteSpace: "nowrap",
  display: "inline-block",
  position: "absolute",
  top: "20px",
  right: "20px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
}));