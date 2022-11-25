import PropTypes from "prop-types";
import { formatBirthDate } from "../../utils";
import { Photo, BirthDate, Location, Accent } from "./Bio.styled";
import { Box } from "../Box/Box";

export const Bio = ({ name, lastName, imgLink, dateOfBirth, location }) => {
  const formatedBirthDate = formatBirthDate(dateOfBirth);

  return (
    <>
      <Photo src={imgLink} alt={`Photo ${name} ${lastName}`} />
      <Box px={3} my={2}>
        <BirthDate>
          Date of birth: <Box color="textSub">{formatedBirthDate}</Box>
        </BirthDate>
        <Location>
          Location: <Box color="textSub">{location}</Box>
        </Location>
      </Box>
    </>
  );
};

Bio.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  imgLink: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
