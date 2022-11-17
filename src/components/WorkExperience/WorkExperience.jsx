import PropTypes from "prop-types";
import css from "./WorkExperience.module.css";
import { Company } from "../Company/Company";

export const WorkExperience = ({ titleText, companies }) => {
  return (
    <section className={css.projects}>
      <h3 className={css.header}>{titleText}</h3>
      <ol className={css.list}>
        {companies.map(
          ({ company, position, location, period, responsibilities }) => (
            <li key={company} className={css.list__item}>
              <Company
                company={company}
                position={position}
                location={location}
                start={period.start}
                end={period.end}
                responsibilities={responsibilities}
              />
            </li>
          )
        )}
      </ol>
    </section>
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
