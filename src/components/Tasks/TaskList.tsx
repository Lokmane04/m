import { Box, List, ListItem, Typography, Link, Chip } from "@mui/material";
import { initialFacts, CATEGORIES } from "../../data/DUMMY_DATA";
const TaskList = () => {
  let ChipColor: string;
  return (
    <Box>
      <List sx={{ maxWidth: "90%", ml: "3vw" }}>
        {initialFacts.map(({ id, text, source, createdIn, category }) => {
          CATEGORIES.map(({ name, color }) => {
            if (name === category) {
              ChipColor = color;
              return ChipColor;
            }
          });
          return (
            <ListItem
              key={id}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "15px",
                mb: "20px",
                bgcolor: "#83C5BE",
                borderRadius: "15px",
              }}
            >
              <Typography sx={{ minWidth: "500px" }}>
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
                  mr: "5%",
                }}
              />

              <Typography>{createdIn}</Typography>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default TaskList;
