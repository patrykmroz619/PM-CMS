import routes from "@routes";
import React from "react";
import { Link, useLocation } from "react-router-dom";

import * as S from "./styled";

const ViewSwitcher = () => {
  const location = useLocation();

  const isRecordView = location.pathname.includes("records");

  return (
    <S.Switcher>
      <Link to={routes.records}>
        <S.SwitcherText isActive={isRecordView}>Records</S.SwitcherText>
      </Link>
      <Link to={routes.modelFields}>
        <S.SwitcherText isActive={!isRecordView}>Fields</S.SwitcherText>
      </Link>
    </S.Switcher>
  );
};

export default ViewSwitcher;
