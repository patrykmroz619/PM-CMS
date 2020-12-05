import styled from "@myStyled";

export const GradientBg = styled.div`
  width: 100vw;
  min-height: 100vh;

  background: ${({ theme }) => theme.gradient.primaryColor};
  background: ${({ theme }) => theme.gradient.primary};
`;
