import React, { useEffect, useState } from "react";
import React from "react";
import portfolio from "../../portfolio.json";
import ReactDOM from "react-dom/client";

const SubHeader = () => {
  const [subHeader, setData] = useState(null);
  useEffect(() => {
    setData(portfolio.subHeader);
  }, []);
  return (
    <div className="head">
      <h1>{subHeader}</h1>
    </div>
  );
};

export default SubHeader;
