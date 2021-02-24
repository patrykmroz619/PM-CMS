import styled from "@myStyled";

export const Wrapper = styled.section`
  padding: ${({ theme }) => theme.spacing.s};
  border-radius: 5px;
  background-image: linear-gradient(170deg, #cd5c5ccc, #cd5c5c09 70%);
`;

export const Heading = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.s};
`;

export const Separator = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.s};
  width: 100%;
  height: 2px;
  background-image: linear-gradient(90deg, #cd5c5c, transparent 350px);
`;
