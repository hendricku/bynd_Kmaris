import { createTheme } from "@mui/material/styles";
import { breakpoints } from "./breakpoints";
import { palette } from "./palette";
import { typography } from "./typography";

declare module '@mui/material/styles' {
  // Allow us to use our custom 'navy' color in the palette
  interface Palette {
    navy: Palette['primary'];
  }
  interface PaletteOptions {
    navy?: PaletteOptions['primary'];
  }
}

export const theme = createTheme({
  breakpoints,
  palette,
  typography,
  
  // You can also add component-level overrides here for global styles
  // For example, to change the default props for all MUI Buttons:
  // components: {
  //   MuiButton: {
  //     defaultProps: {
  //       disableRipple: true,
  //     },
  //   },
  // },
});