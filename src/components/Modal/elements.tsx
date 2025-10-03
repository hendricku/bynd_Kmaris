import React, { useState } from 'react';
import { styled } from '@mui/material/styles';

export const Overlay = styled('div')<{ open: boolean }>(({ open }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  display: open ? 'flex' : 'none',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
  padding: '16px',
  backdropFilter: 'blur(4px)',
  animation: open ? 'fadeIn 0.3s ease-out' : 'fadeOut 0.3s ease-out',
  '@keyframes fadeIn': {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
  '@keyframes fadeOut': {
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
  },
}));

export const ModalContainer = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isClosing',
})<{ isClosing?: boolean }>(({ theme, isClosing }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: '12px',
  maxWidth: '800px',
  width: '100%',
  maxHeight: '90vh',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
  border: `1px solid rgba(0, 0, 0, 0.08)`,
  position: 'relative',
  animation: isClosing ? 'modalOut 0.3s ease-out forwards' : 'modalIn 0.3s ease-out',
  '@keyframes modalIn': {
    from: {
      opacity: 0,
      transform: 'scale(0.9) translateY(20px)',
    },
    to: {
      opacity: 1,
      transform: 'scale(1) translateY(0)',
    },
  },
  '@keyframes modalOut': {
    from: {
      opacity: 1,
      transform: 'scale(1) translateY(0)',
    },
    to: {
      opacity: 0,
      transform: 'scale(0.9) translateY(20px)',
    },
  },
}));

export const ModalHeader = styled('div')(({ theme }) => ({
  padding: '24px 32px',
  borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.common.white,
}));

export const ModalTitle = styled('h2')(({ theme }) => ({
  fontFamily: 'var(--font-inter)',
  color: theme.palette.text.primary,
  fontSize: '24px',
  lineHeight: 1.3,
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: 0.4,
  margin: 0,
  paddingRight: '16px',
}));

export const CloseButton = styled('button')(({ theme }) => ({
  background: 'none',
  border: 'none',
  fontSize: '28px',
  cursor: 'pointer',
  color: theme.palette.text.secondary,
  padding: '4px 8px',
  lineHeight: 1,
  transition: 'color 0.2s ease',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

export const ModalBody = styled('div')({
  padding: '32px',
  overflowY: 'auto',
  flex: 1,
  scrollbarWidth: 'thin',
  scrollbarColor: '#888 #f1f1f1',
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: '#f1f1f1',
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#888',
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#555',
  },
});

export const ModalImage = styled('img')({
  width: '100%',
  height: '300px',
  objectFit: 'cover',
  marginBottom: '24px',
});

export const ModalContent = styled('div')(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '16px',
  lineHeight: 1.6,
  '& p': {
    marginBottom: '16px',
  },
  '& h3': {
    fontSize: '20px',
    fontWeight: 600,
    marginTop: '24px',
    marginBottom: '12px',
    textTransform: 'uppercase',
    letterSpacing: 0.3,
  },
  '& ul': {
    paddingLeft: '24px',
    marginBottom: '16px',
  },
  '& li': {
    marginBottom: '8px',
  },
}));