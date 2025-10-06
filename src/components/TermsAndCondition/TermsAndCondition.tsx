import React from 'react';
import {
  StyledContainer,
  Title,
  IntroText,
  SectionTitle,
  Paragraph,
  StyledList,
  ContactInfo,
  FooterText,
} from './elements';

const TermsAndCondition: React.FC = () => {
  return (
    <StyledContainer>
      <Title>Terms and Conditions</Title>

      <IntroText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </IntroText>

      <SectionTitle>Acceptance of Terms</SectionTitle>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </Paragraph>

   
      <SectionTitle>Prohibited Activities</SectionTitle>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Paragraph>
      <StyledList>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
        <li>Sed do eiusmod tempor incididunt</li>
        <li>Ut labore et dolore magna aliqua</li>
      </StyledList>

      <SectionTitle>Intellectual Property</SectionTitle>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Paragraph>
      <StyledList>
        <li><strong>Lorem ipsum:</strong> Dolor sit amet consectetur</li>
        <li><strong>Adipiscing elit:</strong> Sed do eiusmod tempor</li>
        <li><strong>Incididunt ut:</strong> Labore et dolore magna</li>
        <li><strong>Aliqua ut enim:</strong> Ad minim veniam quis</li>
      </StyledList>

   
      <ContactInfo>
        <SectionTitle>Contact Information</SectionTitle>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Paragraph>
        <Paragraph>
          <strong>KMARIS IMMIGRATION LLC SERVICES</strong><br />
          Email: kmaristx@gmail.com <br />
          Address: 5900 Balcones Dr Ste 100, Austin, TX 78731
        </Paragraph>
      </ContactInfo>

      <FooterText>
       Last Updated: October 2025
      </FooterText>
    </StyledContainer>
  );
};

export default TermsAndCondition;
