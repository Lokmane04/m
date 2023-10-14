import { Box } from "@mui/material";
import Tasks from "../components/Tasks";
import SideBar from "../components/layouts/Sidebar/SideBar";

const Main = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        height: "94vh",
        justifyContent: "start",
      }}
    >
      <SideBar />
      <Tasks />
    </Box>
  );
};

export default Main;
