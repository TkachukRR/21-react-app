import PropTypes from "prop-types";
import { Institution } from "../Institution/Institution";
import {
  Education,
  Title,
  GraduateList,
} from "./EducationalInstitutions.styled";

export const EducationalInstitutions = ({ children, education }) => (
  <Education>
    <Title>{children}</Title>

    <GraduateList>
      {education.map(({ institution, rank, period }) => (
        <Institution
          key={institution + rank + period.start + period.end}
          institution={institution}
          start={period.start}
          end={period.end}
          rank={rank}
        />
      ))}
    </GraduateList>
  </Education>
);

EducationalInstitutions.propTypes = {
  titleText: PropTypes.string,
  education: PropTypes.arrayOf(
    PropTypes.exact({
      institution: PropTypes.string.isRequired,
      rank: PropTypes.string,
      period: PropTypes.object,
    })
  ),
};
