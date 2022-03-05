import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import {
  HeroSection,
  About,
  Roadmap,
  Sidebar,
  Navbar,
  Faqs,
  Footer,
  SoldOutTopBar,
} from "./components";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <SoldOutTopBar />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <About />
      <Roadmap />
      <Faqs />
      <Footer />
    </Router>
  );
}

export default App;
