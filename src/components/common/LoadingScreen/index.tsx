import React from "react";
import { GradientBg } from "../GradientBg";
import { Spinner } from "../Spinner";

export const LoadingScreen = () => (
  <GradientBg>
    <Spinner />
  </GradientBg>
);
