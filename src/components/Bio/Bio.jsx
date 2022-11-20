import PropTypes from "prop-types";
import css from "./Bio.module.css";

export const Bio = ({ name, lastName, imgLink, imgWidth, dateOfBirth, location }) => {
    const altImg = `Photo ${name} ${lastName}`

    return(
        <>
            <img className={css.author__photo} src={imgLink} alt={altImg} width={imgWidth}/>
            <div>Date of birth:<span>{dateOfBirth}</span></div>
            <div>Location:<span>{location}</span></div>
        </>
    )
}

Bio.propTypes = {
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    imgLink: PropTypes.string.isRequired,
    imgWidt: PropTypes.string.isRequired,
    dateOfBirth: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
}