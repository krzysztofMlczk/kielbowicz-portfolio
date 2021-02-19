import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";
import heroData from "./fixtures/hero.json";
import AboutSection from "./components/about";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection {...heroData} />
      <AboutSection />
    </>
  );
}

export default App;
