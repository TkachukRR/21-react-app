import PropTypes from "prop-types";
import { FullName, Intro, SubInfo } from "./AboutMe.styled";
import { Box } from "../Box/Box";

export const AboutMe = ({ name, lastName, intro, subinfo }) => {
  return (
    <Box mb={2} px={4} as="header">
      <FullName>
        {name} {lastName}
      </FullName>
      <Intro>{intro}</Intro>
      <SubInfo>{subinfo}</SubInfo>
    </Box>
  );
};

AboutMe.propTypes = {
  name: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  subinfo: PropTypes.string,
};
