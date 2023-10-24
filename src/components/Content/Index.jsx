import { Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import TabPanel from "../TabPanel";
import { DataGrid } from "@mui/x-data-grid";

const videos = [
  {
    id: 1,
    thumbnail: "assets/thumbnail.png",
    title: "React Search Bar with Suggestion",
    description:
      "How to create react search bar with auto suggestion, seamlessly, smoothly, and easily",
    visibility: "Public",
    monetization: "On",
    views: 100,
    comments: 17,
  },
  {
    id: 2,
    thumbnail: "assets/thumbnail2.png",
    title: "How to use Chat GPT (Subscriber Only)",
    description:
      "Learn how to unlock Chat GPT secret word. Unlock your potential, get easier life with AI in your life",
    visibility: "Private",
    monetization: "On",
    views: 250,
    comments: 12,
  },
];

const posts = [
  {
    id: 1,
    thumbnail: "assets/thumbnail3.jpeg",
    title: "Black Holes 101 | National Geographic",
    description:
      "Explore the fascinating world of black holes, from their formation to their mysterious properties. Learn about the latest discoveries in astrophysics and the mind-boggling phenomena that occur near these cosmic giants.",
    visibility: "Public",
    monetization: "On",
    views: 7000000,
    comments: 100000,
  },
  {
    id: 2,
    thumbnail: "assets/thumbnail4.jpeg",
    title: "Adventures in Switzerland: Exploring Paradise",
    description:
      "Join us on a breathtaking journey through the stunning landscapes and vibrant culture of Bali, Indonesia. From pristine beaches to lush rice terraces, this travel vlog captures the essence of this tropical paradise.",
    visibility: "Public",
    monetization: "On",
    views: 15000,
    comments: 1200,
  },
  {
    id: 3,
    thumbnail: "assets/thumbnail5.jpeg",
    title: "Delicious Homemade Pizza Recipe",
    description:
      "Discover the secrets to making mouthwatering homemade pizza from scratch. This step-by-step tutorial covers everything from crafting the perfect pizza dough to selecting the freshest ingredients and achieving a crispy, cheesy masterpiece.",
    visibility: "Public",
    monetization: "On",
    views: 3900000,
    comments: 45000,
  },
];

const lives = [];

const columns = [
  { field: "id", hide: true },
  {
    field: "video",
    headerName: "Video",
    minWidth: 500,
    renderCell: (param) => {
      const videoThumbnail = param.row.thumbnail;
      const videoTitle = param.row.title;
      const videoDescription = param.row.description;
      return (
        <Box sx={styles.videoColumn}>
          <Box
            component="img"
            sx={styles.videoThumbnail}
            src={videoThumbnail}
          />
          <Box sx={styles.videoDetail}>
            <Typography sx={styles.videoTitle}>{videoTitle}</Typography>
            <Typography sx={styles.videoDescription}>
              {videoDescription}
            </Typography>
          </Box>
        </Box>
      );
    },
  },
  { field: "visibility", headerName: "Visibility", minWidth: 130 },
  { field: "monetization", headerName: "Monetization", minWidth: 160 },
  { field: "views", headerName: "Views", minWidth: 130 },
  { field: "comments", headerName: "Comments", minWidth: 150 },
];

export default function Content() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabs = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const DataTable = ({ index }) => {
    const currentList = () => {
      switch (index) {
        case 0:
          return videos;
        case 1:
          return lives;
        case 2:
          return posts;
        default:
          return [];
      }
    };

    return (
      <DataGrid
        rows={currentList()}
        columns={columns}
        columnVisibilityModel={{
          id: false,
        }}
        autoHeight
        rowHeight={80}
        checkboxSelection
      />
    );
  };

  return (
    <Box>
      <Typography variant="h5" sx={styles.pageTitle}>
        Content
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={currentTab} onChange={handleTabs}>
          {["Videos", "Live", "Post"].map((e, i) => (
            <Tab key={i} label={e} id={`tab-${i}`} />
          ))}
        </Tabs>
        {[...Array(3)].map((e, i) => (
          <TabPanel key={i} value={currentTab} index={i}>
            <DataTable index={i} />
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  pageTitle: {
    mb: 2,
  },
  videoColumn: {
    my: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  videoThumbnail: {
    width: 120,
    height: 70,
    objectFit: "cover",
  },
  videoDetail: {
    ml: 2,
    width: 360,
    pr: 3,
  },
  videoTitle: {
    fontSize: "0.8rem",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    ":hover": {
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
  videoDescription: {
    fontSize: "0.7rem",
    color: "neutral.normal",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
};
