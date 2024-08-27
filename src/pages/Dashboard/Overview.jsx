import { Grid } from "@mui/material";
import TotalBalanceCard from "./components/TotalBalanceCard";
import IncomeCard from "./components/IncomeCard";
import ExpenseCard from "./components/ExpenseCard";

const Overview = () => {
  return (
    <Grid container spacing={3}>
      <Grid xs={4} item>
        <TotalBalanceCard />
      </Grid>
      <Grid xs={4} item>
        <IncomeCard />
      </Grid>
      <Grid xs={4} item>
        <ExpenseCard />
      </Grid>
    </Grid>
  );
};
export default Overview;
