import { ThemeOptions, createTheme } from "@mui/material";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    background: {
      default: "#1B1B1B",
      paper: "#1B1B1B",
    },
    primary: {
      main: "#00FFFF",
    },
    secondary: {
      main: "#8A2BE2",
    },
  },
  typography: {
    h1: {
      fontSize: "5rem",
      fontWeight: 700,
      color: "#1e3b72",
      lineHeight: 1.2,
      margin: "0",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      color: "#1e3b72",
      lineHeight: 1.2,
      margin: "0",
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
      color: "#000000",
      lineHeight: 1.2,
      margin: "0",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "#1e3b72",
      lineHeight: 1.2,
      margin: "0",
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 400,
      color: "#00ffff",
      lineHeight: 1.2,
      margin: "0",
    },
    h6: {
      fontSize: "2rem",
      fontWeight: 400,
      color: "#00000",
      lineHeight: 1.2,
      margin: "0",
    },
    body1: {
      fontSize: "0.875rem",
      fontWeight: 400,
      color: "#ffffff",
      lineHeight: 1.5,
      margin: "0",
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      color: "#000000",
      lineHeight: 1.5,
      margin: "0",
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
