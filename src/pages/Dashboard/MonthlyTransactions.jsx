import {
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const MonthlyTransactions = () => {
  return (
    <div>
      <TableContainer
        sx={{
          border: (theme) =>
            `1px solid ${theme.palette.surfaceContainerHighest.main}`,
          borderBottom: 0,
          marginTop: (theme) => theme.spacing(1),
          [`& .${tableCellClasses.root}`]: {
            borderBottomColor: (t) => t.palette.surfaceContainerHighest.main,
          },
        }}
      >
        <Table>
          <TableHead>
            <TableRow
              sx={{
                [`& .${tableCellClasses.root}`]: {
                  p: (t) => t.spacing(1, 2),
                },
              }}
            >
              <TableCell>Title</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                sx={{
                  padding: (theme) => theme.spacing(1, 2),
                  bgcolor: (t) => t.palette.surfaceContainerHighest.main,
                }}
                colSpan={3}
              >
                27 August 2024
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell component="th" scope="row">
                Rent
              </TableCell>
              <TableCell component="th" scope="row">
                Savings
              </TableCell>
              <TableCell>
                <Typography sx={{ color: (t) => t.palette.error.light }}>
                  ₹300
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Rent
              </TableCell>
              <TableCell component="th" scope="row">
                Savings
              </TableCell>
              <TableCell>
                <Typography sx={{ color: (t) => t.palette.error.light }}>
                  ₹300
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Rent
              </TableCell>
              <TableCell component="th" scope="row">
                Savings
              </TableCell>
              <TableCell>
                <Typography sx={{ color: (t) => t.palette.success.light }}>
                  ₹300
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Rent
              </TableCell>
              <TableCell component="th" scope="row">
                Savings
              </TableCell>
              <TableCell>
                <Typography sx={{ color: (t) => t.palette.error.light }}>
                  ₹300
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Rent
              </TableCell>
              <TableCell component="th" scope="row">
                Savings
              </TableCell>
              <TableCell>
                <Typography sx={{ color: (t) => t.palette.error.light }}>
                  ₹300
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default MonthlyTransactions;
