import React from "react";
import Navbar from "../Navbar/Nav";
import InfoSection from "../../Info/index";
import { homeObjOne } from "../../Info/data";
import Bg from "../Assets/pexels-matheus-natan-3297593.jpg";
const Home = () => {
  return (
    <>
      <Navbar />

      <InfoSection {...homeObjOne} />
    </>
  );
};

export default Home;
