"use client";

import { styled } from "@mui/material/styles";
import { palette } from "@/theme/palette"; // Assumes this path is correct
import Image from "next/image";
import {
  Box,
  Typography,
  Button,
  TextField,
  FormControlLabel,
  Radio,
  Checkbox,
  Select,
} from "@mui/material";

// --- Main Layout (From Login) ---

export const PageWrapper = styled("div")({
  minHeight: "100vh",
  width: "100%",
  display: "flex",
  background: "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
  fontFamily:
    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  padding: "20px",
  alignItems: "center",
  justifyContent: "center",
});
export const PasswordContainer = styled(Box)({
  position: "relative",
});

export const PasswordToggle = styled("button")(({ theme }) => ({
  position: "absolute",
  right: "12px",
  top: "50%",
  transform: "translateY(-50%)",
  background: "none",
  border: "none",
  cursor: "pointer",
  color: palette.text.primary,
  padding: "8px",
  borderRadius: "4px",
  fontSize: "18px",
  fontFamily: theme.typography.fontFamily,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
}));
export const Container = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column-reverse",
  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  margin: "auto",
  maxWidth: "1440px",
  borderRadius: "20px",
  overflow: "hidden",
  backgroundColor: theme.palette.common.white,

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    height: "auto",
    minHeight: "700px",
    maxHeight: "95vh",
  },
}));

// --- Left Image Panel (From Login) ---

export const Panel = styled("div")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    padding: "60px 40px",
    color: theme.palette.common.white,
  },
}));

export const BackgroundImage = styled(Image)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 0,
});

export const Overlay = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background:
    "linear-gradient(135deg, rgba(15, 23, 42, 0.90) 0%, rgba(30, 41, 59, 0.85) 100%)",
  zIndex: 1,
});

export const Content = styled("div")({
  zIndex: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  height: "100%",
  maxWidth: "420px",
});

export const PanelTitle = styled("h2")(({ theme }) => ({
  fontSize: "36px", // Increased for better prominence
  fontWeight: 700,
  textAlign: "left",
  marginBottom: "24px", // Slightly more spacing
  letterSpacing: "-0.015em", // Slightly looser for readability
  lineHeight: 1.3, // Improved readability
  fontFamily: theme.typography.fontFamily,
}));

export const PanelText = styled("p")(({ theme }) => ({
  fontSize: "16px", // Increased for readability
  lineHeight: 1.7, // More breathing room
  marginBottom: "48px", // Increased spacing
  opacity: 0.9, // Slightly less opacity for subtlety
  fontFamily: theme.typography.fontFamily,
}));

// --- Right Form Panel & Form Elements ---

export const FormRoot = styled("div")(({ theme }) => ({
  width: "100%",
  padding: "48px 32px", // Increased padding for comfort
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  backgroundColor: theme.palette.common.white,
  position: "relative",
  overflowY: "auto",

  // Custom Scrollbar
  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#f1f5f9",
    borderRadius: "8px",
  },
  "&::-webkit-scrollbar-thumb": {
    background: palette.primary.light,
    borderRadius: "8px",
    "&:hover": {
      background: palette.primary.main,
    },
  },
  scrollbarWidth: "thin", // For Firefox
  scrollbarColor: `${theme.palette.navy.main} #f1f5f9`, // For Firefox

  [theme.breakpoints.up("md")]: {
    width: "90%",
    padding: "48px 56px", // Increased for larger screens
  },
}));

export const LogoContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginBottom: "-8px", // Adjusted for better alignment
  cursor: "pointer",
  paddingBottom: "12px",
});

export const Title = styled("h1")(({ theme }) => ({
  fontSize: "32px", // Increased for prominence
  fontWeight: 700,
  color: palette.text.dark,
  textAlign: "center",
  marginBottom: "8px", // Slightly increased
  marginTop: "24px", // Adjusted for spacing
  letterSpacing: "-0.015em", // Improved readability
  lineHeight: 1.3, // Better text flow
  fontFamily: theme.typography.fontFamily,
}));

export const Subtitle = styled("p")(({ theme }) => ({
  fontSize: "16px", // Increased for readability
  color: palette.text.primary,
  textAlign: "center",
  margin: "0 auto 40px", // Increased bottom margin
  fontWeight: 400,
  maxWidth: "480px", // Slightly wider for better text flow
  lineHeight: 1.6, // Improved readability
  fontFamily: theme.typography.fontFamily,
}));

// Stepper
export const StepperContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1.5), // Slightly larger gap
  marginBottom: theme.spacing(5), // Increased for spacing
}));

interface StepperDotProps {
  $active?: boolean;
}
export const StepperDot = styled(Box)<StepperDotProps>(
  ({ theme, $active }) => ({
    flex: 1,
    height: "8px", // Slightly thicker for visibility
    backgroundColor: "#e2e8f0",
    borderRadius: "999px",
    transition: "background-color 0.4s ease",
    ...($active && {
      backgroundColor: palette.primary.main,
    }),
  })
);

// Form Elements
export const StepContainer = styled(Box)({ display: "block" });
export const StepTitle = styled(Typography)({
  fontSize: "24px", // Increased for hierarchy
  fontWeight: 700,
  marginBottom: "28px", // More spacing
  color: palette.text.dark,
  lineHeight: 1.4, // Improved readability
});

export const GridContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(3), // Increased gap for clarity
  gridTemplateColumns: "1fr",
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
}));

