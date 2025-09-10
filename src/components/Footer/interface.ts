import React from 'react';

export interface SocialLink {
  icon: React.ReactNode;
  href: string;
  name: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface LinkGroup {
  title: string;
  links: NavLink[];
}

export interface NewsletterData {
  title: string;
  description: string;
  placeholder: string;
}


export interface FooterProps {
  logoSrc?: string;
  addressLines?: string[];
  socials?: SocialLink[];
  groups?: LinkGroup[];
  newsletter?: NewsletterData;
  bottomNote?: React.ReactNode;
  bottomLinks?: NavLink[];
}