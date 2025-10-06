"use client";

import React, { useState } from "react";
import { FooterProps, SocialLink, LinkGroup, NavLink } from "./interface";


import { FooterRoot, Top, Bottom, BottomInner, BottomLinks } from "./base";
import { Brand, Logo, Divider, Address, Socials, SocialLinkItem } from "./brand";
import { Group, GroupTitle, LinkList, LinkItem } from "./navigation";
import { Newsletter, NewsletterDescription, NewsletterForm, NewsletterInput, NewsletterButton } from "./newsletter";


import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircularProgress from "@mui/material/CircularProgress";

const defaultSocials: SocialLink[] = [
  { icon: <FacebookIcon />, href: "#", name: "Facebook" },
  { icon: <InstagramIcon />, href: "#", name: "Instagram" },
  { icon: <TwitterIcon />, href: "#", name: "Twitter" },
  { icon: <LinkedInIcon />, href: "#", name: "LinkedIn" },
];

const defaultGroups: LinkGroup[] = [ 
  {
    title: "Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "All Services", href: "/AllForms" },
      { label: "News", href: "/News" },
    ],
  },
];

const defaultBottomLinks: NavLink[] = [
    { label: "Terms Of Use", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy-policy" },
];


// --- Main Footer Component ---
export function Footer({
  logoSrc = "/Logo.png",
  addressLines = ["5900 Balcones Dr Ste 100", "Austin, TX 78731"],
  socials = defaultSocials,
  groups = defaultGroups,
  newsletter = {
    title: "Inquiry",
    description: "Enter your details for a free consultation",
    placeholder: "Email Address",
  },
  bottomNote = <>Designed & Developed by <a href="http://bynddigital.co/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>BYND Digital</a></>,
  bottomLinks = defaultBottomLinks,
}: FooterProps) {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email }),
      });
      
      if (response.ok) {
        setShowSuccess(true);
        setFirstName('');
        setLastName('');
        setEmail('');
        
        // Hide success message after 3 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    
    <FooterRoot>
       <Divider
        sx={{
          width: "auto",
          opacity: 0.1,
          margin: "0 auto",
          maxWidth: 1440,
          marginTop: 0,
       
        }}
      />
      <Top>
        <Brand>
          <Logo src={logoSrc} alt="KMARIS Logo" />
          <Divider />
          <Address>
            {addressLines.map((line, i) => <div key={i}>{line}</div>)}
          </Address>
          <Socials>
            {socials.map((social) => (
              <SocialLinkItem key={social.name} href={social.href} aria-label={`Follow us on ${social.name}`}>
                {social.icon}
              </SocialLinkItem>
            ))}
          </Socials>
        </Brand>

        {groups.map((group) => (
          <Group key={group.title}>
            <GroupTitle>{group.title}</GroupTitle>
            <LinkList>
              {group.links.map((link) => (
                <li key={link.label}>
                  <LinkItem href={link.href}>{link.label}</LinkItem>
                </li>
              ))}
            </LinkList>
          </Group>
        ))}
       
        <Newsletter>
          <GroupTitle>{newsletter.title}</GroupTitle>
          <NewsletterDescription>{newsletter.description}</NewsletterDescription>
          
          {showSuccess && (
            <div style={{
              padding: '12px 16px',
              background: '#4caf50',
              color: 'white',
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              fontSize: 15,
              fontWeight: 500,
              animation: 'slideIn 0.3s ease-out'
            }}>
              <CheckCircleIcon sx={{ fontSize: 20 }} />
              <span>Message sent successfully!</span>
            </div>
          )}
          
          <NewsletterForm onSubmit={handleSubmit}>
            <div className="name-inputs">
              <NewsletterInput
                placeholder="First name"
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                disabled={isLoading}
              />
              <NewsletterInput
                placeholder="Last name"
                type="text"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="email-row">
              <NewsletterInput
                placeholder={newsletter.placeholder}
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="email-input"
                disabled={isLoading}
              />
              <NewsletterButton type="submit" aria-label="Subscribe" disabled={isLoading}>
                {isLoading ? (
                  <CircularProgress size={20} sx={{ color: 'white' }} />
                ) : (
                  <SendIcon sx={{ fontSize: 20 }} />
                )}
              </NewsletterButton>
            </div>
          </NewsletterForm>
        </Newsletter>
      </Top>

      <Divider
        sx={{
          width: "auto",
          opacity: 0.1,
          margin: "0 auto",
          maxWidth: 1440,
          marginTop: 0,
       
        }}
      />

      <Bottom>
        <BottomInner>
          <div>{bottomNote}</div>
          <BottomLinks>
            {bottomLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </BottomLinks>
        </BottomInner>
      </Bottom>
    </FooterRoot>
  );
}

export default Footer;