import { Grid } from "@mui/material";
import ExpenseCard from "./components/ExpenseCard";
import IncomeCard from "./components/IncomeCard";

const MonthlyOverview = () => {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid xs={6} item>
          <IncomeCard />
        </Grid>
        <Grid xs={6} item>
          <ExpenseCard />
        </Grid>
      </Grid>
    </div>
  );
};
export default MonthlyOverview;
