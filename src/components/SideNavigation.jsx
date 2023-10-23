import {
  AnalyticsOutlined,
  DashboardOutlined,
  SourceOutlined,
  StyleOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";

export default function SideNavigation({
  collapsedSidebar,
  setCollapsedSidebar,
  toggleSidebar,
  setToggleSidebar,
}) {
  const theme = useTheme();
  const location = useLocation();

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Sidebar
      style={{
        height: "100%",
        top: "auto",
      }}
      breakPoint="md"
      backgroundColor={theme.palette.neutral.light}
      collapsed={collapsedSidebar}
      toggled={toggleSidebar}
      onBackdropClick={() =>
        isMobile
          ? setToggleSidebar(!toggleSidebar)
          : setCollapsedSidebar(!collapsedSidebar)
      }
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
      <Menu
        onClick={() => setToggleSidebar(!toggleSidebar)}
        menuItemStyles={{
          button: ({ active }) => {
            return {
              backgroundColor: active
                ? theme.palette.neutral.medium
                : theme.palette.neutral.light,
            };
          },
        }}
      >
        <MenuItem
          active={location.pathname === "/"}
          component={<Link to={"/"} />}
          icon={<DashboardOutlined />}
        >
          <Typography variant="body2">Dashboard</Typography>
        </MenuItem>
        <MenuItem
          active={location.pathname === "/content"}
          component={<Link to={"/content"} />}
          icon={<SourceOutlined />}
        >
          <Typography variant="body2">Content</Typography>
        </MenuItem>
        <MenuItem
          active={location.pathname === "/analytics"}
          component={<Link to={"/analytics"} />}
          icon={<AnalyticsOutlined />}
        >
          <Typography variant="body2">Analytics</Typography>
        </MenuItem>
        <MenuItem
          active={location.pathname === "/customization"}
          component={<Link to={"/customization"} />}
          icon={<StyleOutlined />}
        >
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
