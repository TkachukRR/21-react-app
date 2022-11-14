import "./AboutMe.css";

const AboutMe = (props) => (
  <div className="author">
    <h1 className="author__name">{props.name}</h1>
    <p className="author__intro">{props.intro}</p>
    <span className="author__subinfo">{props.subinfo}</span>
  </div>
);

export default AboutMe;
