import PropTypes from "prop-types";
import { Title, List, Skill } from "./Skills.styled";

export const Skills = ({ kind, titleText, children }) => {
  return (
    <>
      <Title>{children}</Title>
      <List>
        {kind.map((skill) =>
          skill.length > 2 ? (
            <Skill key={skill}>{skill}</Skill>
          ) : (
            <Skill key={skill[0]}>
              {skill[0]} - {skill[1]}
            </Skill>
          )
        )}
      </List>
    </>
  );
};
