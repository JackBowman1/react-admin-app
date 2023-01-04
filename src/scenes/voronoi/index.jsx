import { Box } from "@mui/material";
import Header from "../../components/Header";
import VoronoiChart from "../../components/VoronoiChart";

const Voronoi = () => {
  return (
    <Box m="20px">
      <Header title="Voronoi Chart" subtitle="Simple Voronoi Chart" />
      <Box height="75vh">
        <VoronoiChart />
      </Box>
    </Box>
  );
};

export default Voronoi;
