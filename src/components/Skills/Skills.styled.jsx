import styled from "@emotion/styled";

export const Title = styled.h3`
  margin: ${(p) => p.theme.space[2]}px 0;
`;

export const List = styled.ul`
  margin: ${(p) => p.theme.space[2]}px 0;
`;

export const Skill = styled.li`
  margin-left: 1rem;
  ::marker {
    color: ${(props) => props.theme.colors.textAccent};
  }
`;
