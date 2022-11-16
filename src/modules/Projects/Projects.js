import "./Projects.css";

const Projects = ({ projects }) => (
  <>
    {console.log(projects)}

    <h3 className="project__header">Projects</h3>

    <ol className="project__list">
      {projects.map(({ title, url, urlGit, stack }) => (
        <li key={url} className="project__item">
          <h3 className="project__title">{title}</h3>

          <div className="project__info">
            <div className="project__links">
              <a href={url} className="project__url">
                {url}
              </a>
              <a href={urlGit} className="project__url-git">
                {urlGit}
              </a>
            </div>

            <ul className="stack__list">
              {stack.map((technology) => (
                <li key={technology} className="stack__item">
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  </>
);

export default Projects;
