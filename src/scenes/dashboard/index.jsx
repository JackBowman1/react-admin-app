import { Box, Button, IconButton, Typography, useTheme } from "@mui/system";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      ></Box>
      <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
    </Box>
  );
};

export default Dashboard;
