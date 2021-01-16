import styled from "@myStyled";
import { P } from "@common";
import media, { breakpoints } from "@mediaQuery";

export const Field = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 2px;
  padding: 5px 15px;
  border-radius: 30px;
  transition: 0.3s;
  cursor: pointer;

  svg {
    opacity: 1;
    width: 20px;
    height: 20px;
    justify-self: flex-end;
    flex-shrink: 0;
    transition: 0.1s;
  }

  &:nth-child(even) {
    background-color: ${({ theme }) => theme.color.secondary};
  }

  ${media(breakpoints.descop.s)} {
    padding: 5px 25px;
    svg {
      opacity: 0;
    }

    &:nth-child(even) {
      background-color: transparent;
    }

    &:hover {
      background-color: ${({ theme }) => theme.color.secondary};

      svg {
        opacity: 1;
      }
    }
  }
`;

export const Numeral = styled(P)`
  min-width: 25px;
  width: 10%;
  flex-shrink: 0;
`;

export const Type = styled(P)`
  min-width: 70px;
  width: 30%;
`;

export const Name = styled(P)`
  flex-grow: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
