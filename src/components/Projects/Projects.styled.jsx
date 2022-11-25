import styled from "@emotion/styled";

export const Title = styled.h2`
  margin-bottom: ${(props) => props.theme.space[1]}px;
  color: ${(props) => props.theme.colors.textTitle};
`;

export const ProjectsList = styled.ol`
  padding-left: 1em;
`;
