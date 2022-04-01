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

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <InfoSection {...homeObjOne} />
      <h1
        style={{
          fontWeight: "bold",
          color: "#3290d7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Service
      </h1>
      <ServicePage {...serviceObjOne} />

      <About />
      <Footer />
    </>
  );
}

export default App;
