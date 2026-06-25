import React from "react";
import Introducing from "../../Component/Introducing/Introducing";
import Analysis from "../../Component/Analysis/Analysis";
import Plans from "../../Component/Plans/Plans";
import Questions from "../../Component/Questions/Questions";
import Marketing from "../../Component/Marketing/Marketing";

const Home = () => {
  return (
    <>
      <Introducing />
      <Analysis />
      <Plans />
      <Questions />
      <Marketing />
    </>
  );
};

export default Home;