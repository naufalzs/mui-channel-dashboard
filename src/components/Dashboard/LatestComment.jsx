import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

const commentList = [
  "Get tips from a successful creator on how to take a YouTube channel and turn it into a business that earns you money",
  "How can I deploy this?",
  "Thank you, was very helpful.",
];

export default function LatestComment() {
  const Comment = ({ commentText, isLast }) => (
    <Box>
      <Box mt={2} sx={styles.commentContainer}>
        <Box sx={styles.commentTextContainer}>
          <Avatar src="src/assets/avatars/naufal.png" sx={styles.avatar} />
          <Box ml={1} mr={2}>
            <Box mb={0.5} sx={styles.commentHeaderContainer}>
              <Typography
                variant="body1"
                component="p"
                sx={styles.commentHeader}
              >
                Coding with Naufal
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={styles.commentHeader}
              >
                2 weeks ago
              </Typography>
            </Box>
            <Typography variant="h7" component="p">
              {commentText}
            </Typography>
          </Box>
        </Box>
        <Box
          component={"img"}
          src="src/assets/thumbnail.png"
          sx={{ width: 80 }}
        />
      </Box>
      {!isLast && <Divider sx={styles.divider} />}
    </Box>
  );

  const comments = commentList.map((comment, index) => (
    <Comment
      key={index}
      commentText={comment}
      isLast={index === commentList.length - 1}
    />
  ));

  return (
    <Card>
      <CardContent>
        <Typography variant="cardTitle">Latest Comments</Typography>
        <Typography variant="h7">Channel recent comments</Typography>
        {comments}
        <Typography
          sx={styles.cardAction}
          variant="link"
          textTransform={"uppercase"}
          mt={2}
        >
          view more
        </Typography>
      </CardContent>
    </Card>
  );
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  commentContainer: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between"
  },
  commentTextContainer: {
    display: "flex",
    alignItems: "flex-start",
  },
  avatar: { width: "30px", height: "auto", border: "1px solid #000" },
  commentHeaderContainer: { display: "flex", color: "neutral.normal" },
  commentHeader: {
    fontSize: "0.8rem",
    mr: 1,
  },
  divider: {
    my: 2,
  },
};
