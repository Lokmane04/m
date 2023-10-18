import { useAppSelector } from "../../../hooks/redux-custom-hooks/hooks";

import { Box, Chip } from "@mui/material";
import { CategoriesTypes } from "../../../types/Categories";

const SideBar = () => {
  const categories = useAppSelector((state: any) => state.categories);
  const CATEGORIES = categories["categories"]["categories"];

  const tagClickHandler = () => {};
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {CATEGORIES &&
        CATEGORIES.map((category: CategoriesTypes) => {
          const color = category.color;
          return (
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
          );
        })}
    </Box>
  );
};

export default SideBar;
