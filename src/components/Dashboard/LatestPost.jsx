import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

export default function LatestPost() {
  return (
    <Card>
      <CardContent>
        <Typography variant="cardTitle">Latest Post</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            my: 3,
          }}
        >
          <Avatar
            src="/src/assets/avatars/naufal.png"
            sx={{
              width: "30px",
              height: "auto",
              border: "1px solid #000",
            }}
          />
          <Typography variant="h7" sx={{ color: "neutral.normal" }}>
            Coding with Naufal
          </Typography>
          <Typography variant="h7" sx={{ color: "neutral.normal" }}>
            Sep 30, 2023
          </Typography>
        </Box>
        <Typography variant="body2" mb={1}>
          I asked chatGPT to tell me a joke about react js, he is not only smart
          but also funny :)) we are going to have a video about it tomorrow.
        </Typography>
        <Divider />
        <Grid container my={2}>
          <Grid item xs={6}>
            <Typography variant="body2">Likes</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Comments</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">12</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">6</Typography>
          </Grid>
        </Grid>
        <Typography variant="link" textTransform={"uppercase"}>
          go to community tab
        </Typography>
      </CardContent>
    </Card>
  );
}
