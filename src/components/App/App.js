import FullUserInfo from "../../FullUserInfo.json";
import { Container } from "./App.styled";
import { GeneralInfo } from "../GeneralInfo/GeneralInfo";
import { AboutMe } from "../AboutMe/AboutMe";
import { Projects } from "../Projects/Projects";
import { EducationalInstitutions } from "../EducationalInstitutions/EducationalInstitutions";
import { WorkExperience } from "../WorkExperience/WorkExperience";
import { SideBar } from "../SideBar/SideBar.jsx";
import { Bio } from "../Bio/Bio";
import { Contats } from "../Contats/Contats";

export const App = () => {
  const {
    name,
    lastName,
    intro,
    subinfo,
    projects,
    education,
    companies,
    dateOfBirh,
    location,
    contacts,
  } = FullUserInfo;

  return (
    <Container>
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
          imgWidth="250"
          dateOfBirth={dateOfBirh}
          location={location}
        />
        <Contats contacts={contacts} />
        {/* <Skills/> */}
        {/* <Skills/> */}
        {/* <Skills/> */}
        {/* <Skills/> */}
      </SideBar>
    </Container>
  );
};
