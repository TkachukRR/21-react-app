import { formatDate } from "../../utils";
import css from "./Institution.module.css";

export const Institution = ({ institution, start, end, rank }) => {
  const formatatedStart = formatDate(start);
  const formatatedEnd = formatDate(end);

  return (
    <>
      <h4 className={css.institution__title}>{institution}</h4>

      <div className={css.institution__period}>
        <div className={css.institution__start}>{formatatedStart}</div>
        <div className={css.institution__end}>{formatatedEnd}</div>
      </div>
      <div className={css.institution__rank}>{rank}</div>
    </>
  );
};
