"use client";
import React from "react";
import { ServicesProps, ServiceItem } from "./interface";
import {
Section,
Container,
HeaderRow,
Grid,
Card,
ThumbWrap,
Thumb,
CardBody,
CardTitle,
ButtonRow,
ServiceButtonWrapper
} from "./elements";
import { AppButton } from "@/components/Button/Button";

import { Heading } from "../Heading/Heading"; 
const defaultItems: ServiceItem[] = [
{ id: 1, title: "FAMILY PETITION & ADJUSTMENT OF STATUS", imageSrc: "/petition.webp" },
{ id: 2, title: "VAWA – Violence Against Women’s Act", imageSrc: "/greencard.webp" },
{ id: 3, title: "ASYLUM/REFUGEE APPLICATION", imageSrc: "/asylum.webp" },
{ id: 4, title: "NATURALIZATION & CITIZENSHIP", imageSrc: "/conditions.webp" },
{ id: 5, title: "U-VISA", imageSrc: "/visa.webp" },
{ id: 6, title: "CHANGE OF STATUS TO F1 STUDENT", imageSrc: "/greencard.webp" },
{ id: 7, title: "RENEWAL OF WORK AUTHORIZATION", imageSrc: "/asylum.webp" },
{ id: 8, title: "RENEWAL OF GREEN CARD", imageSrc: "/conditions.webp" },
];
export function Services({
title = "We offer payment plans for our Service Fees",
ctaLabel = "VIEW ALL CATEGORIES",
ctaHref = "/services_categories",
items = defaultItems,
hideHeader = false
}: ServicesProps) { 

const itemsToShow = hideHeader ? items : items.slice(0, 4);
return (
<Section>
<Container>
{!hideHeader && (
<HeaderRow>
<Heading level={2} variant="section">{title}</Heading>
<AppButton label={ctaLabel} href={ctaHref} size="large" withArrow />
</HeaderRow>
)}
<Grid>
      {itemsToShow.map((item) => (
        <Card key={item.id} href={item.href || "#"}>
          <ThumbWrap>
            <Thumb src={item.imageSrc} alt={item.title} />
          </ThumbWrap>
          <CardBody>
            <CardTitle>{item.title}</CardTitle>
            <ButtonRow>
              <ServiceButtonWrapper>
                <AppButton 
                  label="READ MORE"
                  size="medium"
                  withArrow 
                  className="app-button" 
                />
              </ServiceButtonWrapper>
            </ButtonRow>
          </CardBody>
        </Card>
      ))}
    </Grid>
  </Container>
</Section>
);
}
export default Services;