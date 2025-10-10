"use client";

import { styled } from "@mui/material/styles";
import { Box, Container, Typography } from '@mui/material';

export const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(6, 4),
  maxWidth: 1440,
  margin: '0 auto',
  fontFamily: theme.typography.fontFamily,
}));


export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '4rem',
  fontWeight: 700,
  marginBottom: theme.spacing(4),
  color: '#0d3b4d',
  letterSpacing: '-1px',
  lineHeight: 1.2,
  fontFamily: theme.typography.fontFamily,
  [theme.breakpoints.down('md')]: {
    fontSize: '3rem',
  },
}));

export const IntroText = styled(Typography)(({ theme }) => ({
  fontSize: '1.125rem',
  lineHeight: 1.8,
  marginBottom: theme.spacing(6),
  color: '#6b8a95',
  maxWidth: '100%',
  fontFamily: theme.typography.fontFamily,
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.75rem',
  fontWeight: 700,
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(3),
  color: '#0d3b4d',
  lineHeight: 1.3,
  fontFamily: theme.typography.fontFamily,
}));

export const Paragraph = styled(Typography)(({ theme }) => ({
  fontSize: '1.125rem',
  lineHeight: 1.8,
  marginBottom: theme.spacing(3),
  color: '#6b8a95',
  fontFamily: theme.typography.fontFamily,
}));

export const StyledList = styled('ul')(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(3),
  paddingLeft: theme.spacing(4),
  fontFamily: theme.typography.fontFamily,
  '& li': {
    fontSize: '1.125rem',
    lineHeight: 1.8,
    marginBottom: theme.spacing(1.5),
    color: '#6b8a95',
  },
}));

export const ContactInfo = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  fontFamily: theme.typography.fontFamily,
}));

export const FooterText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(8),
  paddingTop: theme.spacing(4),
  fontSize: '0.875rem',
  color: '#8fa9b3',
  fontFamily: theme.typography.fontFamily,
}));
