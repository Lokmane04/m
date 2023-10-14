import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { TaskFormTypes } from "../../types/TaskFormTypes";

const TaskForm = () => {
  const [inputFields, setInputFields] = useState<TaskFormTypes>();
  const [error, seterror] = useState<boolean>(false);
  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      seterror(true);
    } else {
      seterror(false);
    }

    event.preventDefault();
    // setInputFields({ ...inputFields, title: event.target.value });
  };

  const anyInputFieldEmpty = () => {
    var result = false;

    if (inputFields?.title === "") {
      seterror(true);
      result = true;
    } else {
      seterror(false);
    }

    return result;
  };

  const resetFields = () => {
    // setInputFields();
  };

  return (
    <Box
      sx={{
        ml: "22vw",
        bgcolor: "#dfd",
        display: "flex",
        alignItems: "center",
        width:
      }}
    >
      <Box>
        <TextField
          fullWidth
          required
          label="Add a task"
          value={inputFields}
          onChange={changeName}
          helperText={error ? "Company name is not allowed to be empty!" : ""}
          error={error}
        />

        <Button
          sx={{ alignSelf: "center", mt: "20px" }}
          variant="contained"
          onClick={() => {
            if (!anyInputFieldEmpty()) {
              resetFields();
            }
          }}
        >
          Add a task
        </Button>
      </Box>
    </Box>
  );
};
export default TaskForm;
