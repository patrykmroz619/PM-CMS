import styled from "@myStyled";

type ParagraphProps = {
  center?: boolean;
  light?: boolean;
};

export const P = styled.p<ParagraphProps>`
  margin: ${({ theme }) => theme.spacing.s} 0;
  font-size: ${({ theme }) => theme.fontSize.p};
  color: ${({ theme, light }) => (light ? theme.color.light : theme.color.dark)};
  text-align: ${({ center }) => (center ? "center" : "left")};
`;
