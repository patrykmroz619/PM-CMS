import styled from "@myStyled";

export const Wrapper = styled.div`
  position: relative;
  padding-top: 42px;
  height: 100%;
`;

export const ScrollableBox = styled.div`
  width: 100%;
  flex-grow: 0;
  flex-shrink: 1;
  max-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Table = styled.table`
  table-layout: fixed;
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
  white-space: pre;
`;

export const TBody = styled.tbody`
  text-align: center;
`;

export const TR = styled.tr`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.color.tertiaryLight};
  }
  cursor: pointer;
  transition: 0.3s;

  tbody &:hover {
    background-color: ${({ theme }) => theme.color.secondaryHover};
  }
`;

export const TD = styled.td`
  padding: ${({ theme }) => theme.spacing.s};
`;
