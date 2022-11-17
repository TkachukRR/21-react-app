import { DiJavascript1 } from "react-icons/di";
import css from "./ProjectInfo.module.css";

export const ProjectInfo = ({title, url, urlGit, stack}) => {
  return (
    <>
      <h3 className={css.project__title}>{title}</h3>
      <DiJavascript1/>
      <div className={css.project__info}>
        <div className={css.project__links}>
          <a href={url} className={css.project__url}>
            {url}
          </a>
          <a href={urlGit} className={css.project__url_git}>
            {urlGit}
          </a>
        </div>

        <ul className={css.stack__list}>
          {stack.map((technology) => (
            <li key={technology} className={css.stack__item}>
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
