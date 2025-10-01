"use client";

import React from "react";
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
    { label: "Privacy Policy", href: "/privacy" },
];


// --- Main Footer Component ---
export function Footer({
  logoSrc = "/Logo.png",
  addressLines = ["5900 Balcones Dr Ste 100", "Austin, TX 78731"], 
  socials = defaultSocials,
  groups = defaultGroups,
  newsletter = {
    title: "Inquiry",
    description: "Enter your email & full name for a free consultation",
    placeholder: "Email Address",
  },
  bottomNote = <>Designed & Developed by <a href="http://bynddigital.co/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>BYND Digital</a></>,
  bottomLinks = defaultBottomLinks,
}: FooterProps) {
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
          <NewsletterForm onSubmit={(e) => e.preventDefault()}>
            <NewsletterInput placeholder={newsletter.placeholder} type="email" required />
            <NewsletterButton type="submit" aria-label="Subscribe">
              <SendIcon sx={{ fontSize: 20 }}/>
            </NewsletterButton>
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