"use client";

import React from "react";
import {
  Section,
  Container,
  TopSection,
  Image,
  StepImage,
  MainTitle,
  TextContent,
  Title,
  Description,
  HowItWorksSection,
  HowItWorksContainer,
  HowItWorksTitle,
  StepsContainer,
  StepCard,
  StepIconPlaceholder,
  TextContent as StepContent,
  Title as StepTitle,
  Description as StepDescription,
} from "./elements";
import { Step } from "./interface";
import { AppButton } from "../Button/Button";

const steps: Step[] = [
  {
    title: "Find the service you need",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, pretium sapien mattis nulla",
    icon: "/9.png",
  },
  {
    title: "Register and get approved",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, pretium sapien mattis nulla",
    icon: "/10.png",
  },
  {
    title: "Fill out important information",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, pretium sapien mattis nulla",
    icon: "/11.png",
  },
  {
    title: "Sit back and relax",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, pretium sapien mattis nulla",
    icon: "/12.png",
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
          />
          <TextContent>
            <MainTitle>About Us</MainTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipiscing elit, pretium
              sapien mattis nulla litora proin purus varius, pulvinar diam netus
              volutpat morbi magnis. Porta semper potenti faucibus blandit
              torquent ad vehicula sociis integer, feugiat aptent netus gravida
              enim neque posuere penatibus, sed imperdiet maecenas venenatis
              scelerisque consequat purus mauris.
            </Description>
            {/* <AppButton
              label="LEARN MORE"
              onClick={handleLearnMore}
              size="large" 
             variant="default"
              {/* widthPercent={50}
            /> */}
          </TextContent>
        </TopSection>

        <HowItWorksSection>
          <HowItWorksContainer>
            <HowItWorksTitle>How Does It Work?</HowItWorksTitle>

            <StepsContainer>
              {steps.map((step, index) => (
                <StepCard key={index}>
                  <StepIconPlaceholder>
                    <img
                      src={step.icon || "/image.webp"}
                      alt={step.title}
                      style={{
                        width: "100%",
                        height: "165px",
                        borderRadius: 8,
                        objectFit: "cover",
                      }}
                    />
                  </StepIconPlaceholder>
                  <StepContent>
                    <Title>{step.title}</Title>
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