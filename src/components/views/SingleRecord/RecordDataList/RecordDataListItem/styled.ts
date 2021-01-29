import styled from "@myStyled";

export const ItemWrapper = styled.li`
  padding-top: 5px;
  padding-bottom: 5px;
  margin-right: ${({ theme }) => theme.spacing.s};
  margin-bottom: ${({ theme }) => theme.spacing.s};
  min-width: 240px;
`;

export const FieldName = styled.p`
  margin-left: 3px;
`;

export const Separator = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100px;
  height: 2px;
  background-color: ${({ theme }) => theme.color.primary};
`;

export const TextValue = styled.p`
  margin-left: 3px;
  font-size: 18px;
  font-weight: bold;
`;

export const ColorValue = styled.div<{ value: string }>`
  max-width: 250px;
  height: 25px;
  background-color: ${({ value }) => value};
`;
