import { Box } from "@mui/material";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const Tasks = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "65vw",
        minWidth: "100px",
      }}
    >
      <TaskForm />
      <TaskList />
    </Box>
  );
};

export default Tasks;
