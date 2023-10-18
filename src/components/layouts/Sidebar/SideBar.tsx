import {
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/redux-custom-hooks/hooks";

import { Box, Chip } from "@mui/material";
import { CategoriesTypes } from "../../../types/Categories";
import { fetchFilteredTasks } from "../../../state/features/categoriesFilterSlice/categoriesFilterSlice";

const SideBar = () => {
  const tasks = useAppSelector((state: any) => state.tasks);
  //get filteredTasks from supabase
  const filteredTasks = useAppSelector((state: any) => state.filteredTasks);
  const dispatch = useAppDispatch();
  const fetchFilteredTasksHandler = (category: string) => {
    dispatch(fetchFilteredTasks(category));
  };

  console.log("filteredTasks", filteredTasks);

  //get categories from supabase
  const categories = useAppSelector((state: any) => state.categories);
  const CATEGORIES = categories["categories"]["categories"];
  CATEGORIES ? console.log(CATEGORIES, "CATEGORIES") : "";

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
            <>
              {category.name && (
                <Chip
                  onClick={() => dispatch(fetchFilteredTasks(category.name))}
                  key={category.color}
                  variant="filled"
                  color="primary"
                  label={category.name.toUpperCase()}
                  sx={{
                    mt: "20px",
                    width: "auto",
                    bgcolor: `${color}`,
                    minWidth: "100%",
                  }}
                />
              )}
            </>
          );
        })}
    </Box>
  );
};

export default SideBar;
