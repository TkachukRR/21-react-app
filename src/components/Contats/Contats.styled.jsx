import styled from "@emotion/styled";

export const Title = styled.h3`
  margin: ${(p) => p.theme.space[2]}px 0;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${(props) => props.theme.colors.textSub};

  svg {
    color: ${(props) => props.theme.colors.textSecondary};
  }
`;
