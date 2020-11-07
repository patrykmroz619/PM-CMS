import styled from "@myStyled";

export const GradientBg = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: ${({ theme }) => theme.gradient.primaryColor};
  background: ${({ theme }) => theme.gradient.primary};
`;
