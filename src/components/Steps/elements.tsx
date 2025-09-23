"use client";

import { styled } from "@mui/material/styles";
import { Box, Card, Typography, Button, TextField, FormControlLabel, Radio, Checkbox, Select } from "@mui/material";

// Main container
export const FormWrapper = styled(Box)(({ theme }) => ({
  maxWidth: '920px',
  margin: '40px auto',
  padding: theme.spacing(3),
  background: '#fff',
  borderRadius: '16px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.07)',
}));

export const FormCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: '16px',
  boxShadow: 'none',
  border: 'none',
}));

// Typography
export const FormTitle = styled(Typography)(({ theme }) => ({
  fontSize: '28px',
  fontWeight: theme.typography.fontWeightBold,
  margin: '0 0 8px 0',
  color: theme.palette.text.primary,
}));

export const FormSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginTop: 0,
  marginBottom: theme.spacing(2.5),
}));

export const StepTitle = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: theme.typography.fontWeightBold,
  margin: '0 0 12px 0',
  color: theme.palette.text.primary,
}));

export const GroupTitle = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.text.secondary,
  textTransform: 'uppercase',
  letterSpacing: '0.02em',
  margin: '4px 0',
}));

// Stepper
export const StepperContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  margin: `${theme.spacing(2.5)} 0 ${theme.spacing(3.5)} 0`,
}));

interface StepperDotProps {
  $active?: boolean;
}

export const StepperDot = styled(Box)<StepperDotProps>(({ theme, $active }) => ({
  flex: 1,
  height: '6px',
  background: '#e5e7eb',
  borderRadius: '999px',
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: $active ? 'linear-gradient(90deg, #DD1C23, #ff8a85)' : 'transparent',
  },
}));

// Layout
export const StepContainer = styled(Box)({
  display: 'block',
});

export const GridContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(2),
  gridTemplateColumns: '1fr',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },
}));

export const FullWidthContainer = styled(Box)({
  gridColumn: '1 / -1',
});

// Form elements
export const FieldsetContainer = styled(Box)(({ theme }) => ({
  border: '1px solid #e5e7eb',
  borderRadius: '12px',
  padding: theme.spacing(2),
  margin: 0,
}));

export const FieldsetLegend = styled(Typography)(({ theme }) => ({
  padding: '0 6px',
  color: theme.palette.text.secondary,
  fontSize: '14px',
  marginBottom: theme.spacing(1),
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
    height: '44px',
    '& fieldset': {
      borderColor: '#d1d5db',
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
      borderWidth: '1px',
    },
  },
  '& .MuiInputLabel-root': {
    fontWeight: 600,
  },
}));

export const StyledSelect = styled(Select)(({ theme }) => ({
  borderRadius: '10px',
  height: '44px',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#d1d5db',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main,
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main,
    borderWidth: '1px',
  },
}));

// Radio/Checkbox options
export const OptionsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
  marginTop: theme.spacing(0.5),
}));

export const ChipOption = styled(FormControlLabel)(({ theme }) => ({
  margin: 0,
  '& .MuiFormControlLabel-label': {
    fontSize: '14px',
  },
  '& .MuiButtonBase-root': {
    display: 'inline-flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    border: '1px solid #d1d5db',
    padding: '10px 12px',
    borderRadius: '999px',
    cursor: 'pointer',
    background: '#fff',
    minHeight: 'unset',
    '&:hover': {
      backgroundColor: '#f9fafb',
    },
  },
  '& .MuiRadio-root, & .MuiCheckbox-root': {
    padding: 0,
    marginRight: theme.spacing(1),
    '& .MuiSvgIcon-root': {
      fontSize: '18px',
    },
  },
}));

// Actions
export const ActionsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: theme.spacing(2.5),
}));

export const PrimaryButton = styled(Button)(({ theme }) => ({
  background: '#DD1C23',
  color: '#fff',
  textTransform: 'uppercase',
  fontSize: '12px',
  letterSpacing: '1px',
  fontWeight: 700,
  borderRadius: '12px',
  padding: '12px 16px',
  '&:hover': {
    background: '#bb151b',
  },
}));

export const SecondaryButton = styled(Button)(({ theme }) => ({
  background: 'rgba(17, 24, 39, 0.05)',
  color: '#111827',
  fontWeight: 700,
  borderRadius: '12px',
  padding: '12px 16px',
  '&:hover': {
    background: 'rgba(17, 24, 39, 0.1)',
  },
}));

// Summary
export const SummaryContainer = styled(Box)(({ theme }) => ({
  background: '#fff',
  border: '1px dashed #e5e7eb',
  borderRadius: '12px',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

export const SummaryItem = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  '&:last-child': {
    marginBottom: 0,
  },
  '& strong': {
    fontWeight: 600,
  },
}));

// Error states
export const ErrorBanner = styled(Box)(({ theme }) => ({
  background: '#fff5f5',
  border: '1px solid #DD1C23',
  color: '#DD1C23',
  padding: '10px 12px',
  borderRadius: '10px',
  margin: '8px 0 12px',
  fontSize: '14px',
}));

export const ErrorMessage = styled(Typography)(({ theme }) => ({
  color: '#DD1C23',
  fontSize: '12px',
  marginTop: theme.spacing(0.5),
}));

export const HintText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '12px',
  marginTop: theme.spacing(0.5),
}));