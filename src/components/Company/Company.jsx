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
} from "./Company.styled";
import css from "./Company.module.css";

export const Company = ({
  company,
  position,
  location,
  start,
  end,
  responsibilities,
}) => {
  const formatatedStart = formatDate(start);
  const formatatedEnd = "now" || formatDate(end);

  return (
    <>
      <Position>
        {position}
        <CompanyName>{company}</CompanyName>
      </Position>

      <Period>
        <Start>{formatatedStart}</Start>
        <End>{formatatedEnd}</End>
      </Period>
      <Location>{location}</Location>

      <Resposibilities>
        {responsibilities.map((responsibility) => (
          <Resposibility key={responsibility}>{responsibility}</Resposibility>
        ))}
      </Resposibilities>
    </>
  );
};
