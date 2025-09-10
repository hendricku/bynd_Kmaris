"use client";

import React from "react";
import { AppButton } from "@/components/Button/Button";
import { OfferingProps } from "./interface";
import { 
  Section, 
  Container, 
  Grid, 
  Image, 
  Content, 
  Description, 
  ButtonWrapper 
} from "./elements";
import { Heading } from "@/components/Heading/Heading";

// Default content for the component
const defaultProps: Required<Omit<OfferingProps, 'imageSrc'>> = {
  title: "Company offering all visa & Immigration Services",
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit, pretium sapien mattis nulla litora proin purus varius, pulvinar diam netus volutpat morbi magnis. Porta semper potenti faucibus blandit torquent ad vehicula sociis integer, feugiat aptent netus gravida enim neque posuere penatibus, sed imperdiet maecenas venenatis scelerisque consequat tempus mauris.",
  ctaLabel: "Learn More",
  ctaHref: "#",
};

export function Offering({
  imageSrc = "/offering.webp",
  title = defaultProps.title,
  description = defaultProps.description,
  ctaLabel = defaultProps.ctaLabel,
  ctaHref = defaultProps.ctaHref 
}: OfferingProps) {
  return (
    <Section>
      <Container>
        <Grid>
          <Image src={imageSrc} alt={title} />
          <Content>
        
            <Heading level={2} variant="section" align="left" marginBottom={16}>
              {title}
            </Heading>
            <Description>{description}</Description>
            <ButtonWrapper>
   
              <AppButton 
                label={ctaLabel} 
                href={ctaHref} 
                size="large"
                withArrow
              />
            </ButtonWrapper>
          </Content>
        </Grid>
      </Container>
    </Section>
  );
}

export default Offering;