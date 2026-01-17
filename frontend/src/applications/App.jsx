import { Routes, Route } from "react-router-dom";
import Navbar from "../components/common/navbar";
import Home from "../pages/home";
import About from "../pages/about";
import Project from "../pages/project";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/project" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
