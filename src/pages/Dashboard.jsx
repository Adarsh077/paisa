import { Box, Chip, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Dashboard = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid xs={4} item>
          <Card
            sx={{
              bgcolor: "primaryContainer.main",
              "&:hover": {
                bgcolor: "primaryContainer.main",
              },
            }}
            variant="filled"
          >
            <CardContent>
              <Typography variant="body2" mb={2}>
                Total balance
              </Typography>
              <Typography variant="h2" fontWeight="medium" component="div">
                ₹10,000
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={4} item>
          <Card variant="filled">
            <CardContent
              sx={{ paddingBottom: (t) => `${t.spacing(2)} !important` }}
            >
              <Typography variant="body2" color="text.secondary" mb={2}>
                Income
              </Typography>
              <Typography variant="h3" component="div">
                ₹10,000
              </Typography>
              <Box sx={{ height: 5, mt: 2.4, bgcolor: "success.dark" }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={4} item>
          <Card variant="filled">
            <CardContent
              sx={{ paddingBottom: (t) => `${t.spacing(2)} !important` }}
            >
              <Typography variant="body2" color="text.secondary" mb={2}>
                Expense
              </Typography>
              <Typography variant="h3" component="div">
                ₹10,000
              </Typography>
              <Box sx={{ height: 5, mt: 2.4, bgcolor: "error.dark" }} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
export default Dashboard;
