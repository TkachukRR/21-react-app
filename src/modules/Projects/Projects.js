import "./Projects.css";

const Projects = ({ projects }) => (
  <ol>
    {projects.map(({ title, url, urlGit, stack }) => (
      <li key={url}>
        <h2>{title}</h2>
        <a href={url}>{url}</a>
        <a href={urlGit}>{urlGit}</a>
        <p>
          [
          <ul>
            {stack.map((technology) => (
              <li>{technology}</li>
            ))}
          </ul>
          ]
        </p>
      </li>
    ))}
  </ol>
);

export default Projects;
