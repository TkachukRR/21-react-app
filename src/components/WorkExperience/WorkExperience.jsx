import PropTypes from "prop-types";
import { Company } from "../Company/Company";
import { SectionTitle, CompanyList } from "./WorkExperience.styled";
import { Box } from "../Box/Box";

export const WorkExperience = ({ children, companies }) => {
  return (
    <Box my={2} px={4} as="section">
      <SectionTitle>{children}</SectionTitle>
      <CompanyList>
        {companies.map(
          ({ company, position, location, period, responsibilities }) => (
            <Company
              key={company}
              company={company}
              position={position}
              location={location}
              start={period.start}
              end={period.end}
              responsibilities={responsibilities}
            />
          )
        )}
      </CompanyList>
    </Box>
  );
};

WorkExperience.propTypes = {
  companies: PropTypes.arrayOf(
    PropTypes.exact({
      company: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      period: PropTypes.exact({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
      }),
      responsibilities: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};
