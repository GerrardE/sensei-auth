import React from "react";
import Button from "./appbutton.styles";
import IProps from "./appbutton.interfaces";

const AppButton: React.FunctionComponent<IProps> = ({ config, ...rest }) => {
  const {
    buttonType, buttonId, buttonClassName, buttonOnClick, buttonDisabled,
  } = config;
  const { children } = rest;

  return (
    // eslint-disable-next-line react/button-has-type
    <Button
      type={buttonType}
      id={buttonId}
      className={buttonClassName}
      onClick={buttonOnClick}
      disabled={buttonDisabled}
    >
      {children}
    </Button>
  );
};

export default AppButton;
