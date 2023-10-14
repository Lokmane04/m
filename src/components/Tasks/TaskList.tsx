import { Box, List, ListItem, ListItemText } from "@mui/material";
import { initialFacts } from "../../data/DUMMY_DATA";
const TaskList = () => {
  console.log(new Date());
  return (
    <Box>
      <List sx={{ width: "100", bgcolor: "background.paper" }}>
        {initialFacts.map((fact) => {
          return (
            <>
              <ListItem>
                <ListItemText primary="Photos" secondary="Jan 9, 2014">
                  {fact.text}
                </ListItemText>
              </ListItem>
              ,
            </>
          );
        })}
      </List>
    </Box>
  );
};

export default TaskList;
