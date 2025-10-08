import React from "react";
import { Services } from "@/components/Services/Services";
import { Section, Container, HeaderRowServices } from "@/components/Services/elements";
import { Heading } from "@/components/Heading/Heading";
import servicesData from "@/json/servicesitems.json";

const allServiceItems = servicesData.items;

export default function ServicesCategories() {
  return (
    <main className="animate-fade-in">
   
      <Section style={{ paddingTop: '60px', paddingBottom: 0 }}>
        <Container>
          <HeaderRowServices className="animate-fade-in-up">
            <Heading level={2} variant="section" maxWidth={560}>
              All Categories
            </Heading>
          </HeaderRowServices>
        </Container>
      </Section>
      <Services 
        items={allServiceItems}
        hideHeader={true}
      />
    </main>
  );
}