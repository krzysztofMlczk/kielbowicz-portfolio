import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";
import heroData from "./fixtures/hero.json";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection {...heroData} />
    </>
  );
}

export default App;
