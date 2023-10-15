import { Box, Chip } from "@mui/material";
import { CATEGORIES } from "../../../data/DUMMY_DATA";
const SideBar = () => {
  const tagClickHandler = () => {};
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {CATEGORIES.map((category) => {
        const color = category.color;
        return (
          <>
            <Chip
              key={category.color}
              variant="filled"
              color="primary"
              label={category.name.toUpperCase()}
              onClick={tagClickHandler}
              sx={{
                mt: "20px",
                width: "auto",
                bgcolor: `${color}`,
                minWidth: "100%",
              }}
            />
          </>
        );
      })}
    </Box>
  );
};

export default SideBar;
