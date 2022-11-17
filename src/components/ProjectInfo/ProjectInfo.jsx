import { DiGithub, DiChrome } from "react-icons/di";
import {iconSize} from "../../constants"
import css from "./ProjectInfo.module.css";

export const ProjectInfo = ({ title, url, urlGit, stack }) => {
  return (
    <>
      <h3 className={css.project__title}>{title}</h3>
      <div className={css.project__info}>
        <div className={css.project__links}>
          <a href={url} className={css.project__url}>
            <DiChrome className="" size={iconSize.m} />
            {url}
          </a>
          <a href={urlGit} className={css.project__url_git}>
            <DiGithub className="" size={iconSize.m} />
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
