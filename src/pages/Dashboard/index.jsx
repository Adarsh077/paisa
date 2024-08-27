import { Box, Grid } from "@mui/material";
import MonthSelection from "./MonthSelection";
import Overview from "./Overview";
import MonthlyOverview from "./MonthlyOverview";
import MonthlyTransactions from "./MonthlyTransactions";

const Dashboard = () => {
  return (
    <Box display="flex" flexDirection="column" rowGap={2}>
      <Overview />
      <MonthSelection />
      <Grid container spacing={2}>
        <Grid md={6} item>
          <MonthlyOverview />
        </Grid>
        <Grid md={6} item>
          <MonthlyTransactions />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
