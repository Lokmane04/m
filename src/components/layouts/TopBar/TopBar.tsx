import { Box, Chip } from "@mui/material";
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
          margin: "2%",
          top: 0,
          left: 0,
        }}
      >
        <img src={WhiteLogo} alt="insightful-logo" width="20%" height="auto" />
        <Chip
          color="secondary"
          label={<AddIcon />}
          sx={{ borderRadius: "50%", width: "50px", height: "50px" }}
          title="add task"
        ></Chip>
      </Box>
    </>
  );
};

export default TopBar;
