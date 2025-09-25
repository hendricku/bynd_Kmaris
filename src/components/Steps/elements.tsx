// --- START OF FILE: [steps]/elements.tsx ---
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
  padding: "20px",
  alignItems: "center",
  justifyContent: "center",
});

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
  background: "linear-gradient(135deg, rgba(15, 23, 42, 0.90) 0%, rgba(30, 41, 59, 0.85) 100%)",
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
  fontSize: "32px",
  fontWeight: 700,
  textAlign: "left",
  marginBottom: "20px",
  letterSpacing: "-0.025em",
  lineHeight: 1.2,
  fontFamily: theme.typography.fontFamily,
}));

export const PanelText = styled("p")(({ theme }) => ({
  fontSize: "15px",
  lineHeight: 1.6,
  marginBottom: "40px",
  opacity: 0.95,
  fontFamily: theme.typography.fontFamily,
}));

// --- Right Form Panel & Form Elements ---

export const FormRoot = styled("div")(({ theme }) => ({
  width: "100%",
  padding: "40px 30px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  backgroundColor: theme.palette.common.white,
  position: "relative",
  overflowY: 'auto',

  [theme.breakpoints.up("md")]: {
    width: "90%",
    padding: "40px 50px",
  },
}));

export const LogoContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginBottom: "-12px",
  cursor: "pointer",
  paddingBottom: "8px",
});

export const Title = styled("h1")(({ theme }) => ({
  fontSize: "28px",
  fontWeight: 700,
  color: palette.text.dark,
  textAlign: "center",
  marginBottom: "6px",
  marginTop: "20px",
  letterSpacing: "-0.025em",
  fontFamily: theme.typography.fontFamily,
}));

export const Subtitle = styled("p")(({ theme }) => ({
  fontSize: "15px",
  color: palette.text.primary,
  textAlign: "center",
  margin: "0 auto 32px",
  fontWeight: 400,
  maxWidth: '450px',
  fontFamily: theme.typography.fontFamily,
}));

// Stepper
export const StepperContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(4),
}));

interface StepperDotProps { $active?: boolean; }
export const StepperDot = styled(Box)<StepperDotProps>(({ theme, $active }) => ({
  flex: 1,
  height: '6px',
  backgroundColor: '#e2e8f0',
  borderRadius: '999px',
  transition: 'background-color 0.4s ease',
  ...($active && {
    backgroundColor: palette.primary.main,
  }),
}));

// Form Elements
export const StepContainer = styled(Box)({ display: "block" });
export const StepTitle = styled(Typography)({
  fontSize: '22px',
  fontWeight: 700,
  marginBottom: '24px',
  color: palette.text.dark,
});

export const GridContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(2.5),
  gridTemplateColumns: '1fr',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
}));

export const Label = styled("label")(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 600,
  color: palette.primary.main,
  letterSpacing: "0.025em",
  display: 'block',
  marginBottom: '8px',
  fontFamily: theme.typography.fontFamily,
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    backgroundColor: '#fafafa',
    '& input': { padding: '16px' },
    '& fieldset': { border: `1px solid ${theme.palette.divider}` },
    '&:hover fieldset': { borderColor: theme.palette.primary.main },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
      boxShadow: `0 0 0 3px rgba(0,37,66,0.08)`,
    },
  },
}));

export const StyledSelect = styled(Select)(({ theme }) => ({
  width: '100%',
  borderRadius: '12px',
  backgroundColor: '#fafafa',
  '& .MuiSelect-select': { padding: '16px' },
  '& .MuiOutlinedInput-notchedOutline': { border: `1px solid ${theme.palette.divider}` },
  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.main },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main,
    boxShadow: `0 0 0 3px rgba(0,37,66,0.08)`,
  },
}));

export const OptionsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1.5),
  marginTop: theme.spacing(1),
}));

export const ChipOption = styled(FormControlLabel)(({ theme }) => ({
  margin: 0,
  '& .MuiFormControlLabel-label': {
    fontSize: '14px',
    fontWeight: 500,
    padding: '0 8px 0 4px',
    color: palette.text.dark,
    fontFamily: theme.typography.fontFamily,
  },
  '& .MuiButtonBase-root': {
    border: `1px solid ${theme.palette.divider}`,
    padding: '10px 14px',
    borderRadius: '8px',
    transition: 'all 0.2s ease',
    '&:hover': {
      borderColor: palette.primary.light,
      backgroundColor: 'rgba(0, 37, 66, 0.04)',
    },
  },
  '& .Mui-checked': {
    borderColor: palette.primary.main,
    backgroundColor: 'rgba(0, 37, 66, 0.08)',
  },
  '& .MuiRadio-root, & .MuiCheckbox-root': {
    padding: 0,
    marginRight: theme.spacing(1),
  },
}));

export const ActionsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: theme.spacing(4),
  paddingTop: theme.spacing(3),
  borderTop: `1px solid ${theme.palette.divider}`,
}));

export const PrimaryButton = styled(Button)({
  padding: "14px 24px",
  fontSize: "15px",
  fontWeight: 600,
  color: palette.common.white,
  backgroundColor: palette.primary.main,
  border: "none",
  borderRadius: "12px",
  transition: "all 0.2s ease-in-out",
  textTransform: 'none',
  "&:hover": {
    backgroundColor: palette.primary.dark,
    transform: "translateY(-1px)",
  },
  "&:disabled": { backgroundColor: palette.primary.light },
});

export const SecondaryButton = styled(Button)(({ theme }) => ({
  padding: "14px 24px",
  fontSize: "15px",
  fontWeight: 600,
  color: palette.text.dark,
  backgroundColor: "rgba(0, 37, 66, 0.04)",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "12px",
  transition: "all 0.2s ease-in-out",
  textTransform: 'none',
  "&:hover": {
    borderColor: palette.primary.main,
    backgroundColor: "rgba(0, 37, 66, 0.08)",
  },
}));

// Other Components
export const SummaryContainer = styled(Box)(({ theme }) => ({
  background: 'rgba(0, 37, 66, 0.04)',
  borderLeft: `4px solid ${palette.primary.main}`,
  borderRadius: '8px',
  padding: theme.spacing(3),
  marginBottom: theme.spacing(2),
}));

export const SummaryItem = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(1.5),
  fontSize: '15px',
  '&:last-child': { marginBottom: 0 },
  '& strong': {
    fontWeight: 600,
    color: palette.text.dark,
    display: 'block',
    marginBottom: '4px'
  },
}));

export const ErrorBanner = styled(Box)(({ theme }) => ({
  background: '#fff5f5',
  border: `1px solid ${theme.palette.error.main}`,
  color: theme.palette.error.dark,
  padding: '12px 16px',
  borderRadius: '10px',
  margin: '0 0 24px 0',
  fontSize: '14px',
}));

export const HintText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '13px',
  marginTop: theme.spacing(0.75),
}));

export const GroupTitle = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.text.primary,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  margin: '24px 0 8px 0',
  '&:first-of-type': { marginTop: 0 }
}));