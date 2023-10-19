import { Box, Typography } from "@mui/material";
import LatestVideoCard from "../LatestVideoCard";
import LatestPost from "../LatestPost";
import ChannelAnalytics from "../ChannelAnalytics";
import LatestComment from "../LatestComment";
import IdeasForYou from "../IdeasForYou";
import CreatorInsider from "../CreatorInsider";

export default function Dashboard() {
  return (
    <Box>
      <Typography variant="h5" mb={2}>
        Channel Dashboard
      </Typography>
      <Box sx={styles.columnContainer}>
        <Box sx={styles.cardSpacing}>
          <LatestVideoCard />
        </Box>
        <Box sx={styles.cardSpacing}>
          <LatestPost />
        </Box>
        <Box sx={styles.cardSpacing}>
          <ChannelAnalytics />
        </Box>
        <Box sx={styles.cardSpacing}>
          <LatestComment />
        </Box>
        <Box sx={styles.cardSpacing}>
          <IdeasForYou />
        </Box>
        <Box sx={styles.cardSpacing}>
          <CreatorInsider />
        </Box>
      </Box>
    </Box>
  );
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  columnContainer: {
    columns: "280px 3",
    maxWidth: "1400px",
  },
  cardSpacing: {
    ":not(:first-of-type)": {
      mt: 2,
    },
  },
};
