import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import theme from "./config/theme";
import Sidenav from "./components/Sidenav";
import AppHeader from "./components/AppHeader";
import { useState } from "react";

function App() {
  const [collapsedSidebar, setCollapsedSidebar] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <AppHeader
          collapsedSidebar={collapsedSidebar}
          setCollapsedSidebar={setCollapsedSidebar}
        />
        <Box sx={styles.container}>
          <Sidenav
            collapsedSidebar={collapsedSidebar}
            setCollapsedSidebar={setCollapsedSidebar}
          />
          <Box component={"main"}></Box>
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
};

export default App;
