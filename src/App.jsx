import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AOS from "aos";
import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <main className="overflow-x-hidden bg-white dark:bg-black">
        <Navbar />
        <Hero />
      </main>
    </>
  );
}

export default App;
