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
  Title,
  Description,
} from "./elements";
import { AppButton } from "../Button/Button";

export function Hero({
  title,
  description,
  ctaLabel,
  ctaHref = "#",
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
                <Description
                  style={{ fontWeight: "bold", marginBottom: "1rem" }}
                >
                  Hello, {userName} 👋
                </Description>
              )}

              <Description>{description}</Description>

              <AppButton
                label={ctaLabel}
                href={ctaHref}
                className="btn-shine"
              />
            </ContentBox>
          </Content>
        </HeroImageWrap>
      </HeroInner>
    </HeroSection>
  );
}

export default Hero;
