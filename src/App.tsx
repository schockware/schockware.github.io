import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { RouteFocusHandler } from "./components/RouteFocusHandler";
import { HomePage } from "./pages/HomePage";
import { ResumeIndexPage } from "./pages/ResumeIndexPage";
import { ResumePage } from "./pages/ResumePage";
import { CvPage } from "./pages/CvPage";
import { SkillsPage } from "./pages/SkillsPage";

export function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Nav />
      <RouteFocusHandler>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<ResumeIndexPage />} />
          <Route path="/resume/:tier" element={<ResumePage />} />
          <Route path="/cv" element={<CvPage />} />
          <Route path="/skills" element={<SkillsPage />} />
        </Routes>
      </RouteFocusHandler>
      <Footer />
    </Box>
  );
}
