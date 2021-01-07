import React from "react";
import IProps from "./applink.interfaces";
import Link from "./applink.styles";

const AppLink: React.FunctionComponent<IProps> = ({ config }) => {
  const { linkHref, linkText, linkClassName } = config;

  return (
    <Link href={linkHref} className={linkClassName}>{linkText}</Link>
  );
};

export default AppLink;
