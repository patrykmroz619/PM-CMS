import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { logoutView as content } from "@content";
import { logoutUser } from "@fetch";
import { ConfirmationModal } from "@common";

const LogoutView = () => {
  const history = useHistory();
  const onClose = () => history.goBack();

  const dispatch = useDispatch();
  const onConfirm = () => {
    dispatch(logoutUser());
  };

  return (
    <ConfirmationModal message={content.message} isOpen onClose={onClose} onConfirm={onConfirm} />
  );
};

export default LogoutView;
