import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteNavigation from "./components/Navbar.jsx";
import Landing from "./pages/Home.jsx";
import OurStory from "./pages/About.jsx";
import GetInTouch from "./pages/Contact.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <SiteNavigation />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/about" element={<OurStory />} />
          <Route path="/contact" element={<GetInTouch />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
