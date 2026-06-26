import React from "react";
import "./Home.css";

import Navbar from "../../Component/Navbar/Navbar";
import MainHome from "../../Component/MainHome/MainHome";
import MordenIdea from "../../Component/MordenIdea/MordenIdea";
import BusinessIdea from "../../Component/BusinessIdea/BusinessIdea";
import OverView from "../../Component/OverView/OverView";
import Floating from "../../Component/Floating/Floating";

import Introducing from "../../Component/Introducing/Introducing";
import Analysis from "../../Component/Analysis/Analysis";
import Plans from "../../Component/Plans/Plans";
import Questions from "../../Component/Questions/Questions";
import Marketing from "../../Component/Marketing/Marketing";

import Footer from "../../Component/Footer/Footer";
import Floating from "../../Component/Floating/Floating";

const Home = () => {
  return (
    <div>
      <Navbar />

      <MainHome />
      <MordenIdea />
      <BusinessIdea />
      <OverView />
<<<<<<< HEAD
      <Introducing />
      <Footer />
      
=======
>>>>>>> ab3d377d888fbd3b1c7da6351145de7d23766074

      <Introducing />
      <Analysis />
      <Plans />
      <Questions />
      <Marketing />
      <Floating /> 
      
      <Footer />
    </div>
  );
};

export default Home;