import PropTypes from "prop-types";
import css from "./AboutMe.module.css";

export const AboutMe = ({ name, intro, subinfo }) => (
  <div className={css.author}>
    <h1 className={css.author__name}>{name}</h1>
    <p className={css.author__intro}>{intro}</p>
    <span className={css.author__subinfo}>{subinfo}</span>
  </div>
);

AboutMe.propTypes = {
  name: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  subinfo: PropTypes.string,
};
