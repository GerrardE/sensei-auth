import React from "react";
import Label from "./applabel.styles";
import ILabelProps from "./applabel.interfaces";

const AppLabel: React.FunctionComponent<ILabelProps> = ({ config, children }) => {
  const { labelHtmlFor, labelClassName } = config;
  
  return (
    <Label htmlFor={labelHtmlFor} className={labelClassName}>
      {children}
    </Label>
  );
};

export default AppLabel;
