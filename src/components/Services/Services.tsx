"use client";
import React, { useState } from "react";
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
  ServiceButtonWrapper,
} from "./elements";
import { AppButton } from "@/components/Button/Button";
import { Heading } from "../Heading/Heading";
import { Modal } from "@/components/Modal/Modal";
import servicesData from "@/json/servicesitems.json";

interface ServiceSection {
  title?: string;
  list?: string[];
  paragraph?: string;
}

interface ServiceContent {
  intro: string;
  sections: ServiceSection[];
}

const defaultItems: ServiceItem[] = servicesData.items;

const renderServiceContent = (content: ServiceContent | undefined): React.ReactNode => {
  if (!content) return null;
  return (
    <>
      <p style={{ fontFamily: 'Inter' }}>{content.intro}</p>
      {content.sections.map((section: ServiceSection, index: number) => (
        <React.Fragment key={index}>
          {section.title && <h3 style={{ fontFamily: 'Inter' }}>{section.title}</h3>}
          {section.list && (
            <ul style={{ fontFamily: 'Inter' }}>
              {section.list.map((item: string, i: number) => (
                <li key={i} style={{ fontFamily: 'Inter' }}>{item}</li>
              ))}
            </ul>
          )}
          {section.paragraph && <p style={{ fontFamily: 'Inter' }}>{section.paragraph}</p>}
        </React.Fragment>
      ))}
    </>
  );
};

export function Services({
  title = "We offer payment plans for our Service Fees",
  ctaLabel = "VIEW ALL CATEGORIES",
  ctaHref = "/services_categories",
  items = defaultItems,
  hideHeader = false,
}: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const itemsToShow = hideHeader ? items : items.slice(0, 4);

  const handleReadMoreClick = (item: ServiceItem) => {
    setSelectedService(item);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <Section>
      <Container>
        {!hideHeader && (
          <HeaderRow>
            <Heading level={2} variant="section" maxWidth={560}>
              {title}
            </Heading>
            <ServiceButtonWrapper className="header-button">
              <AppButton 
                label={ctaLabel}
                href={ctaHref}
                size="large"
                withArrow
              />
            </ServiceButtonWrapper>
          </HeaderRow>
        )}

        <Grid>
          {itemsToShow.map((item) => (
            <Card
              key={item.id}
              href={item.href || "#"}
              onClick={(e) => {
                if (item.href === "#" || !item.href) {
                  e.preventDefault();
                }
              }}
            >
              <ThumbWrap>
                <Thumb src={item.imageSrc} alt={item.title} />
              </ThumbWrap>
              <CardBody>
                <CardTitle>{item.title}</CardTitle>
                <ButtonRow>
                  <ServiceButtonWrapper>
                    <AppButton
                      label="Read More"
                      size="medium"
                      withArrow
                      className="app-button"
                      onClick={() => handleReadMoreClick(item)}
                    />
                  </ServiceButtonWrapper>
                </ButtonRow>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </Container>

      {/* Modal */}
      {selectedService && (
        <Modal
          open={!!selectedService}
          onClose={handleCloseModal}
          title={selectedService.title}
          imageSrc={selectedService.imageSrc}
  
        >
          {renderServiceContent((servicesData.content as Record<string, ServiceContent>)[selectedService.id.toString()]) || (
            <p>
              For more information about this service, please contact our office
              to schedule a consultation with one of our experienced attorneys.
            </p>
          )}
        </Modal>
      )}
    </Section>
  );
}

export default Services;
