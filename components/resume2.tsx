import { FunctionComponent } from "react";
import styles from "../styles/components/resume2.module.css";

const Resume2: FunctionComponent = () => {
  return (
    <div className={styles.resumeDiv}>
      <div className={styles.noWorkExperience}>no work experience*</div>
      <div className={styles.softwareDiv}>
        <img
          className={styles.softwareIcons}
          alt=""
          src="../software-icons.svg"
        />
        <div className={styles.sOFTWAREDiv}>SOFTWARE</div>
      </div>
      <div className={styles.preferredTypeOfWork}>
        <div className={styles.div}>
          <div className={styles.rectangleDiv} />
          <div className={styles.rectangleDiv1} />
          <div className={styles.rectangleDiv2} />
          <div className={styles.rectangleDiv3} />
          <div className={styles.pROJECTDiv}>PROJECT</div>
          <div className={styles.pARTTIMEDiv}>PART-TIME</div>
          <div className={styles.fULLTIMEDiv}>FULL-TIME</div>
          <div className={styles.rEMOTEJOBDiv}>REMOTE JOB</div>
        </div>
        <div className={styles.pREFERREDTYPEOFWORK}>PREFERRED TYPE OF WORK</div>
      </div>
      <div className={styles.skillsDiv}>
        <div className={styles.div1}>
          <div className={styles.rectangleDiv4} />
          <div className={styles.rectangleDiv5} />
          <div className={styles.rectangleDiv6} />
          <div className={styles.wEBDESIGNDiv}>WEB DESIGN</div>
          <div className={styles.gRAPHICDESIGNDiv}>GRAPHIC DESIGN</div>
          <div className={styles.aRTDiv}>ART</div>
        </div>
        <div className={styles.pREFERREDTYPEOFWORK}>SKILLS</div>
      </div>
      <div className={styles.languageDiv}>
        <div className={styles.rectangleDiv7} />
        <div className={styles.rectangleDiv8} />
        <div className={styles.rectnagle1Div} />
        <div className={styles.b1Div}>B1</div>
        <div className={styles.nATIVEDiv}>NATIVE</div>
        <b className={styles.englishB}>English</b>
        <b className={styles.russianB}>Russian</b>
        <div className={styles.groupDiv}>
          <img
            className={styles.languageIcon}
            alt=""
            src="../language-icon.svg"
          />
          <div className={styles.lANGUAGEDiv}>LANGUAGE</div>
        </div>
      </div>
      <div className={styles.linksDiv}>
        <div className={styles.httpswwwbehancenetdalienDiv}>
          https://www.behance.net/dalienbrown
        </div>
        <div className={styles.httpswwwfigmacomevabrowDiv}>
          https://www.figma.com/@evabrown
        </div>
        <div className={styles.httpsdribbblecomdalienbroDiv}>
          https://dribbble.com/dalienbrown
        </div>
        <div className={styles.httpswwwinstagramcomdaliDiv}>
          https://www.instagram.com/dalienbrown
        </div>
        <img className={styles.behanceIcon} alt="" src="../behance-icon.svg" />
        <img className={styles.figmaIcon} alt="" src="../figma-icon.svg" />
        <img
          className={styles.dribbbleIcon}
          alt=""
          src="../dribbble-icon.svg"
        />
        <img
          className={styles.instagramIcon}
          alt=""
          src="../instagram-icon.svg"
        />
        <div className={styles.pREFERREDTYPEOFWORK}>LINKS (works)</div>
      </div>
      <div className={styles.contactDiv}>
        <div className={styles.httpstmedalienbrownDiv}>
          https://t.me/dalienbrown
        </div>
        <img
          className={styles.telegramIcon}
          alt=""
          src="../telegram-icon.svg"
        />
        <div className={styles.pREFERREDTYPEOFWORK}>CONTACT</div>
      </div>
      <div className={styles.danielFedorenkoDiv}>
        <div
          className={styles.graphicDesignerArtist}
        >{`Graphic designer & Artist`}</div>
        <div className={styles.danielFedorenkoDiv1}>
          <p className={styles.danielP}>
            <b className={styles.danielB}>Daniel</b>
          </p>
          <p className={styles.fedorenkoP}>
            <span className={styles.fedorenkoSpan}>Fedorenko</span>
          </p>
        </div>
        <img
          className={styles.profilePicIcon}
          alt=""
          src="../profile-pic@2x.png"
        />
        <div className={styles.bORN2001Div}>
          <span>BORN</span>
          <span className={styles.span}> 2001</span>
        </div>
      </div>
    </div>
  );
};

export default Resume2;
