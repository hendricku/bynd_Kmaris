import React from "react";
import { Services } from "@/components/Services/Services";
import { Section, Container, HeaderRow } from "@/components/Services/elements";
import { Heading } from "@/components/Heading/Heading";

const allServiceItems = [
  { id: 1, title: "FAMILY PETITION & ADJUSTMENT OF STATUS", imageSrc: "/petition.webp" },
  { id: 2, title: "VAWA – Violence Against Women's Act", imageSrc: "/greencard.webp" },
  { id: 3, title: "ASYLUM/REFUGEE APPLICATION", imageSrc: "/asylum.webp" },
  { id: 4, title: "NATURALIZATION & CERTIFICATE OF CITIZENSHIP", imageSrc: "/conditions.webp" },
  { id: 5, title: "U-VISA", imageSrc: "/visa.webp" },
  { id: 6, title: "CHANGE OF STATUS FROM B1/B2 VISITOR TO F1 STUDENT", imageSrc: "/greencard.webp" },
  { id: 7, title: "RENEWAL OF WORK AUTHORIZATION", imageSrc: "/asylum.webp" },
  { id: 8, title: "RENEWAL OF GREEN CARD", imageSrc: "/conditions.webp" },
];

export default function ServicesCategories() {
  return (
    <main className="animate-fade-in">
      {/* 
        The paddingBottom has been changed to 0.
        This will remove the extra space below the "All Service Categories" title,
        moving it much closer to the cards.
      */}
      <Section style={{ paddingTop: '60px', paddingBottom: 1 }}>
        <Container>
          <HeaderRow className="animate-fade-in-up">
            <Heading level={2} variant="section" maxWidth={560}>
              All Service Categories
            </Heading>
          </HeaderRow>
        </Container>
      </Section>
      <Services 
        items={allServiceItems}
        hideHeader={true}
      />
    </main>
  );
}