import { Box, Card, CardContent, Typography } from "@mui/material";

export default function LatestVideoCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="cardTitle">Latest Video Performance</Typography>
        <Box sx={styles.latestVideoContainer}>
          <Box
            sx={styles.latestVideoImg}
            component={"img"}
            src="src/assets/thumbnail.png"
            alt="reactjs search bar"
          />
          <Typography sx={styles.latestVideoTitle}>
            ReactJS Searchbar in 5 Minutes!
          </Typography>
        </Box>
        <Typography sx={styles.latestVideoTimeLabel} variant="h7">
          First 6 hours:
        </Typography>
        <Box sx={styles.latestVideoStatsRow}>
          <Typography variant="h7">Views</Typography>
          <Typography variant="h7">225</Typography>
        </Box>
        <Box sx={styles.latestVideoStatsRow}>
          <Typography variant="h7">Watch Time (hours)</Typography>
          <Typography variant="h7">30</Typography>
        </Box>
        <Box sx={styles.latestVideoStatsRow}>
          <Typography variant="h7">Likes</Typography>
          <Typography variant="h7">23k</Typography>
        </Box>
        <Typography
          sx={styles.cardAction}
          variant="link"
          textTransform={"uppercase"}
        >
          go to video analytics
        </Typography>
        <Typography
          sx={styles.cardAction}
          variant="link"
          textTransform={"uppercase"}
        >
          see comments (12)
        </Typography>
      </CardContent>
    </Card>
  );
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  latestVideoContainer: {
    position: "relative",
  },
  latestVideoImg: {
    width: "100%",
    mt: 1,
    filter: "brightness(30%)",
    ":hover": {
      filter: "brightness(75%)",
      transition: "all 250ms ease-in-out",
    },
  },
  latestVideoTitle: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    color: "neutral.light",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1.3rem",
  },
  latestVideoTimeLabel: {
    color: "neutral.normal",
    mt: 2
  },
  latestVideoStatsRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mt: 1,
  },
  cardAction: {
    mt: 2
  },
};
