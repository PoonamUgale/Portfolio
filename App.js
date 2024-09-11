import React from "react";
import ReactDOM from "react-dom/client";

//Header Component
const Header = () => {
  return (
    <div className="header">
      <h1 className="page-header">About Me</h1>

      <div className="nav-items">
        <ul>
          <li>About</li>
          <li>Education</li>
          <li>Work</li>
          <li>Skills</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

     
]);

console.log(parent);

const  root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);