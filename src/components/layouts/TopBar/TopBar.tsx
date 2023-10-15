import { Box, Button, Fab } from "@mui/material";
import WhiteLogo from "../../../assets/png/white-logo.png";
import AddIcon from "@mui/icons-material/Add";
import "../../../App.css";
const TopBar = () => {
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
      <Fab className="btn" color="secondary" aria-label="Add a Task">
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default TopBar;
