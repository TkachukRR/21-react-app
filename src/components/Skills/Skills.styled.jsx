import styled from "@emotion/styled";

export const Title = styled.h3`
  margin: 16px 0;
`;

export const List = styled.ul`
  margin-bottom: 8px;
`;

export const Skill = styled.li`
  margin-left: 1rem;
  ::marker {
    color: ${(props) => props.theme.colors.textAccent};
  }
`;
