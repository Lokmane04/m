import { Toaster, toast } from "sonner";
import { Box, Fab } from "@mui/material";
import WhiteLogo from "../../../assets/png/white-logo.png";
import AddIcon from "@mui/icons-material/Add";
import "../../../App.css";
const TopBar = () => {
  const displayToastHandler = () => {
    toast.success("The task was added successfully");
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "auto",
        height: "6vh",
        ml: "1%",
      }}
    >
      <img className="insightful-logo" src={WhiteLogo} alt="insightful-logo" />
      <Toaster richColors />
      <Fab
        onClick={displayToastHandler}
        className="btn"
        color="secondary"
        aria-label="Add a Task"
      >
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default TopBar;
