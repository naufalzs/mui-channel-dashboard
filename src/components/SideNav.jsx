import {
  AnalyticsOutlined,
  DashboardOutlined,
  SourceOutlined,
  StyleOutlined,
} from "@mui/icons-material";
import { Avatar, Box, Typography, useTheme } from "@mui/material";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

export default function Sidenav({ collapsedSidebar, setCollapsedSidebar }) {
  const theme = useTheme();

  return (
    <Sidebar
      style={{
        height: "100%",
        top: "auto",
      }}
      breakPoint="md"
      backgroundColor={theme.palette.neutral.light}
      collapsed={collapsedSidebar}
      toggled={!collapsedSidebar}
      onBackdropClick={() => setCollapsedSidebar(!collapsedSidebar)}
    >
      <Box style={styles.avatarContainer}>
        <Avatar
          src="src/assets/avatars/naufal.png"
          alt="Naufal Channel"
          sx={styles.avatar}
        />
        {!collapsedSidebar && (
          <>
            <Typography variant="body2" mt={0.5}>
              Your Channel
            </Typography>
            <Typography variant="overline">Code with Naufal</Typography>
          </>
        )}
      </Box>
      <Menu>
        <MenuItem active icon={<DashboardOutlined />}>
          <Typography variant="body2">Dashboard</Typography>
        </MenuItem>
        <MenuItem active icon={<SourceOutlined />}>
          <Typography variant="body2">Content</Typography>
        </MenuItem>
        <MenuItem active icon={<AnalyticsOutlined />}>
          <Typography variant="body2">Analytics</Typography>
        </MenuItem>
        <MenuItem active icon={<StyleOutlined />}>
          <Typography variant="body2">Customization</Typography>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  avatarContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "40px 0",
  },
  avatar: {
    width: "40%",
    height: "auto",
    border: "1px solid #000",
  },
};
