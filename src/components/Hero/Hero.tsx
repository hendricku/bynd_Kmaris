"use client";

import React from "react";
import { HeroProps } from "./interface";
import {
  HeroSection,
  HeroInner,
  HeroImageWrap,
  BgImage,
  Overlay,
  Content,
  ContentBox,
  Title, // Import the updated Title
  Description,
} from "./elements";
import { AppButton } from "../Button/Button";

// We now use the more robust HeroProps interface
export function Hero({
  title, // Required props are listed first
  description,
  ctaLabel,
  ctaHref = "#", // Default values for optional props
  backgroundSrc = "/Herologo.webp",
  userName,
}: HeroProps) {
  return (
    <HeroSection>
      <HeroInner>
        <HeroImageWrap>
          <BgImage src={backgroundSrc} />
          <Overlay />
          <Content>
            <ContentBox className="animate-fade-in-up">
              <Title>{title}</Title>

              {userName && (
                <Description style={{ fontWeight: "bold", marginBottom: "1rem" }}>
                  Hello, {userName} 👋
                </Description>
              )}

              <Description>{description}</Description>

              <AppButton label={ctaLabel} href={ctaHref} className="btn-shine" />

            </ContentBox>
          </Content>
        </HeroImageWrap>
      </HeroInner>
    </HeroSection>
  );
}

export default Hero;