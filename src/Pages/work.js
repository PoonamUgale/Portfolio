import React from "react";
import portfolio from "../../portfolio.json";
import React, { useEffect, useState } from "react";
// import { BsBookFill } from "react-icons/bs";
const Work = () => {
  return (
    <div className="container">
      <WorkHeader />
      <EProfile />

      <div class="work-header">
        <span className="education-icon">
          {/* <i className="e-icon">
            <BsBookFill />
          </i> */}
        </span>
      </div>
    </div>
  );
};

const EProfile = () => {
  const [work, setwork] = useState([]);
  useEffect(() => {
    setwork(portfolio.work);
  }, []);
  return (
    <div className="university-container">
      {(() => {
        const arr = [];
        for (let i = 0; i < work.length; i++) {
          const item = work[i];
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
              </div>
              <div className="skill-project">
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
/* <div className="university-item">
        <h6>Data Scientist</h6>
        <p className="year">July 2021 - Present</p>
      </div>
      <p className="university-location">Bank of Valletta, Malta</p>
      <ul class="workList">
        <li>
          Managed the bank's Customer Risk Assessment and Enterprise-Wide
          Business Risk Assessment.
        </li>
        <li>
          Conducted data collection and analysis, simulations, and annual
          reviews for the AFC Unit.
        </li>
        <li>
          Developed a Data Lake containing customer information and
          transactions, and constructed Power BI reports using the data.
        </li>
      </ul>

      <div className="subject-container">
        <span className="subject"> Python </span>
        <span className="subject"> Scikit Learn </span>
        <span className="subject"> Matplotlib</span>
        <span className="subject"> Pyvis </span>
        <span className="subject"> MySQL</span>
        <span className="subject">Microsoft SSIS</span>
        <span className="subject"> Microsoft Power BI </span>
      </div>
      <div className="university-item">
        <h6>Visiting Assistant Lecturer</h6>
        <p className="year">Oct 2020 - Jan 2021</p>
      </div>
      <p className="university-location">University of Malta, Malta</p>
      <ul className="workList">
        <li>
          Delivered C++ tutorials to second-year computer engineering
          undergraduates.
        </li>
      </ul>
      <div className="subject-container">
        <span className="wsubject"> C++ </span>
      </div>

      <div className="university-item">
        <h6>Researcher</h6>
        <p className="year">Jul 2020 - Sep 2020</p>
      </div>
      <p className="university-location">University of Malta, Malta</p>
      <p>
        Conducted research and developed a drone path planning algorithm
        utilising cliff photogrammetry and 3D axis movement.
      </p>
      <div className="subject-container">
        <span className="wsubject"> python </span>
        <span className="wsubject"> Blender </span>
      </div>

      <div className="university-item">
        <h6>Front End Developer</h6>
        <p className="year">Jun 2019 - Oct 2019</p>
      </div>
      <p className="university-location">Ascent Software, Malta</p>
      <p>
        Contributed to the full project lifecycle of designing multiple
        components for a financial multi-tenant portal from planning to
        successful deployment.
      </p>
      <div className="subject-container">
        <span className="subject">HTML </span>
        <span className="subject"> CSS </span>
        <span className="subject"> Typesscript </span>
        <span className="subject"> Angular Material UI </span>
        <span className="subject"> Angular CU </span>
        <span className="subject"> Swagger </span>
        <span className="subject"> Postman </span>
        <span className="subject"> Azure DevOps </span>
      </div>

      <div className="university-item">
        <h6>Front End Developer</h6>
        <p className="year">Jun 2019 - Oct 2019</p>
      </div>
      <p className="university-location">Ascent Software, Malta</p>

      <ul className="workList">
        <li>
          Contributed to the full project lifecycle of designing multiple
          components for a financial multi-tenant portal from planning to
          successful deployment.
        </li>
      </ul>
      <div className="subject-container">
        <span className="subject">HTML </span>
        <span className="subject"> CSS </span>
        <span className="subject"> Typesscript </span>
        <span className="subject"> Angular Material UI </span>
        <span className="subject"> Angular CU </span>
        <span className="subject"> Swagger </span>
        <span className="subject"> Postman </span>
        <span className="subject"> Azure DevOps </span>
      </div>
      <div className="university-item">
        <h6>Front End Developer</h6>
        <p className="year">Jun 2018 - Oct 2018</p>
      </div>
      <p className="university-location">Betsson, Malta</p>
      <ul className="workList">
        <li>
          Created a real-time dashboard displaying attributes of a
          multi-threaded web process.
        </li>
      </ul>
      <div className="subject-container">
        <span className="subject">HTML </span>
        <span className="subject"> CSS </span>
        <span className="subject"> Typesscript </span>
        <span className="subject"> Angular Material UI </span>
        <span className="subject"> Angular CU </span>
        <span className="subject"> Specflow</span>
      </div>

      <div className="university-item">
        <h6>Full Stack Developer</h6>
        <p className="year">Jun 2017 - Oct 2017</p>
      </div>
      <p className="university-location">KPMG Software, Malta</p>

      <ul className="workList">
        <li>
          Designed multiple pages of a financial web application with a focus on
          security and safeguarding data.
        </li>
      </ul>
      <div className="subject-container">
        <span className="subject">HTML </span>
        <span className="subject"> CSS </span>
        <span className="subject"> Javascript </span>
        <span className="subject"> Angular Material UI </span>
        <span className="subject"> Angular CU </span>
        <span className="subject"> Swagger </span>
        <span className="subject"> Postman </span>
        <span className="subject"> Azure DevOps </span>
      </div>

      <div className="university-item">
        <h6>Data Clerk</h6>
        <p className="year">Jun 2016 - Present</p>
      </div>
      <p className="university-location">Malta Tourism Authority, Malta</p>

      <ul className="workList">
        <li>
          Implemented a data storage solution and generated statistical reports
          from the inputted data.
        </li>
      </ul>
      <div className="subject-container">
        <span className="wsubject">Google Sheets </span>
        <span className="wsubject"> Microsoft Excel</span>
      </div>
    </div>
  );
};*/

const WorkHeader = () => {
  const [WorkHeader, setData] = useState(null);
  useEffect(() => {
    setData(portfolio.WorkHeader);
  }, []);
  return <div className="head">{WorkHeader}</div>;
};

export default Work;
