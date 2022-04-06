import "./App.css";
import React from "react";
import InfoSection from "./Info";
import { homeObjOne } from "./Info/data";
import GlobalStyle from "./global-style";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Nav";
import ServicePage from "./components/Service/index";
import { serviceObjOne } from "./components/Service/data";
import About from "./components/About/About";
import Feedback from "./components/Feedback/Feedback";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
      <ServicePage {...serviceObjOne} />
      <About />
      {/* <Feedback /> */}
      <Footer />

      {/* <Routes>
        <Route path="/" element={<InfoSection {...homeObjOne} />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<ServicePage {...serviceObjOne} />} />
      </Routes> */}
    </>
  );
}

export default App;
