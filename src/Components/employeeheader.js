import React, { useEffect, useState } from "react";
import React from "react";
import portfolio from "../../portfolio.json";
import ReactDOM from "react-dom/client";

const PageSubheader = () => {
  const [pagesubheader, setData] = useState(null);
  useEffect(() => {
    setData(portfolio.pagesubheader);
  }, []);
  return <div className="head">{pagesubheader}</div>;
};

export default PageSubheader;
