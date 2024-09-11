import React, { useEffect, useState } from "react";
import React from "react";
import portfolio from "../../portfolio.json";
import ReactDOM from "react-dom/client";

const PageHeader = () => {
  const [pageheader, setData] = useState(null);
  useEffect(() => {
    setData(portfolio.pageheader);
  }, []);
  return (
    <div className="head">
      <h1>{pageheader}</h1>
    </div>
  );
};

export default PageHeader;
