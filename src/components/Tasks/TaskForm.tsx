import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { TaskFormTypes, InitialFormValues } from "../../types/TaskFormTypes";

const TaskForm = () => {
  const [inputFields, setInputFields] =
    useState<TaskFormTypes>(InitialFormValues);
  const [error, seterror] = useState<boolean>(false);
  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      seterror(true);
    } else {
      seterror(false);
    }

    event.preventDefault();
    setInputFields({ ...inputFields, [event.target.name]: event.target.value });
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
    setInputFields(InitialFormValues);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        bgcolor: "#83C5BE",
        p: "20px",
        borderRadius: "15px",
      }}
    >
      <Box>
        <TextField
          sx={{ mb: "20px" }}
          color="primary"
          fullWidth
          required
          label="Add a task"
          value={inputFields.title}
          onChange={changeName}
          helperText={
            error ? "Please fill the Task title" : "Please type the Task title "
          }
          error={error}
        />
        <TextField
          sx={{ mb: "20px" }}
          color="primary"
          fullWidth
          label="Description"
          value={inputFields.description}
          onChange={changeName}
          helperText="you can add description to your Task"
        />
        <TextField
          color="primary"
          fullWidth
          label="Trustworthy source"
          type="email"
          value={inputFields.source}
          onChange={changeName}
          helperText="you can add a source you can refer to it"
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
