import React from "react";

import * as S from "./styled";

type TogglerProps = React.InputHTMLAttributes<HTMLInputElement> & {
  onTogglerChange: () => void;
  pending?: boolean;
};

export const Toggler = ({
  checked,
  onTogglerChange,
  disabled,
  pending,
  ...props
}: TogglerProps) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key == "Enter" && !disabled && !pending) {
      onTogglerChange();
    }
  };

  const handleClick = () => {
    if (!disabled && !pending) {
      onTogglerChange();
    }
  };

  return (
    <S.SwitchWrapper
      active={!!checked}
      onClick={handleClick}
      tabIndex={disabled ? -1 : 1}
      onKeyPress={handleKeyPress}
      pending={Boolean(pending)}
    >
      <S.Switch active={!!checked} pending={Boolean(pending)} />
      <S.Checkbox type="checkbox" {...props} defaultChecked={checked} />
    </S.SwitchWrapper>
  );
};