export const Label = styled("label")(({ theme }) => ({
  fontSize: "15px", // Slightly larger for clarity
  fontWeight: 600,
  color: palette.primary.main,
  letterSpacing: "0.02em", // Adjusted for readability
  display: "block",
  marginBottom: "10px", // Increased for spacing
  fontFamily: theme.typography.fontFamily,
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    backgroundColor: "#fafafa",
    "& input": { padding: "16px", fontSize: "16px" }, // Larger font
    "& fieldset": { border: `1px solid ${theme.palette.divider}` },
    "&:hover fieldset": { borderColor: theme.palette.primary.main },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
      boxShadow: `0 0 0 3px rgba(0,37,66,0.08)`,
    },
  },
}));

export const StyledSelect = styled(Select)(({ theme }) => ({
  width: "100%",
  borderRadius: "12px",
  backgroundColor: "#fafafa",
  "& .MuiSelect-select": { padding: "16px", fontSize: "16px" }, // Larger font
  "& .MuiOutlinedInput-notchedOutline": {
    border: `1px solid ${theme.palette.divider}`,
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.primary.main,
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.primary.main,
    boxShadow: `0 0 0 3px rgba(0,37,66,0.08)`,
  },
}));

export const OptionsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(2), // Increased gap
  marginTop: theme.spacing(1.5),
}));

export const ChipOption = styled(FormControlLabel)(({ theme }) => ({
  margin: 0,
  "& .MuiFormControlLabel-label": {
    fontSize: "15px", // Slightly larger
    fontWeight: 500,
    padding: "0 10px 0 6px", // Adjusted padding
    color: palette.text.dark,
    lineHeight: 1.5, // Better readability
    fontFamily: theme.typography.fontFamily,
  },
  "& .MuiButtonBase-root": {
    border: `1px solid ${theme.palette.divider}`,
    padding: "12px 16px", // Slightly larger
    borderRadius: "10px", // Softer corners
    transition: "all 0.2s ease",
    "&:hover": {
      borderColor: palette.primary.light,
      backgroundColor: "rgba(0, 37, 66, 0.04)",
    },
  },
  "& .Mui-checked": {
    borderColor: palette.primary.main,
    backgroundColor: "rgba(0, 37, 66, 0.08)",
  },
  "& .MuiRadio-root, & .MuiCheckbox-root": {
    padding: 0,
    marginRight: theme.spacing(1.5), // Slightly more spacing
  },
}));

export const ActionsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginTop: theme.spacing(5), // Increased for separation
  paddingTop: theme.spacing(4), // Increased for visual hierarchy
  borderTop: `1px solid ${theme.palette.divider}`,
}));

export const PrimaryButton = styled(Button)({
  padding: "16px 28px", // Larger for better clickability
  fontSize: "16px", // Larger font
  fontWeight: 600,
  color: palette.common.white,
  backgroundColor: palette.primary.main,
  border: "none",
  borderRadius: "12px",
  transition: "all 0.2s ease-in-out",
  textTransform: "none",
  "&:hover": {
    backgroundColor: palette.primary.dark,
    transform: "translateY(-1px)",
  },
  "&:disabled": { backgroundColor: palette.primary.light },
});

export const SecondaryButton = styled(Button)(({ theme }) => ({
  padding: "16px 28px", // Larger for consistency
  fontSize: "16px", // Larger font
  fontWeight: 600,
  color: palette.text.dark,
  backgroundColor: "rgba(0, 37, 66, 0.04)",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "12px",
  transition: "all 0.2s ease-in-out",
  textTransform: "none",
  "&:hover": {
    borderColor: palette.primary.main,
    backgroundColor: "rgba(0, 37, 66, 0.08)",
  },
}));

// Other Components
export const SummaryContainer = styled(Box)(({ theme }) => ({
  background: "rgba(0, 37, 66, 0.04)",
  borderLeft: `4px solid ${palette.primary.main}`,
  borderRadius: "8px",
  padding: theme.spacing(4), // Increased padding
  marginBottom: theme.spacing(3), // More spacing
}));

export const SummaryItem = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2), // Increased spacing
  fontSize: "16px", // Larger for readability
  lineHeight: 1.6, // Better text flow
  color: theme.palette.navy.main,
  "&:last-child": { marginBottom: 0 },
  "& strong": {
    fontWeight: 600,
    color: palette.text.dark,
    display: "block",
    marginBottom: "6px", // Slightly more spacing
  },
}));

export const ErrorBanner = styled(Box)(({ theme }) => ({
  background: "#fff5f5",
  border: `1px solid ${theme.palette.error.main}`,
  color: theme.palette.error.dark,
  padding: "14px 18px", // Slightly larger
  borderRadius: "10px",
  margin: "0 0 28px 0", // More bottom margin
  fontSize: "15px", // Larger for clarity
  lineHeight: 1.5, // Better readability
}));

export const HintText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "14px", // Slightly larger
  marginTop: theme.spacing(1), // More spacing
  lineHeight: 1.6, // Improved readability
}));

export const GroupTitle = styled(Typography)(({ theme }) => ({
  fontSize: "15px", // Slightly larger
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.text.primary,
  textTransform: "uppercase",
  letterSpacing: "0.06em", // Adjusted for clarity
  margin: "28px 0 12px 0", // More top margin
  lineHeight: 1.5, // Better readability
  "&:first-of-type": { marginTop: 0 },
}));

export const TermsLink = styled("button")(({ theme }) => ({
  background: "none",
  border: "none",
  color: palette.primary.main,
  textDecoration: "underline",
  cursor: "pointer",
  fontSize: "inherit",
  fontFamily: theme.typography.fontFamily,
  padding: 0,

  "&:hover": {
    color: palette.primary.dark,
  },
}));
