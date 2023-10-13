import { createTheme, responsiveFontSizes } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "#3c495f",
    },
    secondary: {
      main: "#90ADBB",
    },
  },
});
export default responsiveFontSizes(theme);
