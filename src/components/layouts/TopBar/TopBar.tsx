import { Box, Fab } from "@mui/material";
import WhiteLogo from "../../../assets/png/white-logo.png";
import AddIcon from "@mui/icons-material/Add";
const TopBar = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "auto",
          height: "6vh",
          m: "4% 1%",
          top: 0,
          left: 0,
        }}
      >
        <img
          src={WhiteLogo}
          alt="insightful-logo"
          style={{ minWidth: "100px", maxWidth: "20%" }}
        />

        <Fab color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
      </Box>
    </>
  );
};

export default TopBar;
