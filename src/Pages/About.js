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

const About = () => {
  return (
    <div className="container">
      {/* <Navigation /> */}
      <div className="page-header">
        <PageHeader />
      </div>
      <div className="first-para">
        <Paragraph />
      </div>
      <div className="sub-header">
        <SubHeader />
      </div>
      <div className="card-container">
        <div>
          <PortfolioCard />
        </div>
      </div>
      <div className="carousel-header">
        <CarouselHeader />
      </div>
      <div className="page-carousel">
        <PageLogo />
      </div>
    </div>
  );
};

export default About;
