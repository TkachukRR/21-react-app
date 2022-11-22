import styled from "@emotion/styled";

export const AboutProject = styled.li`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Name = styled.h3`
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.accent};
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Links = styled.div``;

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
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
