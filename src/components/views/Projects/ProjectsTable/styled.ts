import styled from "@myStyled";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  padding-top: 42px;
  flex-basis: 100%;
  align-self: flex-start;
  order: 2;
  height: calc(var(--viewportHeight) - 250px);
`;

export const ScrollableBox = styled.div`
  width: 100%;
  flex-grow: 0;
  flex-shrink: 1;
  max-height: 100%;
  overflow-y: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0px;
  border-collapse: collapse;
`;

export const THead = styled.thead`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  color: ${({ theme }) => theme.color.light};
  background-color: ${({ theme }) => theme.color.tertiary};
`;

export const TH = styled.th`
  padding: ${({ theme }) => theme.spacing.s};
  height: 42px;
`;

export const TBody = styled.tbody`
  text-align: center;
`;
