import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { styled } from "@mui/material/styles";
import { palette } from "@/theme/palette";

// Terms and Conditions Modal Components
export const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: "24px",
    maxWidth: "900px",
    width: "95%",
    maxHeight: "90vh",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
}));

export const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  fontSize: "32px",
  fontWeight: 700,
  letterSpacing: "-0.025em",
  color: palette.text.dark,
  padding: theme.spacing(5, 6, 3, 6),
  borderBottom: `1px solid ${theme.palette.grey[200]}`,
  lineHeight: 1.2,
}));

export const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  padding: theme.spacing(6),
  fontSize: "16px",
  lineHeight: 1.75,
  color: palette.text.primary,
  maxHeight: "65vh",
  overflowY: "auto",
  
  // Custom scrollbar
  "&::-webkit-scrollbar": {
    width: "6px",
  },
  "&::-webkit-scrollbar-track": {
    background: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "rgba(0, 0, 0, 0.15)",
    borderRadius: "3px",
    "&:hover": {
      background: "rgba(0, 0, 0, 0.25)",
    },
  },
  
  "& h3": {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSize: "22px",
    fontWeight: 500,
    color: palette.text.dark,
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(2.5),
    letterSpacing: "-0.015em",
    lineHeight: 1.3,
    "&:first-of-type": {
      marginTop: 0,
    },
  },
  
  "& p": {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    marginBottom: theme.spacing(3),
    fontSize: "16px",
    lineHeight: 1.75,
    color: palette.text.primary,
    fontWeight: 400,
  },
  
  "& ul": {
    paddingLeft: theme.spacing(3),
    marginBottom: theme.spacing(3),
    listStyleType: "disc",
  },
  
  "& li": {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    marginBottom: theme.spacing(1.5),
    fontSize: "16px",
    lineHeight: 1.65,
    color: palette.text.primary,
  },
}));

export const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
  padding: theme.spacing(3, 6, 5, 6),
  borderTop: `1px solid ${theme.palette.grey[200]}`,
  gap: theme.spacing(2),
  justifyContent: "flex-end",
}));

export const StyledPrimaryButton = styled("button")({
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  padding: "14px 32px",
  fontSize: "15px",
  fontWeight: 500,
  color: palette.common.white,
  backgroundColor: palette.primary.main,
  border: "none",
  borderRadius: "12px",
  cursor: "pointer",
  transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
  textTransform: "none",
  letterSpacing: "-0.01em",
  outline: "none",
  "&:hover": {
    backgroundColor: palette.primary.dark,
    transform: "translateY(-1px)",
    boxShadow: "0 8px 25px rgba(37, 99, 235, 0.4)",
  },
  "&:active": {
    transform: "translateY(0)",
  },
  "&:focus-visible": {
    boxShadow: "0 0 0 3px rgba(37, 99, 235, 0.3)",
  },
  "&:disabled": { 
    backgroundColor: palette.primary.light,
    cursor: "not-allowed",
    transform: "none",
  },
});

export const StyledSecondaryButton = styled("button")(({ theme }) => ({
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  padding: "14px 32px",
  fontSize: "15px",
  fontWeight: 500,
  color: palette.text.dark,
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: "12px",
  cursor: "pointer",
  transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
  textTransform: "none",
  letterSpacing: "-0.01em",
  outline: "none",
  "&:hover": {
    borderColor: palette.primary.main,
    backgroundColor: "rgba(37, 99, 235, 0.04)",
    color: palette.primary.main,
    transform: "translateY(-1px)",
  },
  "&:active": {
    transform: "translateY(0)",
  },
  "&:focus-visible": {
    boxShadow: "0 0 0 3px rgba(37, 99, 235, 0.3)",
  },
}));