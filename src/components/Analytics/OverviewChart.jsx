import { forwardRef, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";

import AnalyticsTabHead from "./AnalyticsTabHead";
import { ArrowDropDownCircleSharp, CheckCircle } from "@mui/icons-material";
import TabPanel from "../TabPanel";
import { Line } from "react-chartjs-2";
import { getMainChartData, mainChartOptions } from "./ChartConfig";

const ViewsTabHead = forwardRef((props, ref) => (
  <AnalyticsTabHead
    {...props}
    ref={ref}
    title="Views"
    value="21.4K"
    icon={<ArrowDropDownCircleSharp />}
    subtitle="700 less than usual"
  />
));

const WatchTimeTabHead = forwardRef((props, ref) => (
  <AnalyticsTabHead
    {...props}
    ref={ref}
    title="Watch Time"
    value="400"
    icon={
      <ArrowDropDownCircleSharp
        color="green"
        sx={{ transform: "rotate(180deg)" }}
      />
    }
    subtitle="27 more than usual"
  />
));

const SubscriberTabHead = forwardRef((props, ref) => (
  <AnalyticsTabHead
    {...props}
    ref={ref}
    title="Subscriber"
    value="+140"
    icon={<CheckCircle color="green" />}
    subtitle="about the same as usual"
  />
));

const RevenueTabHead = forwardRef((props, ref) => (
  <AnalyticsTabHead
    {...props}
    ref={ref}
    title="Revenue"
    value="$240.02"
    icon={
      <ArrowDropDownCircleSharp
        color="green"
        sx={{ transform: "rotate(180deg)" }}
      />
    }
    subtitle="300 more than usual"
  />
));

export default function OverviewChart() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabs = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const LineChartSection = () => (
    <Box sx={styles.mainChart}>
      <Line options={mainChartOptions} data={getMainChartData()} />
    </Box>
  );

  return (
    <Box sx={styles.container}>
      <Tabs value={currentTab} onChange={handleTabs}>
        <Tab component={ViewsTabHead} id="tab-0" />
        <Tab component={WatchTimeTabHead} id="tab-1" />
        <Tab component={SubscriberTabHead} id="tab-2" />
        <Tab component={RevenueTabHead} id="tab-3" />
      </Tabs>
      {[...Array(4)].map((e, i) => (
        <TabPanel key={i} value={currentTab} index={i} mt={0}>
          <LineChartSection />
        </TabPanel>
      ))}
    </Box>
  );
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  container: {
    mt: 4,
    width: "100%",
  },
  mainChart: {
    height: 250,
    border: 1,
    borderColor: "neutral.medium",
    pt: 4,
    borderTop: "none",
    borderRadius: 1,
  },
};
