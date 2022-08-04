import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { state } = useLocation();
  const { pref } = state;

  return (
    <div>
      <div>RESTAURANTS</div>
      <div>
        <p>Preferences: {state.pref}</p>
      </div>
    </div>
  );
};

export default Home;
