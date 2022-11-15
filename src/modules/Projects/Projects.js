import "./Projects.css";

const Projects = ({ projects }) => (
  <ol className="project__list">
    {projects.map(({ title, url, urlGit, stack }) => (
        <li key={url} className="project__item">
          <h2 className="project__title">{title}</h2>

          <div className="project__info">
            <div className="project__links">
              <a href={url} className="project__url">
                {url}
              </a>
              <a href={urlGit} className="project__url-git">
                {urlGit}
              </a>
            </div>

            <div className="project__stack">
              [
              <ul className="stack__list">
                {stack.map((technology) => (
                  <li key={technology} className="stack__item">
                    {technology}
                  </li>
                ))}
              </ul>
              ]
            </div>
          </div>
        </li>
    ))}
  </ol>
);

export default Projects;
