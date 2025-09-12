import { styled } from "@mui/material/styles";

export const PillRoot = styled("div")(({ theme }) => ({
  background: "#FFFFFF",
  color: theme.palette.primary.main,
  padding: "4px 16px",
  borderRadius: "20px",
  fontSize: "14px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  whiteSpace: "nowrap",
  display: "inline-block",
  position: "absolute",
  top: "16px",
  right: "16px",
}));
