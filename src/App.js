import css from "./App.css";
import FullUserInfo from "./FullUserInfo.json"
import { GeneralInfo } from "./components/GeneralInfo/GeneralInfo";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Projects } from "./components/Projects/Projects";
import { EducationalInstitutions } from "./components/EducationalInstitutions/EducationalInstitutions";

export const App = () => (
  <>
    <GeneralInfo>
      <AboutMe
        name={FullUserInfo.name + " " + FullUserInfo.lastName}
        intro={FullUserInfo.intro}
        subinfo={FullUserInfo.subinfo}
      />

      <Projects titleText="Projects" projects={FullUserInfo.finishedProjects} />
      <EducationalInstitutions titleText="Education" education={FullUserInfo.education} />
    </GeneralInfo>
  </>
);