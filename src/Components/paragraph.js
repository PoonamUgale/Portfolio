import React from "react";
import React, { useEffect, useState } from "react";
import portfolio from "../../portfolio.json";
import ReactDOM from "react-dom/client";

const Paragraph = () => {
  const [summary, setSummary] = useState(null);
  const [summary1, setsummary1] = useState(null);
  useEffect(() => {
    setSummary(portfolio.summary);
    setsummary1(portfolio.summary1);
  }, []);
  return (
    <div className="paragraph">
      <p>{summary}</p>
      <br />
      <p>{summary1}</p>
    </div>
  );
};

export default Paragraph;
