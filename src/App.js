import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Createstory from "./pages/Createstory";
import Exp from "./pages/ExploreStories";
import Connect from "./pages/Connect";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-story" element={<Createstory />} />
          <Route path="/explore-stories" element={<Exp />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
