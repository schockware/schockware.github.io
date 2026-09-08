import { Route, Routes } from "react-router-dom";
import { Nav } from "./components/Nav";
import { RouteFocusHandler } from "./components/RouteFocusHandler";
import { HomePage } from "./pages/HomePage";
import { ResumePage } from "./pages/ResumePage";
import { CvPage } from "./pages/CvPage";
import { SkillsPage } from "./pages/SkillsPage";

export function App() {
  return (
    <>
      <Nav />
      <RouteFocusHandler>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume/:tier" element={<ResumePage />} />
          <Route path="/cv" element={<CvPage />} />
          <Route path="/skills" element={<SkillsPage />} />
        </Routes>
      </RouteFocusHandler>
    </>
  );
}
