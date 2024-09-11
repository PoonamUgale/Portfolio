import React, { useEffect, useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import portfolio from "../portfolio.json";
import Profile from "./Components/profile";

import Portfolio from "./Pages/portfolio";

import ProfileInformation from "./Components/profileinformation";

const Body = () => {
  return (
    <div className="app">
      <Profile />
      {/* <ProfileInformation /> */}
      <ProfileInformation />
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="Main">
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
