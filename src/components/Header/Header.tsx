"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { usePathname, useRouter } from 'next/navigation';
import { HeaderProps, NavLink } from "./interface";
import Image from "next/image";
import Link from "next/link";

// These imports will work once the filenames in your folder are correct
import { HeaderRoot, Bar, Nav, LogoWrap, LinkItem, AddressBar, RightSection } from "./base";
import { MobileOnly, DesktopOnly } from "./responsive";
import { IconRow, IconButton, StyledSearchIcon, StyledCartIcon, StyledAccountIcon, CartBadge } from './icons';
import { MobileDrawerOverlay, MobileDrawerPanel, DrawerCloseButton, MobileDrawerHeader, DrawerNav, DrawerLink } from './drawer';
import { ProfileMenu, DropdownContent, MenuItem } from './menu';

// Import MUI Icons
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuIcon from "@mui/icons-material/Menu";

const defaultLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#" },
  { label: "All Forms", href: "/All_forms" },
  { label: "Filling Services", href: "#" },
  { label: "Immigration News", href: "#" },
  { label: "Videos", href: "#" },
];

type UserInfo = { name: string; role: string; email: string };

export function Header({
  navLinks = defaultLinks,
  cartCount = 0,
  onSearchClick,
  onCartClick,
  onMenuClick,
}: HeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // ... All your authentication logic and other hooks remain here ...

  const toggleDrawer = () => setDrawerOpen(v => !v);
  const closeDrawer = () => setDrawerOpen(false);

  // --- Do not render on certain pages ---
  if (pathname?.startsWith('/auth') || pathname === '/Login' || pathname === '/signup' || pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <HeaderRoot>
      <AddressBar>
        <LocationOnRoundedIcon />
        <span>5900 Balcones Dr, Austin, Texas 78731, United States</span>
      </AddressBar>

      <Bar>
        <LogoWrap>
          <Link href="/" aria-label="KMARIS Home">
            <Image src="/Logo.png" alt="KMARIS Logo" width={120} height={64} priority />
          </Link>
        </LogoWrap>
        
        <RightSection>
          <DesktopOnly>
            <Nav aria-label="Primary Navigation">
              {navLinks.map((item: NavLink) => <LinkItem key={item.label} href={item.href}>{item.label}</LinkItem>)}
            </Nav>
          </DesktopOnly>
          
          <IconRow>
            <IconButton onClick={onSearchClick}><StyledSearchIcon /></IconButton>
            <IconButton onClick={onCartClick}>
              <StyledCartIcon />
              {/* THIS IS THE CORRECTED LINE */}
              {cartCount > 0 && <CartBadge>{cartCount}</CartBadge>}
            </IconButton>
           
            <ProfileMenu ref={dropdownRef}>
              <IconButton onClick={() => setDropdownOpen(o => !o)}><StyledAccountIcon /></IconButton>
              <DropdownContent isOpen={dropdownOpen}>
                {/* All your dropdown menu logic remains the same */}
              </DropdownContent>
            </ProfileMenu>
          </IconRow>

          <MobileOnly>
            <IconButton aria-label="Menu" onClick={toggleDrawer}>
              {drawerOpen ? <CloseRoundedIcon /> : <MenuIcon />}
            </IconButton>
          </MobileOnly>
        </RightSection>
      </Bar>

      <MobileDrawerOverlay open={drawerOpen} onClick={closeDrawer} />
      <MobileDrawerPanel open={drawerOpen}>
        <MobileDrawerHeader>
          <Image src="/whitelogo.png" alt="Logo" width={0} height={0}/>
          <DrawerCloseButton onClick={closeDrawer}><CloseRoundedIcon sx={{color: 'white'}}/></DrawerCloseButton>
        </MobileDrawerHeader>
        <DrawerNav>
          {navLinks.map((item: NavLink) => <DrawerLink key={`m-${item.label}`} href={item.href} onClick={closeDrawer}>{item.label}</DrawerLink>)}
        </DrawerNav>
      </MobileDrawerPanel>
    </HeaderRoot>
  );
}