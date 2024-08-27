import { Box, Card, CardContent, Typography } from "@mui/material";

const IncomeCard = () => {
  return (
    <Card variant="filled">
      <CardContent sx={{ paddingBottom: (t) => `${t.spacing(2)} !important` }}>
        <Typography variant="body2" color="text.secondary" mb={2}>
          Income
        </Typography>
        <Typography variant="h3" component="div">
          ₹10,000
        </Typography>
        <Box sx={{ height: 5, mt: 2.4, bgcolor: "success.dark" }} />
      </CardContent>
    </Card>
  );
};
export default IncomeCard;
