import { createTheme, responsiveFontSizes } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      // grey
      main: "#006D77",
      light: "#DEE2FF",
    },
    secondary: {
      // violet calm
      main: "#83C5BE",
    },
    info: {
      // brown calm
      main: "#EDF6F9",
    },
    success: {
      main: "#E29578",
    },
  },
});
export default responsiveFontSizes(theme);
