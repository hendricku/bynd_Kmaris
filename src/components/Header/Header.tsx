"use client";

import React, { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { HeaderProps, NavLink } from "./interface";
import Image from "next/image";
import Link from "next/link";

// Import all styled components
import {
  HeaderRoot,
  Bar,
  Nav,
  LinkItem,
  // AddressBar,
  RightSection,
  LogoWrap,
} from "./base";
import { MobileOnly, DesktopOnly } from "./responsive";
import {
  IconRow,
  IconButton,
  StyledSearchIcon,
  StyledCartIcon,
  StyledAccountIcon,
  CartBadge,
} from "./icons";
import {
  MobileDrawerOverlay,
  MobileDrawerPanel,
  DrawerCloseButton,
  MobileDrawerHeader,
  DrawerLogoSection,
  DrawerSubtitle,
  DrawerContent,
  DrawerNav,
  DrawerLink,
  DrawerFooter,
  DrawerIconSection,
  DrawerSectionTitle,
  DrawerDivider,
} from "./drawer";
import { ProfileMenu, DropdownContent, MenuItem } from "./menu";

// Import MUI Icons
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuIcon from "@mui/icons-material/Menu";

const defaultLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "All Services", href: "/All_forms" },
  { label: "News", href: "/News" },
];

export function Header({
  navLinks = defaultLinks,
  cartCount = 0,
  onSearchClick,
  onCartClick,
}: HeaderProps) {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDrawer = () => setDrawerOpen((v) => !v);
  const closeDrawer = () => setDrawerOpen(false);

  const userIcons = (
    <>
      <ProfileMenu ref={dropdownRef}>
        <IconButton onClick={() => setDropdownOpen((o) => !o)}>
          <StyledAccountIcon />
        </IconButton>
        <DropdownContent isOpen={dropdownOpen}>
          <MenuItem href="https://accesskmaris.vercel.app/" target="_blank">
            Sign In
          </MenuItem>
          <MenuItem href="https://accesskmaris.vercel.app/signup" target="_blank">
            Create Account
          </MenuItem>
        </DropdownContent>
      </ProfileMenu>
    </>
  );

  if (pathname?.startsWith("/admin") || pathname?.startsWith("/auth")) {
    return null;
  }

  return (
    <HeaderRoot>
      

      <Bar>
        <LogoWrap>
          <Link href="/" aria-label="KMARIS Home">
            <Image
              src="/Logo.png"
              alt="KMARIS Logo"
              width={200}
              height={60}
              priority
            />
          </Link>
        </LogoWrap>

        <RightSection>
          <DesktopOnly style={{ gap: "20px" }}>
            <Nav aria-label="Primary Navigation">
              {navLinks.map((item) => (
                <Link key={item.href} href={item.href}>
                  <LinkItem>{item.label}</LinkItem>
                </Link>
              ))}
            </Nav>
            <IconRow>
              <IconButton onClick={onSearchClick}>
                <StyledSearchIcon />
              </IconButton>
              {userIcons}
            </IconRow>
          </DesktopOnly>

          <MobileOnly>
            <IconButton onClick={onSearchClick}>
              <StyledSearchIcon />
            </IconButton>
            <IconButton aria-label="Menu" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          </MobileOnly>
        </RightSection>
      </Bar>

      <MobileDrawerOverlay open={drawerOpen} onClick={closeDrawer} />
      <MobileDrawerPanel open={drawerOpen}>
        <MobileDrawerHeader>
          <Image 
            src="/whitelogo.png" 
            alt="KMARIS Logo" 
            width={160} 
            height={48}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <DrawerCloseButton onClick={closeDrawer} aria-label="Close menu">
            <CloseRoundedIcon />
          </DrawerCloseButton>
        </MobileDrawerHeader>
        
        <DrawerContent>
          <DrawerNav>
            {navLinks.map((item) => (
              <Link key={`m-${item.href}`} href={item.href} passHref>
                <DrawerLink onClick={closeDrawer}>{item.label}</DrawerLink>
              </Link>
            ))}
          </DrawerNav>

          <DrawerFooter>
            <DrawerSectionTitle>Account</DrawerSectionTitle>
            <DrawerIconSection>
              <div>{userIcons}</div>
            </DrawerIconSection>
          </DrawerFooter>
        </DrawerContent>
      </MobileDrawerPanel>
    </HeaderRoot>
  );
}