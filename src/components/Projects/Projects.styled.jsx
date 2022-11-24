import styled from "@emotion/styled";

export const AllProjects = styled.section`
  margin-bottom: ${(props) => props.theme.space[3]}px;
`;

export const Title = styled.h2`
  margin-bottom: ${(props) => props.theme.space[3]}px;
  color: ${(props) => props.theme.colors.textTitle};
`;

export const ProjectsList = styled.ol`
  padding-left: 1em;
`;
