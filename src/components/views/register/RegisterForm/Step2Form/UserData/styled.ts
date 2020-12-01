import styled from "@myStyled";

import Eye from "@assets/eye.svg";

export const Bold = styled.b`
  color: ${({ theme }) => theme.color.primary};
`;

export const EyeButton = styled.button`
  margin-left: ${({ theme }) => theme.spacing.s};
  width: 15px;
  background-color: transparent;
  border: none;
`;

export const EyeIcon = styled(Eye)<{ active: 1 | 0 }>`
  fill: ${({ theme, active }) => (active ? theme.color.primary : theme.color.secondary)} !important;
`;
