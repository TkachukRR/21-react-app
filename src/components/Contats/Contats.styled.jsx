import styled from "@emotion/styled";

export const Title = styled.h3``;

export const PhoneNumbers = styled.p``;
export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${(props) => props.theme.colors.textSub};

  svg {
    color: ${(props) => props.theme.colors.textSecondary};
  }
`;
