import { Box } from "@mui/material";
import TopBar from "./TopBar/TopBar";

const NavBar = () => {
  console.log((1060 * 80) / 100);
  return (
    <Box className="top-bar">
      <TopBar />
    </Box>
  );
};

export default NavBar;
