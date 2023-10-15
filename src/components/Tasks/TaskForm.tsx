import {
  Box,
  Button,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { useState } from "react";
import { TaskFormTypes, InitialFormValues } from "../../types/TaskFormTypes";
import { CATEGORIES } from "../../data/DUMMY_DATA";

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
        mb: "20px",
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
          sx={{ mb: "20px" }}
          color="primary"
          fullWidth
          label="Trustworthy source"
          type="email"
          value={inputFields.source}
          onChange={changeName}
          helperText="you can add a source you can refer to it"
        />
        <FormControl fullWidth sx={{ mb: "20px" }}>
          <InputLabel>Categories</InputLabel>
          <Select value={inputFields.categories} label="Categories">
            {CATEGORIES.map((category) => {
              return <MenuItem value={10}>{category.name}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <Button
          sx={{
            my: "10px",
            flexShrink: "0",
            minWidth: "10%",
          }}
          variant="contained"
          onClick={() => {
            if (!anyInputFieldEmpty()) {
              resetFields();
            }
          }}
        >
          Add a task
        </Button>
        <Button
          color="error"
          sx={{ my: "10px", ml: "15px", flexShrink: "0", minWidth: "10%" }}
          variant="contained"
          onClick={() => {
            resetFields();
          }}
        >
          Clear
        </Button>
      </Box>
    </Box>
  );
};
export default TaskForm;
