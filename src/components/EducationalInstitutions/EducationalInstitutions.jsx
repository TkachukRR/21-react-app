import PropTypes from "prop-types";
import { Institution } from "../Institution/Institution";
import { Title, GraduateList } from "./EducationalInstitutions.styled";
import { Box } from "../Box/Box";

export const EducationalInstitutions = ({ children, education }) => (
  <Box my={2} px={4} as="section">
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
  </Box>
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
