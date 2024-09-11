import React from "react";
import portfolio from "../../portfolio.json";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
// import { BsBookFill } from "react-icons/bs";

const Education = () => {
  return (
    <div className="container">
      <EducationHeader />
      <EProfile />
      <div class="edication-header">
        <span className="education-icon">
          {/* <i className="e-icon">
            <BsBookFill />
          </i> */}
        </span>

        {/* <div className=""></div> */}
      </div>
    </div>
  );
};

const EProfile = () => {
  const [university, setuniversity] = useState([]);
  useEffect(() => {
    setuniversity(portfolio.university);
  }, []);
  return (
    <div className="university-container">
      {(() => {
        const arr = [];
        for (let i = 0; i < university.length; i++) {
          const item = university[i];
          arr.push(
            <div key={i + 1} className="university-item">
              <div className="university">
                <h2 className="degree">{item.degree}</h2>
                <p className="year">{item.year}</p>
              </div>
              <div>
                <p className="university-location">
                  {item.university_location}
                </p>
                <p className="university-about">{item.university_about}</p>
              </div>
              <div className="subject-container">
                {(() => {
                  const subjectArr = [];
                  for (let j = 0; j < (item.subject || []).length; j++) {
                    const subject = item.subject[j];
                    subjectArr.push(
                      <span key={j} className="subject">
                        {subject}
                      </span>
                    );
                  }

                  return subjectArr;
                })()}
              </div>
              <div className="project-container">
                {(() => {
                  const projectArr = [];
                  for (let k = 0; k < (item.project || []).length; k++) {
                    const project = item.project[k];
                    projectArr.push(
                      <li key={k} className="project">
                        {project}
                      </li>
                    );
                  }

                  return projectArr;
                })()}
              </div>
            </div>
          );
        }
        return arr;
      })()}
    </div>
  );
};
const EducationHeader = () => {
  const [educationHeader, setData] = useState(null);
  useEffect(() => {
    setData(portfolio.educationHeader);
  }, []);
  return <div className="head">{educationHeader}</div>;
};

export default Education;
