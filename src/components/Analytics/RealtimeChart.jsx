import { Circle } from "@mui/icons-material";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import { Bar } from "react-chartjs-2";
import { getRealtimeChartData, realtimeChartOptions } from "./ChartConfig";

export default function RealtimeChart() {
  return (
    <Card sx={styles.realtimeStatsCard}>
      <CardContent>
        <Box>
          <Typography variant="cardTitle">Realtime</Typography>
          <Box sx={styles.updateLiveRow}>
            <Circle sx={styles.dotIcon} />
            <Typography variant="h7" color="neutral.normal">
              Updating Live
            </Typography>
          </Box>
          <Divider sx={styles.divider} />
          <Typography sx={styles.valueText}>4,144</Typography>
          <Typography variant="h7">Subscribers</Typography>

          <Divider sx={styles.divider} />
          <Typography sx={styles.valueText}>1,786</Typography>
          <Typography variant="h7">Views Last 48 hours </Typography>
          <Box sx={styles.realtimeChart}>
            <Bar options={realtimeChartOptions} data={getRealtimeChartData()} />
          </Box>
          <Typography mt={3} variant="link" textTransform={"uppercase"}>
            see more
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  realtimeStatsCard: {
    mb: 2,
  },
  updateLiveRow: {
    display: "flex",
    alignItems: "center",
  },
  dotIcon: {
    width: 10,
    color: "primary.normal",
    mr: 1,
  },
  divider: {
    my: 2,
  },
  valueText: {
    fontSize: "1.3rem",
    fontWeight: 400,
  },
  realtimeChart: {
    height: 70,
    mt: 4,
  },
};
