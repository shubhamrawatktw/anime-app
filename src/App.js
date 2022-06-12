import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Anime from "./component/Anime";
import About from "./component/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-black">
      <Navbar />

      <Routes>
        <Route path="/anime" element={<Anime />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
