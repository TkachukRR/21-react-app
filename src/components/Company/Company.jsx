import { formatDate } from "../../utils";
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
      <h4 className={css.position}>
        {position}
        <span className={css.company}>{company}</span>
      </h4>

      <div className={css.period}>
        <span className={css.period__start}>{formatatedStart}</span>
        <span className={css.period__end}>{formatatedEnd}</span>
      </div>
      <div className={css.location}>{location}</div>

      <ul className={css.responsibilities__list}>
        {responsibilities.map((responsibility) => (
          <li key={responsibility} className={css.responsibilities__item}>
            {responsibility}
          </li>
        ))}
      </ul>
    </>
  );
};
