import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

export default function LatestComment() {
  return (
    <Card>
      <CardContent>
        <Typography variant="cardTitle">Latest Comments</Typography>
        <Typography variant="h7">Channel recent comments</Typography>
        <Box mt={2} sx={styles.latestCommentContainer}>
          <Avatar
            src="src/assets/avatars/naufal.png"
            sx={{ width: "30px", height: "auto", border: "1px solid #000" }}
          />
          <Box ml={1} mr={2}>
            <Box mb={0.5} sx={{ display: "flex", color: "neutral.normal" }}>
              <Typography
                variant="body1"
                fontSize={"0.8rem"}
                component="p"
                mr={1}
              >
                Coding with Naufal
              </Typography>
              <Typography
                variant="body1"
                fontSize={"0.8rem"}
                component="p"
                mr={1}
              >
                2 weeks ago
              </Typography>
            </Box>
            <Typography variant="h7" component="p">
              Get tips from a successful creator on how to take a YouTube
              channel and turn it into a business that earns you money
            </Typography>
          </Box>
          <Box>
            <Box
              component={"img"}
              src="src/assets/thumbnail.png"
              sx={{ width: 80 }}
            />
          </Box>
        </Box>
        <Box my={2}>
          <Divider />
        </Box>
        <Box mt={2} sx={styles.latestCommentContainer}>
          <Avatar
            src="src/assets/avatars/naufal.png"
            sx={{ width: "30px", height: "auto", border: "1px solid #000" }}
          />
          <Box ml={1} mr={2}>
            <Box mb={0.5} sx={{ display: "flex", color: "neutral.normal" }}>
              <Typography
                variant="body1"
                fontSize={"0.8rem"}
                component="p"
                mr={1}
              >
                Coding with Naufal
              </Typography>
              <Typography
                variant="body1"
                fontSize={"0.8rem"}
                component="p"
                mr={1}
              >
                2 weeks ago
              </Typography>
            </Box>
            <Typography variant="h7" component="p">
              How can I deploy this?
            </Typography>
          </Box>
          <Box>
            <Box
              component={"img"}
              src="src/assets/thumbnail.png"
              sx={{ width: 80 }}
            />
          </Box>
        </Box>
        <Box my={2}>
          <Divider />
        </Box>
        <Box mt={2} sx={styles.latestCommentContainer}>
          <Avatar
            src="src/assets/avatars/naufal.png"
            sx={{ width: "30px", height: "auto", border: "1px solid #000" }}
          />
          <Box ml={1} mr={2}>
            <Box mb={0.5} sx={{ display: "flex", color: "neutral.normal" }}>
              <Typography
                variant="body1"
                fontSize={"0.8rem"}
                component="p"
                mr={1}
              >
                Coding with Naufal
              </Typography>
              <Typography
                variant="body1"
                fontSize={"0.8rem"}
                component="p"
                mr={1}
              >
                2 weeks ago
              </Typography>
            </Box>
            <Typography variant="h7" component="p">
              Thank you, was very helpful.
            </Typography>
          </Box>
          <Box>
            <Box
              component={"img"}
              src="src/assets/thumbnail.png"
              sx={{ width: 80 }}
            />
          </Box>
        </Box>
        <Typography
          sx={styles.cardAction}
          variant="link"
          textTransform={"uppercase"}
        >
          view more
        </Typography>
      </CardContent>
    </Card>
  );
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  latestCommentContainer: {
    display: "flex",
    alignItems: "flex-start",
  },
};
