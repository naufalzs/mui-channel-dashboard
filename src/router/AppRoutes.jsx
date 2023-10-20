import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard/Index";
import Content from "../components/Content/Index";
import Analytics from "../components/Analytics/Index";
import Customization from "../components/Customization/Index";

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
