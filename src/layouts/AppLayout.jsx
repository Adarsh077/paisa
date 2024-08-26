import { Box, Grid, Typography } from "@mui/material";
import Sidebar from "./components/Sidebar";

const AppLayout = (props) => {
  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "surfaceContainerHigh.main",
        display: "flex",
      }}
    >
      <Grid container height="100%">
        <Grid md={4} lg={2} item height="100%">
          <Box sx={{ height: "100%" }}>
            <Box sx={{ pt: 2 }}>
              <Sidebar />
            </Box>
          </Box>
        </Grid>
        <Grid md={8} lg={10} item>
          <Box
            sx={{
              bgcolor: "background.default",
              borderTopLeftRadius: (t) => t.spacing(3),
              borderBottomLeftRadius: (t) => t.spacing(3),
              height: "100%",
            }}
          >
            <Box sx={{ p: (t) => t.spacing(3, 4) }}>{props.children}</Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default AppLayout;
