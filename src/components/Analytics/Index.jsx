import { useState } from "react";
import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";

import TabPanel from "../TabPanel";
import OverviewChart from "./OverviewChart";

export default function Analytics() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabs = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Box>
      <Typography variant="h5" sx={styles.pageTitle}>
        Content
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={currentTab} onChange={handleTabs}>
          {["Overview", "Content", "Audience", "Revenue"].map((e, i) => (
            <Tab key={i} label={e} id={`tab-${i}`} disabled={i !== 0} />
          ))}
        </Tabs>
        <TabPanel value={currentTab} index={0}>
          <Box sx={styles.overviewContainer}>
            <Box sx={styles.statsContainer}>
              <Typography variant="h5">
                Your channel got 23,084 views in the last 28 days
              </Typography>
              <OverviewChart />
              <Divider sx={styles.Divider} />
            </Box>
            <Box></Box>
          </Box>
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
};
