import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState, useEffect } from "react";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Content from "./components/Content";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages";
import Dropdown from "./components/Dropdown";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(()=> {
    const hideMenu = () => {
      if(window.innerWidth> 768 && isOpen ){
        setIsOpen(false)
      }      
    }
    window.addEventListener('resize', hideMenu)

    return() =>{
      window.removeEventListener('resize', hideMenu)
    }
    
  })

  
  return (
    <>
    <div className="bg-cyan-300">
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero />
      <Content />

      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Routes>
      <Footer />
      </div>
    </>
  );
}

export default App;
