"use client";
import { styled } from "@mui/material/styles";
export const Brand = styled("div")({
display: "flex",
flexDirection: "column",
gap: 24,
});
export const Logo = styled("img")({
height: 60,
width: "auto",
alignSelf: "flex-start",
marginTop: "-2rem",
marginLeft: "1rem",
});
export const Address = styled("div")({
fontSize: 15,
lineHeight: 1.7,
opacity: 0.9,
});
export const Divider = styled("hr")(({ theme }) => ({
border: 0,
height: 1,
backgroundColor: theme.palette.navy.main,
opacity: 0.1,
width: "80%",
margin: "0",
}));
export const Socials = styled("div")({
display: "flex",
gap: 12,
});
export const SocialLinkItem = styled("a")(({ theme }) => ({
color: theme.palette.navy.main,
background: theme.palette.common.white,
height: 40,
width: 40,
borderRadius: "50%",
display: "flex",
alignItems: "center",
justifyContent: "center",
transition: "opacity 120ms ease, transform 120ms ease",
"& svg": {
fontSize: 22,
},
"&:hover": {
opacity: 0.85,
transform: "translateY(-2px)",
},
}));