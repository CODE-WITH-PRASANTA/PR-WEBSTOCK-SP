import React from "react";
import "./Home.css";

import Navbar from "../../Component/Navbar/Navbar";
import MainHome from "../../Component/MainHome/MainHome";
import MordenIdea from "../../Component/MordenIdea/MordenIdea";
import BusinessIdea from "../../Component/BusinessIdea/BusinessIdea";
import OverView from "../../Component/OverView/OverView";

import Introducing from "../../Component/Introducing/Introducing";
import Analysis from "../../Component/Analysis/Analysis";
import Plans from "../../Component/Plans/Plans";
import Questions from "../../Component/Questions/Questions";
import Marketing from "../../Component/Marketing/Marketing";

import Footer from "../../Component/Footer/Footer";


const Home = () => {
  return (
    <div>
      <Navbar />

      <MainHome />
      <MordenIdea />
      <BusinessIdea />
      <OverView />

      <Introducing />
      <Analysis />
      <Plans />
      <Questions />
      <Marketing />
      
      <Footer />
    </div>
  );
};

export default Home;