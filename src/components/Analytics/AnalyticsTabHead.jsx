import { forwardRef } from "react";
import { Box, Button, Typography } from "@mui/material";

const AnalyticsTabHead = forwardRef(
  ({ title, value, icon, subtitle, children, onClick }, ref) => (
    <Button ref={ref} onClick={onClick} sx={styles.container}>
      <Typography sx={styles.title}>{title}</Typography>
      <Box sx={styles.tabValueRow}>
        <Typography sx={styles.tabValue}>{value}</Typography>
        {icon}
      </Box>
      <Typography sx={styles.subtitle}>{subtitle}</Typography>
      {children}
    </Button>
  )
);

export default AnalyticsTabHead;

/** @type {import("@mui/material").SxProps} */
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "neutral.normal",
    textTransform: "capitalize",
    py: 2,
    border: 1,
    borderColor: "neutral.medium",
    flexGrow: 1,
  },
  title: {
    fontSize: "0.8rem",
    fontWeight: 500,
  },
  tabValueRow: {
    display: "flex",
    alignItems: "center",
  },
  tabValue: {
    fontSize: { xs: "1rem", md: "1.5rem" },
    color: "neutral.main",
    mr: 1,
  },
  subtitle: {
    fontSize: "0.6rem",
    fontStyle: "italic",
    textTransform: "lowercase",
    display: { xs: "none", sm: "inline" },
  },
};
