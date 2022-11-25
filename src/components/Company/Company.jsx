import { formatDate } from "../../utils";
import {
  Position,
  CompanyName,
  Period,
  Start,
  End,
  Location,
  Resposibilities,
  Resposibility,
  WorkInformation,
} from "./Company.styled";
import { Box } from "../Box/Box";

export const Company = ({
  company,
  position,
  location,
  start,
  end,
  responsibilities,
}) => {
  const formatatedStart = formatDate(start);
  const formatatedEnd = end === "now" ? end : formatDate(end);

  return (
    <Box as="li">
      <Position>
        {position}
        <CompanyName>{company}</CompanyName>
      </Position>
      <Box as="span" color="textSubAccent">
        <Period>
          <Start>{formatatedStart}</Start> - <End>{formatatedEnd}</End>
        </Period>
        <Box as="span" mr="0.25em" color="textMain">
          |
        </Box>
        <Location>{location}</Location>
      </Box>
      <Resposibilities>
        {responsibilities.map((responsibility) => (
          <Resposibility key={responsibility}>{responsibility}</Resposibility>
        ))}
      </Resposibilities>
    </Box>
  );
};
