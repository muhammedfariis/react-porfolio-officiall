import { Routes, Route } from "react-router-dom";
import Navbar from "../components/common/navbar";
import Home from "../pages/home";
import About from "../pages/about";
import Project from "../pages/project";
import Footer from "../components/common/footer";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
