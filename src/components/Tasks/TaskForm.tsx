import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

const TaskForm = () => {
  const [inputFields, setInputFields] = useState<string>("");
  const [error, seterror] = useState<boolean>(false);
  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      seterror(true);
    } else {
      seterror(false);
    }

    event.preventDefault();
    setInputFields(event.target.value);
  };

  const anyInputFieldEmpty = () => {
    var result = false;

    if (inputFields === "") {
      seterror(true);
      result = true;
    } else {
      seterror(false);
    }

    return result;
  };

  const resetFields = () => {
    setInputFields("");
  };

  return (
    <Box bgcolor="white" display="flex" flexDirection="column">
      <TextField
        required
        label="Company Name"
        margin="dense"
        name="companyName"
        value={inputFields}
        onChange={changeName}
        helperText={error ? "Company name is not allowed to be empty!" : ""}
        error={error}
      />

      <Button
        sx={{ alignSelf: "center" }}
        variant="contained"
        onClick={() => {
          if (!anyInputFieldEmpty()) {
            // onSubmitClick();
            resetFields(); // This form is in a popover. The values should be resetted before the user open it again.
          }
        }}
      >
        Add a task
      </Button>
    </Box>
  );
};
export default TaskForm;
