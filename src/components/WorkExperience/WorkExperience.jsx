import PropTypes from "prop-types";
import { Company } from "../Company/Company";
import {
  WorkExpirience,
  SectionTitle,
  CompanyList,
} from "./WorkExperience.styled";

export const WorkExperience = ({ titleText, companies }) => {
  return (
    <WorkExpirience>
      <SectionTitle>{titleText}</SectionTitle>
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
    </WorkExpirience>
  );
};

WorkExperience.propTypes = {
  titleText: PropTypes.string,

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
