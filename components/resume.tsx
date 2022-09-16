import { FunctionComponent } from "react";
import styles from "../styles/components/resume.module.css";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";

// images
const gow = "../images/gow.png";


interface Prop{
  fields:any
}

const Resume = (props:Prop) => {
  
  const {fields} = props
  

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <div className={styles.resumeDiv}>
      <div className={styles.rectangleDiv} />
      <div className={styles.muraliDharanS}>{fields.name}</div>
      <div className={styles.bachelorOfComputerScienceA}>
        {fields.education}
      </div>
      <img
        className={styles.iMG20220318WA0009Copy1}

        src={gow}
      />
      <div className={styles.rectangleDiv1} />
      <a
        className={styles.muralidharans2601gmailcom}
        href="mailto:muralidharans2601@gmail.com"
        target="_blank"
      >
        <MailIcon sx={{ mr: 1 }} /> muralidharans2601@gmail.com
      </a>

      <div className={styles.div}> <LocalPhoneIcon sx={{ mr: 1 }} style={{ transform: "rotate(10deg)" }} />{fields.phone}</div>

      <div className={styles.thirupattur635852}><LocationOnIcon sx={{ mr: 1 }} />Thirupattur - 635 852</div>

      <div className={styles.muralidharannetlifyappDiv}>
        <LinkedInIcon sx={{ mr: 1 }} />  @linkedin
      </div>
      <div className={styles.rectangleDiv2} />
      <div className={styles.eDUCATIONDiv}>EDUCATION</div>
      <div className={styles.lANGUAGESDiv}>LANGUAGES</div>
      <div className={styles.bEComputerScienceAndEngi}>
        <ul className={styles.thStandardStateBoard}>
          <li className={styles.skillRackPlatformLi}>
            <span className={styles.bEComputerScience}>
              B.E. Computer Science and Engineering
            </span>
          </li>
        </ul>
        <p className={styles.velammalInstituteOfTechnolo}>
          <span>Velammal Institute of Technology</span>
        </p>
        <p className={styles.velammalInstituteOfTechnolo}>
          <span>Panchetti - 04. | 2019 - 2023</span>
        </p>
        <p className={styles.velammalInstituteOfTechnolo}>
          <span className={styles.bEComputerScience}>CGPA - 8.97/10</span>
        </p>
        <p className={styles.blankLineP}>
          <span className={styles.bEComputerScience}>&nbsp;</span>
        </p>
      </div>
      <div className={styles.cProgrammingCompletionCer}>
        <ul className={styles.hTML5CSS3JSCompletionCe}>
          <li className={styles.skillRackPlatformLi}>
            <span className={styles.bEComputerScience}>
              C - Programming completion certification
            </span>
          </li>
        </ul>
        <p className={styles.velammalInstituteOfTechnolo}>
          <span>SoloLearn Platform | Feb,2020 - Mar,2020</span>
        </p>
        <p className={styles.velammalInstituteOfTechnolo}>
          <span>Completed my c - programming and got certified.</span>
        </p>
        <p className={styles.velammalInstituteOfTechnolo}>
          <span>{`       `}</span>
        </p>
        <p className={styles.velammalInstituteOfTechnolo}>
          <span className={styles.bEComputerScience}>&nbsp;</span>
        </p>
        <p className={styles.blankLineP}>
          <span className={styles.bEComputerScience}>&nbsp;</span>
        </p>
      </div>
      <div className={styles.hTML5CSS3JSCompletionCer}>
        <ul className={styles.hTML5CSS3JSCompletionCe}>
          <li className={styles.skillRackPlatformLi}>
            <span className={styles.bEComputerScience}>
              HTML5, CSS3, JS completion certification
            </span>
          </li>
        </ul>
        <p className={styles.velammalInstituteOfTechnolo}>
          <span>Udemy Platform | Mar,2021 - Jun,2021</span>
        </p>
        <p className={styles.velammalInstituteOfTechnolo}>
          <span>Completed my web-development course and got certified.</span>
        </p>
        <p className={styles.velammalInstituteOfTechnolo}>
          <span>{`       `}</span>
        </p>
        <p className={styles.velammalInstituteOfTechnolo}>
          <span className={styles.bEComputerScience}>&nbsp;</span>
        </p>
        <p className={styles.blankLineP}>
          <span className={styles.bEComputerScience}>&nbsp;</span>
        </p>
      </div>
      <div className={styles.skillRackPlatformBronze20}>
        <ul className={styles.hTML5CSS3JSCompletionCe}>
          <li className={styles.skillRackPlatformLi}>
            <span className={styles.bEComputerScience}>SkillRack Platform</span>
          </li>
        </ul>
        <p className={styles.velammalInstituteOfTechnolo}>
          <span>Bronze - 200+ | Feb,2021 - Present</span>
        </p>
        <p className={styles.velammalInstituteOfTechnolo}>
          <span>Solved 550+ programs and challenges.</span>
        </p>
        <p className={styles.velammalInstituteOfTechnolo}>
          <span>{`       `}</span>
        </p>
        <p className={styles.velammalInstituteOfTechnolo}>
          <span className={styles.bEComputerScience}>&nbsp;</span>
        </p>
        <p className={styles.blankLineP}>
          <span className={styles.bEComputerScience}>&nbsp;</span>
        </p>
      </div>
      <div className={styles.personalPortfolioWebpageHtm}>
        <ul className={styles.hTML5CSS3JSCompletionCe}>
          <li className={styles.skillRackPlatformLi}>
            <span className={styles.bEComputerScience}>
              Personal Portfolio Webpage
            </span>
          </li>
        </ul>
        <p className={styles.velammalInstituteOfTechnolo}>
          <span>{`Html5, Css3 & Js  |  Jun,2021`}</span>
        </p>
        <p className={styles.velammalInstituteOfTechnolo}>
          <span>Builded my own webpage and hosted successfully.</span>
        </p>
        <p className={styles.velammalInstituteOfTechnolo}>
          <span>{`       `}</span>
        </p>
        <p className={styles.velammalInstituteOfTechnolo}>
          <span className={styles.bEComputerScience}>&nbsp;</span>
        </p>
        <p className={styles.blankLineP}>
          <span className={styles.bEComputerScience}>&nbsp;</span>
        </p>
      </div>
      <div className={styles.leaveApplicationSystemFront}>
        <ul className={styles.hTML5CSS3JSCompletionCe}>
          <li className={styles.skillRackPlatformLi}>
            <span className={styles.bEComputerScience}>
              Leave Application System
            </span>
          </li>
        </ul>
        <p className={styles.velammalInstituteOfTechnolo}>
          <span>{`Front-End : Html5, Css3 & Js.`}</span>
        </p>
        <p className={styles.velammalInstituteOfTechnolo}>
          <span>Back-End : Google Firebase Platform.</span>
        </p>
        <p className={styles.velammalInstituteOfTechnolo}>
          <span> Leave application Submission to Database.</span>
        </p>
        <p className={styles.velammalInstituteOfTechnolo}>
          <span>{`       `}</span>
        </p>
        <p className={styles.velammalInstituteOfTechnolo}>
          <span className={styles.bEComputerScience}>&nbsp;</span>
        </p>
        <p className={styles.blankLineP}>
          <span className={styles.bEComputerScience}>&nbsp;</span>
        </p>
      </div>
      <div className={styles.thStandardStateBoardShrish}>
        <ul className={styles.thStandardStateBoard}>
          <li className={styles.skillRackPlatformLi}>
            <span className={styles.bEComputerScience}>
              12th Standard State Board
            </span>
          </li>
        </ul>
        <p className={styles.velammalInstituteOfTechnolo}>
          <span>Shrishti Matric. Hr. Sec. School</span>
        </p>
        <p className={styles.velammalInstituteOfTechnolo}>
          <span>Vellore - 01. | 2018 - 2019</span>
        </p>
        <p className={styles.velammalInstituteOfTechnolo}>
          <span className={styles.bEComputerScience}>Percentage - 69.0</span>
        </p>
        <p className={styles.blankLineP}>
          <span className={styles.bEComputerScience}>&nbsp;</span>
        </p>
      </div>
      <div className={styles.thStandardStateBoardShrish1}>
        <ul className={styles.thStandardStateBoard}>
          <li className={styles.skillRackPlatformLi}>
            <span className={styles.bEComputerScience}>
              10th Standard State Board
            </span>
          </li>
        </ul>
        <p className={styles.velammalInstituteOfTechnolo}>
          <span>Shrishti Matric. Hr. Sec. School</span>
        </p>
        <p className={styles.velammalInstituteOfTechnolo}>
          <span>Vellore - 01. | 2016 - 2017</span>
        </p>
        <p className={styles.velammalInstituteOfTechnolo}>
          <span className={styles.bEComputerScience}>Percentage - 94.6</span>
        </p>
        <p className={styles.blankLineP}>
          <span className={styles.bEComputerScience}>&nbsp;</span>
        </p>
      </div>
      <div className={styles.englishTamilDiv}>
        <ul className={styles.thStandardStateBoard}>
          <li className={styles.english}>English</li>
          <li>Tamil</li>

        </ul>
        <ul className={styles.thStandardStateBoard} style={{ marginLeft: 8 }}>
          <li className={styles.english}>English</li>
          <li>Tamil</li>

        </ul>
      </div>
      <div className={styles.rectangleDiv3} />
      <div className={styles.rectangleDiv4} />
      <div className={styles.sKILLSDiv}>SKILLS</div>
      <div className={styles.iNTERESTDiv}>INTEREST</div>
      <div className={styles.iNTERNSHIPDiv}>INTERNSHIP</div>
      <div className={styles.cERTIFICATIONSDiv}>CERTIFICATIONS</div>
      <div className={styles.aCHIEVEMENTSDiv}>ACHIEVEMENTS</div>
      <div className={styles.pROJECTSDiv}>PROJECTS</div>
      <div className={styles.rectangleDiv5} />
      <div className={styles.rectangleDiv6} />
      <div className={styles.rectangleDiv7} />
      <div className={styles.rectangleDiv8} />
      <div className={styles.rectangleDiv9} />
      <div className={styles.rectangleDiv10} />
      <div className={styles.skill}>
   
        <Chip label="Deletable" sx={{fontSize:"12px"}} style={{ backgroundColor: "skyblue", marginRight: 20,  marginTop: "5px" }} onClick={handleDelete}  /> 

        <Chip label="Deletable" sx={{fontSize:"12px"}} style={{ backgroundColor: "skyblue", marginRight: 20,  marginTop: "5px" }} onClick={handleDelete}  /> 
   
        
        <Chip label="Deletable" sx={{fontSize:"12px"}} style={{ backgroundColor: "skyblue", marginRight: 20,  marginTop: "5px" }} onClick={handleDelete}  /> 
     
      </div>
      <div className={styles.dataBaseManagementSystem}>
        <ul className={styles.thStandardStateBoard}>
          DataBase Management System
        </ul>
      </div>
      <div className={styles.webDesigningUIDesigning}>
        <ul className={styles.thStandardStateBoard}>
          <li className={styles.english}>Web - Designing</li>
          <li>UI - Designing</li>
        </ul>
      </div>
      <div className={styles.doneA10DaysPythonInternsh}>
        <ul className={styles.hTML5CSS3JSCompletionCe}>
          Done a 10 days Python Internship course in the month of Sept,2021 to
          Oct,2021.
        </ul>
      </div>
    </div>
  );
};

export default Resume;
