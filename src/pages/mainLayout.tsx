import { Box } from "@mui/material";
import Tasks from "../components/Tasks";
import SideBar from "../components/layouts/Sidebar/SideBar";

const Main = () => {
  return (
    <Box className="main-layout">
      <SideBar />
      <Tasks />
    </Box>
  );
};

export default Main;
