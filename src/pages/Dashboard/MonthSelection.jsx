import { Box, Chip } from "@mui/material";

const MonthSelection = () => {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Chip
        label="August 2024"
        variant="filled"
        color="secondary"
        onClick={() => {}}
      />
      <Chip
        label="July 2024"
        variant="outlined"
        color="secondary"
        onClick={() => {}}
      />
      <Chip
        label="June 2024"
        variant="outlined"
        color="secondary"
        onClick={() => {}}
      />
    </Box>
  );
};

export default MonthSelection;
