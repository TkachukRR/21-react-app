import PropTypes from "prop-types";
import { formatBirthDate } from "../../utils";
import { GeneralInfo, Photo, BirthDate, Location, Accent } from "./Bio.styled";

export const Bio = ({
  name,
  lastName,
  imgLink,
  imgWidth,
  dateOfBirth,
  location,
}) => {
  const formatedBirthDate = formatBirthDate(dateOfBirth);

  return (
    <>
      <Photo src={imgLink} alt={`Photo ${name} ${lastName}`} />
      <GeneralInfo>
        <BirthDate>
          Date of birth:<Accent>{formatedBirthDate}</Accent>
        </BirthDate>
        <Location>
          Location:<Accent>{location}</Accent>
        </Location>
      </GeneralInfo>
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
