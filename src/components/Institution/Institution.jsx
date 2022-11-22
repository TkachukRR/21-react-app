import {
  University,
  Name,
  Period,
  Start,
  End,
  Rank,
} from "./Institution.styled";
import { formatDate } from "../../utils";

export const Institution = ({ institution, start, end, rank }) => {
  const formatatedStart = formatDate(start);
  const formatatedEnd = formatDate(end);

  return (
    <University>
      <Name>{institution}</Name>

      <Period>
        <Start>{formatatedStart}</Start> | <End>{formatatedEnd}</End>
      </Period>

      <Rank>{rank}</Rank>
    </University>
  );
};
