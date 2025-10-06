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

const Privacy_Policy: React.FC = () => {
  return (
    <StyledContainer>
      <Title>Privacy Policy</Title>

      <IntroText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </IntroText>
 
      <StyledList>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
        <li>Sed do eiusmod tempor incididunt</li>
        <li>Ut labore et dolore magna aliqua</li>
      </StyledList>

      <SectionTitle>Ut Enim Ad Minim</SectionTitle>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Paragraph>
      <StyledList>
        <li><strong>Lorem ipsum:</strong> Dolor sit amet consectetur</li>
        <li><strong>Adipiscing elit:</strong> Sed do eiusmod tempor</li>
        <li><strong>Incididunt ut:</strong> Labore et dolore magna</li>
        <li><strong>Aliqua ut enim:</strong> Ad minim veniam quis</li>
      </StyledList>

      <SectionTitle>Nostrud Exercitation</SectionTitle>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Paragraph>

    
      <ContactInfo>
        <SectionTitle>Consequat Duis Aute</SectionTitle>
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
export default Privacy_Policy;
