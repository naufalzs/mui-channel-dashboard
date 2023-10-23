import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const topVideoList = [
  {
    id: 1,
    thumbnail: "src/assets/thumbnail3.jpeg",
    title: "Black Holes 101 | National Geographic",
    description:
      "Explore the fascinating world of black holes, from their formation to their mysterious properties. Learn about the latest discoveries in astrophysics and the mind-boggling phenomena that occur near these cosmic giants.",
    visibility: "Public",
    monetization: "On",
    views: 7000000,
    comments: 100000,
    averageViewDuration: "2:25 (41.0%)",
  },
  {
    id: 2,
    thumbnail: "src/assets/thumbnail4.jpeg",
    title: "Adventures in Switzerland: Exploring Paradise",
    description:
      "Join us on a breathtaking journey through the stunning landscapes and vibrant culture of Bali, Indonesia. From pristine beaches to lush rice terraces, this travel vlog captures the essence of this tropical paradise.",
    visibility: "Public",
    monetization: "On",
    views: 15000,
    comments: 1200,
    averageViewDuration: "9:45 (30.5%)",
  },
  {
    id: 3,
    thumbnail: "src/assets/thumbnail5.jpeg",
    title: "Delicious Homemade Pizza Recipe",
    description:
      "Discover the secrets to making mouthwatering homemade pizza from scratch. This step-by-step tutorial covers everything from crafting the perfect pizza dough to selecting the freshest ingredients and achieving a crispy, cheesy masterpiece.",
    visibility: "Public",
    monetization: "On",
    views: 3900000,
    comments: 45000,
    averageViewDuration: "3:10 (25.5%)",
  },
];

export default function TopVideoList() {
  return (
    <Box sx={styles.container}>
      <Typography variant="h6">Your top content in this period</Typography>
      <TableContainer sx={styles.tableContainer} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Content</TableCell>
              <TableCell align="right">Average View Duration</TableCell>
              <TableCell align="right">Views</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {topVideoList.map((video) => (
              <TableRow key={video.id}>
                <TableCell sx={styles.contentCell}>
                  <Box
                    component="img"
                    src={video.thumbnail}
                    sx={styles.videoThumbnail}
                  />
                  {video.title}
                </TableCell>
                <TableCell align="right">{video.averageViewDuration}</TableCell>
                <TableCell align="right">{video.views}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  container: {
    width: "100%",
    mt: 4,
    textAlign: "center",
  },
  tableContainer: {
    mt: 8,
  },
  contentCell: {
    display: "flex",
    alignItems: "center",
  },
  videoThumbnail: {
    width: "100%",
    maxWidth: 100,
    marginRight: 1,
  },
};
