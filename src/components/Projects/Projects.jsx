import PropTypes from "prop-types";
import { ProjectInfo } from "../ProjectInfo/ProjectInfo";
import { Title, ProjectsList } from "./Projects.styled";
import { Box } from "../Box/Box";

export const Projects = ({ children, projects }) => (
  <Box my={2} px={4} as="section">
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
  </Box>
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
