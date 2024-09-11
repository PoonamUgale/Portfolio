import React from "react";
import portfolio from "../../portfolio.json";
import React, { useEffect, useState } from "react";
import PageHeader from "../Components/header";
import CarouselHeader from "../Components/carouselheader";
import Paragraph from "../Components/paragraph";
import PageLogo from "../Components/pagelogo";
import PageSubheader from "../Components/employeeheader";
import PortfolioCard from "../Components/portfoliocard";
import SubHeader from "../Components/subheader";
import About from "../Pages/About";
import Education from "../Pages/Education";
import Skills from "../Pages/skills";
import Work from "../Pages/work";
import Contact from "../Pages/contact";
import Navbar from "../Components/navbar";

const ProfileInformation = () => {
  return (
    <div className="profile-information">
      {" "}
      <Navigation />{" "}
    </div>
  );
};

const Navigation = () => {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Education":
        return <Education />;
      case "Work":
        return <Work />;
      case "Skills":
        return <Skills />;
      case "Contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="App">
      <Navbar onNavClick={setCurrentPage} />
      <div className="content">{renderPage()}</div>
    </div>
  );
};

export default ProfileInformation;
