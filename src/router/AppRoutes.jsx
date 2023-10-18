import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Page/Dashboard";
import Content from "../components/Page/Content";
import Analytics from "../components/Page/Analytics";
import Customization from "../components/Page/Customization";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/content" element={<Content />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/customization" element={<Customization />} />
    </Routes>
  );
}

export default AppRoutes;
