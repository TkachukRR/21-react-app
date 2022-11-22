import PropTypes from "prop-types";
import { Author, FullName, Intro, SubInfo } from "./AboutMe.styled";

export const AboutMe = ({ name, lastName, intro, subinfo }) => {
  return (
    <Author>
      <FullName>
        {name} {lastName}
      </FullName>
      <Intro>{intro}</Intro>
      <SubInfo>{subinfo}</SubInfo>
    </Author>
  );
};

AboutMe.propTypes = {
  name: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  subinfo: PropTypes.string,
};
