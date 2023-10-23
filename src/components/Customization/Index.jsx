import { Box, Tab, Tabs, Typography } from "@mui/material";
import TabPanel from "../TabPanel";
import { useState } from "react";
import { MovieFilterRounded, SlowMotionVideo } from "@mui/icons-material";

const CardCustomization = ({ icon, title, desc }) => (
  <Box sx={styles.rowContainer}>
    {icon}
    <Box sx={styles.secondColumn}>
      <Typography variant="h6" sx={styles.title}>
        {title}
      </Typography>
      <Typography
        variant="h7"
        component="p"
        color="neutral.normal"
        sx={styles.desc}
      >
        {desc}
      </Typography>
    </Box>
    <Typography variant="link" textTransform={"uppercase"} sx={{ ml: "auto" }}>
      Add
    </Typography>
  </Box>
);

export default function Customization() {
  const layoutList = [
    {
      id: 1,
      icon: <SlowMotionVideo sx={styles.rowIcon} />,
      title: "Channel trailer for people who haven't subscribed",
      desc: "Share a preview of your channel shown with people who haven’t subscribed yet.",
    },
    {
      id: 2,
      icon: <MovieFilterRounded sx={styles.rowIcon} />,
      title: "Featured video for returning subscribers",
      desc: "Highlight a video for your subscribers to watch. This video won’t be shown again at the top of your page for subscribers who have watched it.",
    },
  ];

  const [currentTab, setCurrentTab] = useState(0);

  const handleTabs = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const cardLayoutList = layoutList.map((item) => (
    <CardCustomization
      key={item.id}
      icon={item.icon}
      title={item.title}
      desc={item.desc}
    />
  ));

  return (
    <Box>
      <Typography variant="h5" sx={styles.pageTitle}>
        Content
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={currentTab} onChange={handleTabs}>
          {["Layout", "Branding", "Basic Info"].map((e, i) => (
            <Tab key={i} label={e} id={`tab-${i}`} disabled={i !== 0} />
          ))}
        </Tabs>
        <TabPanel value={currentTab} index={0}>
          <Typography variant="h6">Video Spotlight</Typography>
          <Typography variant="h7" color="neutral.normal">
            Add a video to the top of your channel homepage
          </Typography>
          {cardLayoutList}
        </TabPanel>
      </Box>
    </Box>
  );
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  pageTitle: {
    mb: 2,
  },
  rowContainer: {
    width: "100%",
    border: 1,
    borderRadius: 1,
    borderColor: "neutral.medium",
    mt: 2,
    p: 2,
    display: "flex",
    alignItems: "flex-start",
  },
  rowIcon: {
    fontSize: 40,
    color: "neutral.normal",
  },
  secondColumn: {
    ml: 1,
  },
  title: {
    lineHeight: { xs: 1.2, sm: 1.6 },
  },
  desc: { mt: { xs: 1, sm: 0 }, mr: 2 },
};
