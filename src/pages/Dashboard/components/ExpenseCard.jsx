import { Box, Card, CardContent, Typography } from "@mui/material";

const ExpenseCard = () => {
  return (
    <Card variant="filled">
      <CardContent sx={{ paddingBottom: (t) => `${t.spacing(2)} !important` }}>
        <Typography variant="body2" color="text.secondary" mb={2}>
          Expense
        </Typography>
        <Typography variant="h3" component="div">
          ₹10,000
        </Typography>
        <Box sx={{ height: 5, mt: 2.4, bgcolor: "error.dark" }} />
      </CardContent>
    </Card>
  );
};
export default ExpenseCard;
