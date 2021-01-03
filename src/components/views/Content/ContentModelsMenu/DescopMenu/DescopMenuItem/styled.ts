import { P } from "@common";
import styled from "@myStyled";

export const MenuItem = styled.li<{ active: boolean }>`
  padding: ${({ theme }) => theme.spacing.m};
  transition: 0.3s;
  cursor: pointer;
  border-right: 8px solid ${({ theme, active }) => (active ? theme.color.primary : "transparent")};

  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.color.secondary};
  }

  background-color: ${({ active }) => (active ? "#CDCDCD" : "")} !important;

  &:hover {
    background-color: ${({ theme }) => theme.color.secondaryHover} !important;
  }
`;

export const ModelName = styled(P)`
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ModelEndpoint = styled(P)`
  margin: 0;
  font-size: 12px;
  color: ${({ theme }) => theme.color.darkOpacity};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
