"use client";

import React from "react";
import { FeedbackProps, FeedbackItem } from "./interface";
import {
  Section,
  Container,
  Grid,
  Card,
  CardInner,
  Avatar,
  Text,
  Name,
  Role,
  Subheading,
  StarsRow,
  MetaCol,
} from "./elements";
import { Heading } from "@/components/Heading/Heading";

const defaultItems: FeedbackItem[] = [
  {
    id: 1,
    name: "KUMAN TUNMAN",
    role: "LOREM IPSUM",
    avatarSrc: "/blackk.webp",
    rating: 5,
    text:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
  },
  {
    id: 2,
    name: "MADISON OLIVIA",
    role: "LOREM IPSUM",
    avatarSrc: "/red.webp",
    rating: 4,
    text:
      "sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
];

export function Feedback({ items = defaultItems }: FeedbackProps) {
  return (
    <Section>
      <Container>
        <Subheading>CUSTOMER FEEDBACKS</Subheading>
        <Heading level={2} variant="section" color="white" align="center" marginBottom={56}>
          SEE WHAT OUR CLIENTS HAVE TO SAY
        </Heading>
        <Grid>
          {items.map((item) => (
            <Card key={item.id}>
              <CardInner>
              
                <Avatar src={item.avatarSrc} alt={item.name} />
                <Text>"{item.text}"</Text>
                <MetaCol>
                  <StarsRow aria-label={`Rating ${item.rating ?? 0} out of 5`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>{i < (item.rating ?? 0) ? "★" : "☆"}</span>
                    ))}
                  </StarsRow>
                  <Name>{item.name}</Name>
                  {item.role && <Role>{item.role}</Role>}
                </MetaCol>
              </CardInner>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default Feedback;