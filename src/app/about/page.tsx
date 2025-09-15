import React from 'react';
import { HeroSection, HeroInner, HeroImageWrap, BgImage, Overlay, Content, ContentBox, Title, Description } from '@/components/Hero/elements';
import { Footer } from '@/components/Footer/Footer';

export default function AboutPage() {
  return (
    <>
      <HeroSection>
        <HeroInner>
          <HeroImageWrap>
            <BgImage src="/image.webp" />
            <Overlay />
            <Content>
              <ContentBox>
                <Title>About Us</Title>
                <Description>
                  Our About Us page is currently under construction. We&apos;re working hard to bring you an amazing experience. Stay tuned!
                </Description>
                <div style={{ marginTop: '24px', fontSize: '1.2rem', animation: 'pulse 2s infinite' }}>
                  🚧 Coming Soon 🚧
                </div>
              </ContentBox>
            </Content>
          </HeroImageWrap>
        </HeroInner>
      </HeroSection>
      <Footer />
    </>
  );
}
