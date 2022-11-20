import FullUserInfo from "./FullUserInfo.json";
import { GeneralInfo } from "./components/GeneralInfo/GeneralInfo";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Projects } from "./components/Projects/Projects";
import { EducationalInstitutions } from "./components/EducationalInstitutions/EducationalInstitutions";
import { WorkExperience } from "./components/WorkExperience/WorkExperience";
import { SideBar } from "./components/SideBar/SideBar.jsx";
import { Bio } from "./components/Bio/Bio";
import { Contats } from "./components/Contats/Contats";

import css from "./App.css";

export const App = () => {
  const { name, lastName, intro, subinfo, projects, education, companies, dateOfBirh, location, contacts} =
    FullUserInfo;

  return (
    <>
      <GeneralInfo>
        <AboutMe
          name={name}
          lastName={lastName}
          intro={intro}
          subinfo={subinfo}
        />
        <Projects titleText="Projects" projects={projects} />
        <EducationalInstitutions titleText="Education" education={education} />
        <WorkExperience titleText="Work experience" companies={companies} />
      </GeneralInfo>

      <SideBar>
        <Bio
          name={name}
          lastName={lastName}
          imgLink="./photo.jpg"
          imgWidth="250px"
          dateOfBirth={dateOfBirh}
          location={location} 
        />
        <Contats contacts={contacts}/>
        {/* <Skills/> */}
        {/* <Skills/> */}
        {/* <Skills/> */}
        {/* <Skills/> */}
      </SideBar>
    </>
  );
};
