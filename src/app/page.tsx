"use client";

import React from "react";
import { styled } from "@mui/material/styles";


import { Hero } from "@/components/Hero/Hero";
import { Services } from "@/components/Services/Services";
import { Offering } from "@/components/Offering/Offering";
import { Feedback } from "@/components/Feedback/Feedback";
import { Footer } from "@/components/Footer/Footer";


const PageWrapper = styled("main")({
  animation: "fadeIn 0.8s ease-out",
  "@keyframes fadeIn": {
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  },
});


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
