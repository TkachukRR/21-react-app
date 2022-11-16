import "./Education.css";

const Education = ({ educations }) => (
  <>
    <h2>Education</h2>

    <ol className="education__list">
      {educations.map(({ education }) => (
        <li className="education__item">
          {/* <h3 className="education__title">{education.institution}</h3> */}

          {/* <div className="education__period"> */}
            {/* <div className="education__start"> */}
              {/* {period.start.month + period.start.year} */}
            {/* </div> */}
            {/* <span> - </span> */}
            {/* <div className="education__end"> */}
              {/* {period.end.month + period.end.year} */}
            {/* </div> */}
          {/* </div> */}
          {/* <span> | </span> */}
          {/* <div className="education__rank">{education.rank}</div> */}
        </li>
      ))}
    </ol>
  </>
);

export default Education;
