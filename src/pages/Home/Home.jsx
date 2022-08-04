import React from "react";
import MainPageTemplate from "../../common/templates/MainPageTemplate.jsx";
import { useLocation } from "react-router-dom";

const Home = () => {
  // const { state } = useLocation();
  // const { pref } = state;

  return (
    <div>
      <MainPageTemplate>Restaurants</MainPageTemplate>
      {/*<div>*/}
      {/*  <p>Preferences: {state.pref}</p>*/}
      {/*</div>*/}
    </div>
  );
};

export default Home;
