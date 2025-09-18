"use client";

import React from "react";
import {
  Section,
  Container,
  TopSection,
  Image,
  TextContent,
  Title,
  Description,
  HowItWorksSection,
  HowItWorksContainer,
  HowItWorksTitle,
  StepsContainer,
  StepCard,
  StepIconPlaceholder,
  StepContent,
  StepTitle,
  StepDescription,
} from "./elements";
import { Step } from "./interface";
import { AppButton } from "../Button/Button";

const steps: Step[] = [
  {
    title: "Find the service you need",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, pretium sapien mattis nulla",
  },
  {
    title: "Register and get approved",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, pretium sapien mattis nulla",
  },
  {
    title: "Fill out important information",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, pretium sapien mattis nulla",
  },
  {
    title: "Sit back and relax",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, pretium sapien mattis nulla",
  },
];

const AboutUs: React.FC = () => {
  const handleLearnMore = () => {
 
    console.log("Learn More clicked - implement navigation here");
  };

  return (
    <Section>
      <Container>
        <TopSection>
          <Image
            src="/image3.webp"
            alt="Professional team collaborating in modern office environment"
            loading="lazy"
          />
          <TextContent>
            <Title>About Us</Title>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipiscing elit, pretium
              sapien mattis nulla litora proin purus varius, pulvinar diam netus
              volutpat morbi magnis. Porta semper potenti faucibus blandit
              torquent ad vehicula sociis integer, feugiat aptent netus gravida
              enim neque posuere penatibus, sed imperdiet maecenas venenatis
              scelerisque consequat purus mauris.
            </Description>
            <AppButton
              label="LEARN MORE"
              onClick={handleLearnMore}
              size="large"
              // variant="default"
            />
          </TextContent>
        </TopSection>

        <HowItWorksSection>
          <HowItWorksContainer>
            <HowItWorksTitle>How Does It Work?</HowItWorksTitle>

            <StepsContainer>
              {steps.map((step, index) => (
                <StepCard key={index}>
                  <StepIconPlaceholder>
                    Image Placeholder
                  </StepIconPlaceholder>
                  <StepContent>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                  </StepContent>
                </StepCard>
              ))}
            </StepsContainer>
          </HowItWorksContainer>
        </HowItWorksSection>
      </Container>
    </Section>
  );
};

export default AboutUs;