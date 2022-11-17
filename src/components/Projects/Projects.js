import PropTypes from "prop-types";
import { array } from "prop-types";
import { ProjectInfo } from "../ProjectInfo/ProjectInfo";
import css from "./Projects.module.css";

export const Projects = ({ titleText, projects }) => (
  <section className={css.projects}>
    <h3 className={css.header}>{titleText}</h3>

    <ol className={css.list}>
      {projects.map(({ title, url, urlGit, stack }) => (
        <li key={url} className={css.list__item}>
          <ProjectInfo title={title} url={url} urlGit={urlGit} stack={stack} />
        </li>
      ))}
    </ol>
  </section>
);


Projects.propTypes = {
  titleText: PropTypes.string,
  projects: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      urlGit: PropTypes.string.isRequired,
      stack: array,
    })
  ),
};