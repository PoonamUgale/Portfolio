import React, { useEffect, useState } from "react";
import React from "react";
import portfolio from "../../portfolio.json";
import ReactDOM from "react-dom/client";

const CarouselHeader = () => {
  const [carouselHeader, setData] = useState(null);
  useEffect(() => {
    setData(portfolio.carouselHeader);
  }, []);
  return <div className="head">{carouselHeader}</div>;
};

export default CarouselHeader;
