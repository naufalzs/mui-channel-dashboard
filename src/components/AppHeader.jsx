import {
  Logout,
  MenuTwoTone,
  Notifications,
  Settings,
} from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function AppHeader() {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = !!anchorEl;

  const toggleMenu = (event) => {
    if (event) return setAnchorEl(event.currentTarget);
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={styles.appBar}>
      <Toolbar>
        <IconButton color="secondary" onClick={() => console.log("logo")}>
          <MenuTwoTone />
        </IconButton>
        <Box ml={2}>
          <Typography variant="logo">NaufalZS</Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="secondary">
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
        </IconButton>
        <IconButton color="secondary">
          <Settings />
        </IconButton>
        <IconButton color="secondary" onClick={toggleMenu}>
          <Logout />
        </IconButton>
      </Toolbar>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        open={isMenuOpen}
        onClose={() => toggleMenu(false)}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  appBar: {
    bgcolor: "neutral.main",
  },
};
