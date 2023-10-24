import { Box, Card, CardContent, Typography } from "@mui/material";

export default function CreatorInsider() {
  return (
    <Card>
      <CardContent>
        <Typography variant="cardTitle">Creator Insider</Typography>
        <Box
          my={1}
          component="img"
          src="assets/thumbnail2.png"
          width="100%"
        />
        <Typography variant="h6" fontSize={"0.9rem"} sx={{ my: 2 }}>
          Ready to boost your skills using AI tools?
        </Typography>
        <Typography variant="h7" component="p">
          Get tips from a successful creator on how to take a YouTube channel
          and turn it into a business that earns you money
        </Typography>
        <Typography mt={3} variant="link" textTransform={"uppercase"}>
          watch on youtube
        </Typography>
      </CardContent>
    </Card>
  );
}
