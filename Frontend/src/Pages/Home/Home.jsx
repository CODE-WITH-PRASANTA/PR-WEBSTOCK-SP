import React from "react";
import "./Home.css";
import MainHome from "../../Component/MainHome/MainHome";
import MordenIdea from "../../Component/MordenIdea/MordenIdea";
import Navbar from "../../Component/Navbar/Navbar";
import Introducing from "../../Component/Introducing/Introducing";
import Footer from "../../Component/Footer/Footer";
import BusinessIdea from "../../Component/BusinessIdea/BusinessIdea";
import OverView from "../../Component/OverView/OverView";
import Floating from "../../Component/Floating/Floating";

const Home = () => {
  return (
    <div>
      <Navbar />
      <MainHome />
      <MordenIdea />
      <BusinessIdea />
      <OverView />
      <Introducing />
      <Footer />
      

    </div>
  );
};

export default Home;