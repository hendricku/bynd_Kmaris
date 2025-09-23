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
      <Hero />
      <Services />
      <Offering
        videoSrc="https://youtu.be/NuqlZ3NbbbU"
        videoThumbnail="/placeholder.png"
        youtubeChannelUrl="https://www.youtube.com/@kmaristv4568"
        autoPlay={false}
        muted={true}
        loop={true}
      />
      <Feedback />
      <Footer />
    </PageWrapper>
  );
}
