import FullUserInfo from "./FullUserInfo.json";
import { GeneralInfo } from "./components/GeneralInfo/GeneralInfo";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Projects } from "./components/Projects/Projects";
import { EducationalInstitutions } from "./components/EducationalInstitutions/EducationalInstitutions";
import { WorkExperience } from "./components/WorkExperience/WorkExperience";
import css from "./App.css";

export const App = () => (
  <>
    <GeneralInfo>
      <AboutMe
        name={FullUserInfo.name + " " + FullUserInfo.lastName}
        intro={FullUserInfo.intro}
        subinfo={FullUserInfo.subinfo}
      />

      <Projects titleText="Projects" projects={FullUserInfo.projects} />
      <EducationalInstitutions
        titleText="Education"
        education={FullUserInfo.education}
      />
      <WorkExperience
        titleText="Work experience"
        companies={FullUserInfo.companies}
      />
    </GeneralInfo>
  </>
);
