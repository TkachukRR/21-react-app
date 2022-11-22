import { DiGithub, DiChrome } from "react-icons/di";
import { iconSize } from "../../constants";
import {
  AboutProject,
  Name,
  Info,
  Links,
  Link,
  UsedTechnologies,
  Technology,
} from "./ProjectInfo.styled";

export const ProjectInfo = ({ title, url, urlGit, stack }) => {
  return (
    <AboutProject>
      <Name>{title}</Name>
      <Info>
        <Links>
          <Link href={url}>
            <DiChrome size={iconSize.m} />
            {url}
          </Link>
          <Link href={urlGit}>
            <DiGithub size={iconSize.m} />
            {urlGit}
          </Link>
        </Links>

        <UsedTechnologies>
          [
          {stack.map((technology) => (
            <Technology key={technology}>{technology}</Technology>
          ))}
          ]
        </UsedTechnologies>
      </Info>
    </AboutProject>
  );
};
