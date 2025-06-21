import "./App.css";
import LandingPage from "./pages/LandingPage";
import PhotoGallery from "./pages/PhotoGallery";
import Projects from "./pages/Projects";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gallery" element={<PhotoGallery />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
