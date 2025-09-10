"use client";

import React from "react";
import styled from "@emotion/styled";
import Footer from "@/components/Footer/Footer";

interface ClientServicesLayoutProps {
  children: React.ReactNode;
}

const LayoutWrapper = styled.div`
  & header:first-of-type {
    display: none !important;
  }
`;

export default function ClientServicesLayout({ children }: ClientServicesLayoutProps) {
  return (
    <LayoutWrapper>
      {children}
      <Footer />
    </LayoutWrapper>
  );
}