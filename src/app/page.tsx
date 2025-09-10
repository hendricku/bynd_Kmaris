"use client";

import React from "react";
import { styled } from "@mui/material/styles";

// 1. Import all the page sections you need for the homepage
import { Hero } from "@/components/Hero/Hero";
import { Services } from "@/components/Services/Services";
import { Offering } from "@/components/Offering/Offering";
import { Feedback } from "@/components/Feedback/Feedback";
import { Footer } from "@/components/Footer/Footer";

// 2. Define the main page wrapper
const PageWrapper = styled("main")({
  animation: 'fadeIn 0.8s ease-out',
  '@keyframes fadeIn': {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  },
});

// 3. Assemble the page
export default function Home() {
  return (
    <PageWrapper>
      <Hero 
        title="IMMIGRATION FORMS EXPERT"
        description="We Specialized In Family-Based Immigration, Adjustment Of Status, Consular Processing, Asylum/Refugee Application/Petition, Non-ImImmigrant Visa, VAWA, & Other Services."
        ctaLabel="LEARN MORE"
      />

      <Services />

      <Offering />

      <Feedback />

      <Footer />
      
    </PageWrapper>
  );
}