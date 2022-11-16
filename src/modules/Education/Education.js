import "./Education.css";

const Education = ({ education }) => (
  <>
    <h2>Education</h2>

    <ol className="education__list">
      {education.map(({ institution, rank, period : {start, end} }) => (
        <li className="education__item">
          <h3
            key={institution + rank + start + end}
            className="education__title"
          >
            {institution}
          </h3>

          <div className="education__period">
            <div className="education__start">{start.month + ' ' + start.year}</div>
            <div className="education__end">{end.month + ' ' + end.year}</div>
          </div>
          <div className="education__rank">{rank}</div>
        </li>
      ))}
    </ol>
  </>
);

export default Education;
