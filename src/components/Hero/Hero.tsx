"use client";

import React from "react";
import { HeroProps } from "./interface";
import {
  HeroSection,
  HeroBackground,
  HeroInner,
  HeroImageWrap,
  Overlay,
  ContentContainer,
  Content,
  ContentBox,
  Title,
  Description,
} from "./elements";
import { AppButton } from "../Button/Button";

export function Hero({
  title = "IMMIGRATION FORMS EXPERT",
  description = "We Specialized In Family-Based Immigration, Adjustment Of Status, Consular Processing, Asylum/Refugee Application/Petition, Non-ImImmigrant Visa, VAWA, & Other Services.",
  ctaLabel = "LEARN MORE",
  ctaHref = "/All_forms",
  backgroundSrc = "/Herologo.webp",
  userName,
}: HeroProps) {
  return (
    <HeroSection>
      <HeroBackground style={{
        background: backgroundSrc ? `url(${backgroundSrc})` : undefined,
        backgroundColor: backgroundSrc ? undefined : undefined,
        backgroundSize: backgroundSrc ? "cover" : undefined,
        backgroundPosition: backgroundSrc ? "center" : undefined,
      }}>
        <Overlay />
      </HeroBackground>
      <HeroInner>
        <HeroImageWrap>
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
