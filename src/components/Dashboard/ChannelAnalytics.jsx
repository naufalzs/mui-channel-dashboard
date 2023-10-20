import { Box, Card, CardContent, Divider, Typography } from "@mui/material";

export default function ChannelAnalytics() {
  return (
    <Card>
      <CardContent>
        <Typography variant="cardTitle">Channel Analytics</Typography>
        <Typography variant="h7">Current Subscribers</Typography>
        <Typography variant="h4" my={0.5}>
          4,144
        </Typography>
        <Typography variant="h7">
          <Box component={"span"} sx={{ color: "green.main" }}>
            +77
          </Box>{" "}
          in last 28 days
        </Typography>
        {/* section divider 1 */}
        <Box my={2}>
          <Divider />
        </Box>
        <Box mb={2}>
          <Typography variant="h6">Summary</Typography>
          <Typography variant="h8">Last 28 days</Typography>
        </Box>
        <Box sx={styles.latestVideoStatsRow}>
          <Typography variant="h7">Views</Typography>
          <Typography variant="h7">225</Typography>
        </Box>
        <Box sx={styles.latestVideoStatsRow}>
          <Typography variant="h7">Watch Time (hours)</Typography>
          <Typography variant="h7">30</Typography>
        </Box>
        <Box sx={styles.latestVideoStatsRow}>
          <Typography variant="h7">Estimated Revenue</Typography>
          <Typography variant="h7">$450.00</Typography>
        </Box>

        {/* section divider 2 */}
        <Box my={2}>
          <Divider />
        </Box>
        <Box mb={2}>
          <Typography variant="h6">Top Video</Typography>
          <Typography variant="h8">Last 48 hours . Views</Typography>
        </Box>
        <Box sx={styles.latestVideoStatsRow}>
          <Typography variant="h7">
            How to become a software developer in 2023
          </Typography>
          <Typography variant="h7">450</Typography>
        </Box>
        <Box sx={styles.latestVideoStatsRow}>
          <Typography variant="h7">
            CSS GRID Tutorial: How to use Grids to make awesome user interface.
          </Typography>
          <Typography variant="h7">287</Typography>
        </Box>
        <Box sx={styles.latestVideoStatsRow}>
          <Typography variant="h7">
            Call APIS in React Native: Practical Guide
          </Typography>
          <Typography variant="h7">130</Typography>
        </Box>
        <Typography mt={3} variant="link" textTransform={"uppercase"}>
          GO TO VIDEO ANALYTICS
        </Typography>
      </CardContent>
    </Card>
  );
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  latestVideoStatsRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mt: 2,
    gap: 2,
    ":hover": {
      color: "primary.main",
      cursor: "pointer",
    },
  },
};
