import { Box, Button } from "@mui/material";
import { CATEGORIES } from "../../../data/DUMMY_DATA";
const SideBar = () => {
  return (
    <Box
      sx={{
        width: "21vw",
        height: "94vh",
        bgcolor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {CATEGORIES.map((category) => {
        return (
          <Button
            variant="contained"
            size="large"
            key={category.color}
            sx={{ mt: "20px", width: "220px" }}
          >
            {category.name}
          </Button>
        );
      })}
    </Box>
  );
};

export default SideBar;
