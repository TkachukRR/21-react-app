import styled from "@emotion/styled";

export const FullName = styled.h1`
  margin-bottom: ${(props) => props.theme.space[3]}px;
  color: ${(props) => props.theme.colors.textTitle};
`;
export const Intro = styled.p`
  width: 85%;
  margin-bottom: ${(props) => props.theme.space[3]}px;
`;
export const SubInfo = styled.span`
  font-weight: 600;
`;
