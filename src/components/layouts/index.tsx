import { Box } from "@mui/material";
import TopBar from "./TopBar/TopBar";

const NavBar = () => {
  return (
    <Box
      sx={{
        width: "80vw",
        bgcolor: "#3c495f",
        position: "sticky",
        zIndex: "100",
        top: 0,
        left: 0,
        py: "2%",
      }}
    >
      <TopBar />
    </Box>
  );
};

export default NavBar;
