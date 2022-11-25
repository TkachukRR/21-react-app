import { Name, Period, Start, End, Rank } from "./Institution.styled";
import { formatDate } from "../../utils";
import { Box } from "../Box/Box";

export const Institution = ({ institution, start, end, rank }) => {
  const formatatedStart = formatDate(start);
  const formatatedEnd = formatDate(end);

  return (
    <Box as="li">
      <Name>{institution}</Name>

      <Box display="flex" color="textSubAccent">
        <Period>
          <Start>{formatatedStart}</Start>
          <Box mx="0.25em">-</Box>
          <End>{formatatedEnd}</End>
        </Period>
        <Box mx="0.25em" color="textMain">
          |
        </Box>
        <Rank>{rank}</Rank>
      </Box>
    </Box>
  );
};
