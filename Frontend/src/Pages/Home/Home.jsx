import React from "react";
import MainHome from "../../Component/MainHome/MainHome";
import MordenIdea from "../../Component/MordenIdea/MordenIdea";
import BusinessIdea from "../../Component/BusinessIdea/BusinessIdea";
import OverView from "../../Component/OverView/OverView";
import Introducing from "../../Component/Introducing/Introducing";
import Plans from "../../Component/Plans/Plans";
import Questions from "../../Component/Questions/Questions";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <div id="home"><MainHome /></div>
      <div id="why-growth"><MordenIdea /></div>
      <div id="why-us"><BusinessIdea /></div>
      <div id="pricing"><Plans /></div>
      <div id="reviews"><Introducing /></div>
      <div id="tech"><OverView /></div>
      <div id="faqs"><Questions /></div>
      <div id="contact"><Footer /></div>
    </div>
  );
};

export default Home;