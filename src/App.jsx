import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import theme from "./config/theme";
import AppHeader from "./components/AppHeader";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./router/AppRoutes";
import SideNavigation from "./components/SideNavigation";

function App() {
  const [collapsedSidebar, setCollapsedSidebar] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <AppHeader
          collapsedSidebar={collapsedSidebar}
          setCollapsedSidebar={setCollapsedSidebar}
          toggleSidebar={toggleSidebar}
          setToggleSidebar={setToggleSidebar}
        />
        <Box sx={styles.container}>
          <BrowserRouter>
            <SideNavigation
              collapsedSidebar={collapsedSidebar}
              setCollapsedSidebar={setCollapsedSidebar}
              toggleSidebar={toggleSidebar}
              setToggleSidebar={setToggleSidebar}
            />
            <Box component={"main"} sx={styles.mainSection}>
              <AppRoutes />
            </Box>
          </BrowserRouter>
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  container: {
    display: "flex",
    bgcolor: "neutral.light",
    height: "calc(100vh - 64px)",
  },
  mainSection: {
    p: { xs: 2, md: 4 },
    width: "100%",
    height: "100%",
    overflow: "auto",
  },
};

export default App;
