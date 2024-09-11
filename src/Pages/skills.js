import React from "react";
import portfolio from "../../portfolio.json";
import React, { useEffect, useState } from "react";
import { FaFileCode } from "react-icons/fa";
const Skills = () => {
  return (
    <div className="container">
      <SkillsHeader />
      <EProfile />
    </div>
  );
};

const EProfile = () => {
  const [skills, setskills] = useState([]);
  useEffect(() => {
    setskills(portfolio.skills);
  }, []);
  return (
    <div className="skillContainer">
      {(() => {
        const arr = [];
        for (let i = 0; i < skills.length; i++) {
          const item = skills[i];
          arr.push(
            <div key={i} className="skill-box">
              <h2 className="specification">
                <FaFileCode />
                {item.specification}
              </h2>
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
            </div>
          );
        }
        return arr;
      })()}
    </div>
  );
};

const SkillsHeader = () => {
  const [skillsHeader, setData] = useState(null);
  useEffect(() => {
    setData(portfolio.skillsHeader);
  }, []);
  return <div className="head">{skillsHeader}</div>;
};

export default Skills;
