import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/redux-custom-hooks/hooks";
import { useEffect } from "react";
import { fetchTasks } from "../../state/features/tasksSlice/tasksSlice";

import { Box, Typography, Link, Chip } from "@mui/material";
import "../../App.css";
import { CategoriesTypes } from "../../types/Categories";
import { TaskFormTypes } from "../../types/TaskFormTypes";
const TaskList = () => {
  const categories = useAppSelector((state: any) => state.categories);
  const CATEGORIES = categories["categories"]["categories"];
  const tasks = useAppSelector((state: any) => state.tasks);
  const TASKS = tasks["tasks"]["tasks"];
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, []);
  let ChipColor: string;
  return (
    <Box>
      <ul className="list">
        {TASKS &&
          TASKS.map(
            ({
              id,
              title,
              source,
              description,
              createdIn,
              category,
            }: TaskFormTypes) => {
              CATEGORIES &&
                CATEGORIES.map(({ name, color }: CategoriesTypes) => {
                  if (name === category) {
                    ChipColor = color;
                    return ChipColor;
                  }
                });
              return (
                <li key={id} className="list-item">
                  <p className="list-item-text">
                    {title}
                    <Link
                      ml={2}
                      href={source}
                      underline="hover"
                      color="blueviolet"
                      target="_blank"
                    >
                      (Source)
                    </Link>
                    <Typography ml={2} color="primary" variant="subtitle2">
                      {description}
                    </Typography>
                  </p>
                  <Chip
                    variant="filled"
                    color="primary"
                    label={category}
                    sx={{
                      mt: "20px",
                      width: "auto",
                      mb: "15px",
                      bgcolor: `${ChipColor}`,
                    }}
                  />
                  <Chip label={createdIn} />
                  <Typography className="list-item-date"></Typography>
                </li>
              );
            }
          )}
      </ul>
    </Box>
  );
};

export default TaskList;
