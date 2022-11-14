import "./AboutMe.css";

const AboutMe = ({ name, intro, subinfo }) => (
  <div className="author">
    <h1 className="author__name">{name}</h1>
    <p className="author__intro">{intro}</p>
    <span className="author__subinfo">{subinfo}</span>
  </div>
);

export default AboutMe;
