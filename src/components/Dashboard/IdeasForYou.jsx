import { Box, Card, CardContent, Typography } from "@mui/material";

export default function IdeasForYou() {
  return (
    <Card>
      <CardContent>
        <Typography variant="cardTitle">Ideas for You</Typography>
        <Typography variant="h6" fontSize={"0.9rem"} sx={{ my: 2 }}>
          Ready to get business savvy?
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <Typography variant="h7" component="p">
            Get tips from a successful creator on how to take a YouTube channel
            and turn it into a business that earns you money
          </Typography>
          <Box
            ml={4}
            component={"img"}
            src="assets/study-icon.png"
            width={80}
          />
        </Box>
        <Typography mt={3} variant="link" textTransform={"uppercase"}>
          get started now
        </Typography>
      </CardContent>
    </Card>
  );
}
