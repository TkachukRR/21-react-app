import PropTypes from "prop-types";

export const Bio = ({
  name,
  lastName,
  imgLink,
  imgWidth,
  dateOfBirth,
  location,
}) => {
  const altImg = `Photo ${name} ${lastName}`;

  return (
    <>
      <img src={imgLink} alt={altImg} width={imgWidth + "px"} />
      <div>
        Date of birth:<span>{dateOfBirth}</span>
      </div>
      <div>
        Location:<span>{location}</span>
      </div>
    </>
  );
};

Bio.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  imgLink: PropTypes.string.isRequired,
  imgWidth: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
