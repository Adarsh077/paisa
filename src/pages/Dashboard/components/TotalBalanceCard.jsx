import { Card, CardContent, Typography } from "@mui/material";

const TotalBalanceCard = () => {
  return (
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
  );
};

export default TotalBalanceCard;
