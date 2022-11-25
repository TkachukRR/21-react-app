import { DiGithub, DiChrome } from "react-icons/di";
import { iconSize } from "../../constants";
import {
  AboutProject,
  Name,
  Link,
  UsedTechnologies,
  Technology,
} from "./ProjectInfo.styled";
import { Box } from "../Box/Box";

export const ProjectInfo = ({ title, url, urlGit, stack }) => {
  return (
    <AboutProject>
      <Name>{title}</Name>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        as="div"
      >
        <Box>
          <Link href={url}>
            <DiChrome size={iconSize.m} />
            {url}
          </Link>
          <Link href={urlGit}>
            <DiGithub size={iconSize.m} />
            {urlGit}
          </Link>
        </Box>

        <UsedTechnologies>
          [
          {stack.map((technology) => (
            <Technology key={technology}>{technology}</Technology>
          ))}
          ]
        </UsedTechnologies>
      </Box>
    </AboutProject>
  );
};
