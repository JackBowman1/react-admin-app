import { ResponsiveVoronoi } from "@nivo/voronoi";
import { mockVoronoiData as data } from "../data/mockData";

const Voronoi = () => (
  <ResponsiveVoronoi
    data={data}
    xDomain={[0, 100]}
    yDomain={[0, 100]}
    enableLinks={true}
    linkLineColor="#bab5b8"
    cellLineColor="#2d4cc8"
    pointSize={6}
    pointColor="#c8382d"
    margin={{ top: 1, right: 1, bottom: 1, left: 1 }}
  />
);

export default Voronoi;
