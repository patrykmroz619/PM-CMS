import styled from "@myStyled";

export const Section = styled.section`
  padding: 0 ${({ theme }) => theme.spacing.s};
`;

export const Heading = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.s};
`;

export const Separator = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.s};
  width: 100%;
  height: 2px;
  background-image: linear-gradient(90deg, #aaa, transparent 350px);
`;
