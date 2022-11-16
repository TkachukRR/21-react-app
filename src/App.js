import "./App.css";
import GeneralInfo from "./modules/GeneralInfo/GeneralInfo";
import AboutMe from "./modules/AboutMe/AboutMe";
import Projects from "./modules/Projects/Projects";
import Education from "./modules/Education/Education";

const personInfo = {
  name: "Roman",
  lastName: "Tkachuk",
};

const finishedProjects = [
  {
    title: "hogwarts",
    url: "https://tkachukrr.github.io/19-hogwarts/",
    urlGit: "https://github.com/TkachukRR/19-hogwarts",
    stack: ["JavaScript", "CSS", "HTML"],
  },
  {
    title: "Web-studio",
    url: "https://tkachukrr.github.io/09-web-studio/",
    urlGit: "https://github.com/TkachukRR/09-web-studio",
    stack: ["JavaScript", "CSS", "HTML"],
  },
];

const educations = [
  {
    institution: 'National Aerospace University М.E. Zhukovsky "KHАІ"',
    rank: "Specialist",
    period: {
      start: { month: "September", year: "2004" },
      end: { month: "June", year: "2009" },
    },
  },
];

const educations2 = [
  {
    institution: 'National Aerospace University М.E. Zhukovsky "KHАІ"',
    rank: "Specialist",
    start: "September 2004",
    end: "June 2009",
  },
];

const App = () => (
  <>
    <GeneralInfo>
      <AboutMe
        name={personInfo.name + " " + personInfo.lastName}
        intro="Looking for Junior Frontend developer position. I am highly motivated to
            get new knowledge and put it to use in real projects. I am good team
            player and prefer to build strong communication via members of a group.
            Also, I am well-organized and responsible. I am constantly engaged in
            self-development in programming and improvement of English language
            skills."
        subinfo="I am considering work in all cities and am ready to move."
      />

      <Projects projects={finishedProjects} />
      <Education projects={educations2} />
    </GeneralInfo>
  </>
);

export default App;
