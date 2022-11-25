import PropTypes from "prop-types";
import { Title, List, Skill } from "./Skills.styled";

export const Skills = ({ kind, children }) => {
  return (
    <>
      <Title>{children}</Title>
      <List>
        {kind.map((skill) => (
          <Skill key={skill}>{skill}</Skill>
        ))}
      </List>
    </>
  );
};

Skills.propTypes = {
  kind: PropTypes.arrayOf(PropTypes.string.isRequired),
};
