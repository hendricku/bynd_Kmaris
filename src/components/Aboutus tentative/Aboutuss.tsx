"use client";

import React from "react";
import { HeroProps } from "./interface";
import {
  HeroSection,
  HeroInner,
  HeroImageWrap,
  Overlay,
  Content,
  ContentBox,
  Title,
  Description,
} from "./elements";
import { AppButton } from "../Button/Button";

export function Hero({
  title = "About Us",
  description = " Lorem ipsum dolor sit amet consectetur adipiscing elit, pretiumsapien mattis nulla litora proin purus varius, pulvinar diam netusvolutpat morbi magnis. Porta semper potenti faucibus blandittorquent ad vehicula sociis integer, feugiat aptent netus gravida enim neque posuere penatibus, sed imperdiet maecenas venenatis scelerisque consequat purus mauris.",
  ctaLabel = "LEARN MORE",
  ctaHref = "#",
  backgroundSrc = "/Herologo.webp",
  userName,
}: HeroProps) {
  return (
    <HeroSection>
      <HeroInner style={{
        background: backgroundSrc ? `url(${backgroundSrc})` : undefined,
        backgroundColor: backgroundSrc ? undefined : undefined,
        backgroundSize: backgroundSrc ? "cover" : undefined,
        backgroundPosition: backgroundSrc ? "center" : undefined,
      }}>
        <HeroImageWrap>
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
