import { Box, List, ListItem, Typography, Link, Chip } from "@mui/material";
import { initialFacts, CATEGORIES } from "../../data/DUMMY_DATA";
import "../../App.css";
const TaskList = () => {
  let ChipColor: string;
  return (
    <Box>
      <List>
        {initialFacts.map(({ id, text, source, createdIn, category }) => {
          CATEGORIES.map(({ name, color }) => {
            if (name === category) {
              ChipColor = color;
              return ChipColor;
            }
          });
          return (
            <li key={id} className="list-item">
              <Typography className="list-item-text" sx={{ minWidth: "500px" }}>
                {text}
                <Link
                  ml={2}
                  href={source}
                  underline="hover"
                  color="blueviolet"
                  target="_blank"
                >
                  (Source)
                </Link>
              </Typography>
              <Chip
                variant="filled"
                color="primary"
                label={category.toUpperCase()}
                sx={{
                  mt: "20px",
                  width: "auto",
                  mb: "15px",
                  bgcolor: `${ChipColor}`,
                }}
              />

              <Typography className="list-item-date">{createdIn}</Typography>
            </li>
          );
        })}
      </List>
    </Box>
  );
};

export default TaskList;
