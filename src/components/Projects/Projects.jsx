import PropTypes, { arrayOf } from "prop-types";
import { ProjectInfo } from "../ProjectInfo/ProjectInfo";
import { AllProjects, Title, ProjectsList } from "./Projects.styled";

export const Projects = ({ titleText, projects }) => (
  <AllProjects>
    <Title>{titleText}</Title>

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
