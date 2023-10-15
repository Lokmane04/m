import { Box } from "@mui/material";
import Tasks from "../components/Tasks";
import SideBar from "../components/layouts/Sidebar/SideBar";

const Main = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "250px 1fr",
        gap: "50px",
      }}
    >
      <SideBar />
      <Tasks />
    </Box>
  );
};

export default Main;
