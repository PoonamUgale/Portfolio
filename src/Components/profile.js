import React from "react";
import ReactDOM from "react-dom/client";
import React, { useEffect, useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import { FaMobileButton } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { IoLocationSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import portfolio from "../../portfolio.json";
const Profile = () => {
  return (
    <div className="Profile">
      <div className="profile-image">
        <img src="data:image/jpeg;base64,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" />
      </div>
      <div className="employee-info">
        <EmployeeInfo />
      </div>
      <div className="separator"></div>
      <ContactInfo />
      {/* Seperator div */}
      <div className="separator2"></div>
      <div className="socials-link">
        <a href="https://github.com/brandonabela/">
          <i className="github">
            <FaGithub />
          </i>
        </a>

        <a href="https://www.linkedin.com/in/brandon-abela/">
          <i className="linkedin">
            <ImLinkedin />
          </i>
        </a>
      </div>
    </div>
  );
};
const EmployeeInfo = () => {
  const [EmployeeName, setEmployeeName] = useState(null);
  const [section, setsection] = useState(null);
  useEffect(() => {
    setEmployeeName(portfolio.EmployeeName);
    setsection(portfolio.section);
  }, []);
  return (
    <div className="employee-info">
      <h2 className="employee-name">{EmployeeName}</h2>

      <span className="profile">{section}</span>
    </div>
  );
};

const ContactInfo = () => {
  const [isDivOpen, setIsDivOpen] = useState(false);

  const toggleDiv = () => {
    setIsDivOpen(!isDivOpen);
  };
  return (
    <div className="contact-info">
      <button className="toggle-button" onClick={toggleDiv}>
        {isDivOpen ? "Contacts " : "Contacts"}
      </button>
      <div className={`icon-text ${isDivOpen ? "open" : "closed"}`}>
        <span className="overhead"> EMAIL : </span>
        <span className="icon-box">
          <i className="email-icon">
            <TfiEmail />
          </i>
        </span>

        <a className="overhead-info" href="mailto:brandonabela9@gmail.com">
          brandonabela9@gmail.com
        </a>
      </div>
      <div className={`icon-text ${isDivOpen ? "open" : "closed"}`}>
        <span className="overhead"> PHONE : </span>
        <span className="icon-box">
          <i className="bi-phone">
            <FaMobileButton />
          </i>
        </span>
        <span className="overhead-info"> (+356) 99 433 970 </span>
      </div>
      <div className={`icon-text ${isDivOpen ? "open" : "closed"}`}>
        <span className="overhead"> BIRTHDAY : </span>
        <span className="icon-box">
          <i className="bi-phone">
            <SlCalender />
          </i>
        </span>
        <span className="overhead-info">12 January 1998 </span>
      </div>
      <div className={`icon-text ${isDivOpen ? "open" : "closed"}`}>
        <span className="overhead"> LOCATION : </span>
        <span className="icon-box">
          <i className="bi-phone">
            <IoLocationSharp />
          </i>
        </span>
        <span className="overhead-info">Birkirkara,Malta </span>
      </div>
    </div>
  );
};

export default Profile;
