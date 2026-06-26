import React from "react";
import "./Home.css";


import MainHome from "../../Component/MainHome/MainHome";
import MordenIdea from "../../Component/MordenIdea/MordenIdea";
import BusinessIdea from "../../Component/BusinessIdea/BusinessIdea";
import OverView from "../../Component/OverView/OverView";

import Introducing from "../../Component/Introducing/Introducing";
import Analysis from "../../Component/Analysis/Analysis";
import Plans from "../../Component/Plans/Plans";
import Questions from "../../Component/Questions/Questions";
import Marketing from "../../Component/Marketing/Marketing";




const Home = () => {
  return (
    <div>
     

      <MainHome />
      <MordenIdea />
      <BusinessIdea />
      <OverView />

      <Introducing />
      <Analysis />
      <Plans />
      <Questions />
      <Marketing />
      
      
    </div>
  );
};

export default Home;