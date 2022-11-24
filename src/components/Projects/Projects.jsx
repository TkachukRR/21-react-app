import PropTypes from "prop-types";
import { Children } from "react";
import { ProjectInfo } from "../ProjectInfo/ProjectInfo";
import { AllProjects, Title, ProjectsList } from "./Projects.styled";

export const Projects = ({ children, projects }) => (
  <AllProjects>
    <Title>{children}</Title>

    <ProjectsList>
      {projects.map(({ title, url, urlGit, stack }) => (
        <ProjectInfo
          key={url}
          title={title}
          url={url}
          urlGit={urlGit}
          stack={stack}
        />
      ))}
    </ProjectsList>
  </AllProjects>
);

Projects.propTypes = {
  titleText: PropTypes.string,
  projects: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      urlGit: PropTypes.string.isRequired,
      stack: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};
