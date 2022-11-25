import styled from "@emotion/styled";

export const AboutProject = styled.li`
  :not(:last-child) {
    margin-bottom: ${(props) => props.theme.space[1]}px;
  }
`;

export const Name = styled.h3`
  text-transform: capitalize;
  margin-bottom: ${(props) => props.theme.space[1]}px;
  color: ${(props) => props.theme.colors.accent};
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 0.25em;
  cursor: pointer;
  color: inherit;
`;

export const UsedTechnologies = styled.ul`
  display: inline-block;
  list-style-type: none;
`;

export const Technology = styled.li`
  display: inline-block;
  :not(:last-child)::after {
    content: ",";
    margin-right: 0.25rem;
  }
`;
