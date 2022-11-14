import "./App.css";
import GeneralInfo from "./modules/GeneralInfo/GeneralInfo";
import AboutMe from "./modules/AboutMe/AboutMe";

const App = () => (
  <>
    <GeneralInfo>
      <AboutMe
        name="Roman Tkachuk"
        intro="Looking for Junior Frontend developer position. I am highly motivated to
            get new knowledge and put it to use in real projects. I am good team
            player and prefer to build strong communication via members of a group.
            Also, I am well-organized and responsible. I am constantly engaged in
            self-development in programming and improvement of English language
            skills."
        subinfo="I am considering work in all cities and am ready to move."
      />
    </GeneralInfo>
  </>
);

export default App;
