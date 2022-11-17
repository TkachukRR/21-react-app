import css from "./Institution.module.css";

export const Institution = ({ institution, start, end, rank }) => {
  return (
    <>
      <h4 className={css.institution__title}>{institution}</h4>

      <div className={css.institution__period}>
        <div className={css.institution__start}>
          {start.month + " " + start.year}
        </div>
        <div className={css.institution__end}>{end.month + " " + end.year}</div>
      </div>
      <div className={css.institution__rank}>{rank}</div>
    </>
  );
};
