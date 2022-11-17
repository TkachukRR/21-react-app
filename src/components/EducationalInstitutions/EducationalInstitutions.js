import PropTypes from "prop-types";
import { Institution } from "../Institution/Institution";
import css from "./EducationalInstitutions.module.css";

export const EducationalInstitutions = ({ titleText, education }) => (
  <section className={css.education}>
    <h3 className={css.education__header}>{titleText}</h3>

    <ol className={css.education__list}>
      {education.map(({ institution, rank, period }) => (
        <li
          key={institution + rank + period.start + period.end}
          className={css.education__item}
        >
          <Institution
            institution={institution}
            start={period.start}
            end={period.end}
            rank={rank}
          />
        </li>
      ))}
    </ol>
  </section>
);

EducationalInstitutions.propTypes = {
  titleText: PropTypes.string,
  education: PropTypes.arrayOf(
    PropTypes.shape({
      institution: PropTypes.string.isRequired,
      rank: PropTypes.string,
      period: PropTypes.object,
    })
  )
};
