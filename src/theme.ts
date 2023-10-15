import { createTheme, responsiveFontSizes } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      // grey
      main: "#254E70",
      light: "#DEE2FF",
    },
    secondary: {
      // violet calm
      main: "#8EE3EF",
    },
    info: {
      // brown calm
      main: "#AEF3E7",
    },
    success: {
      main: "#E29578",
    },
    error: {
      main: "#C33C54",
    },
  },
});
export default responsiveFontSizes(theme);
