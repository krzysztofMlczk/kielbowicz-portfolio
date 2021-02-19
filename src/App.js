import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";
import heroData from "./fixtures/hero.json";
import AboutSection from "./components/about";
import aboutData from "./fixtures/about.json";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection {...heroData} />
      <AboutSection {...aboutData} />
    </>
  );
}

export default App;
