import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import theme from "./config/theme";
import Sidenav from "./components/Sidenav";
import AppHeader from "./components/AppHeader";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <AppHeader />
        <Box sx={styles.container}>
          <Sidenav />
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
