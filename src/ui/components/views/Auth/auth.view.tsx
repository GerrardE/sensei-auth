import React from "react";
import classnames from "classnames";
import queryString from "query-string";
import { Col } from "reactstrap";
import JoinNow from "../../templates/JoinNow/joinnow.template";
import { SectionMd, TextMd, Header } from "./auth.styles";
import { IAuthProps } from "./auth.interfaces";
import RegisterView from "./register.view";
import LoginView from "./login.view";

const AuthView: React.FC<IAuthProps> = ({ match, history }) => {
  const { path } = match;

  const search = queryString.parse(history.location.search);
 
  console.log(search)

  return (
    <JoinNow>
      <SectionMd lg={5} md={12} sm={12} xs={12}>
        <Header>
          <Col lg={2} md={2} sm={2} xs={2} className="pl-0">
            <TextMd
              to="/login"
              className={classnames({ active: path === "/login" || path === "/" })}
            >
              Login
            </TextMd>
          </Col>
          <Col lg={2} md={2} sm={2} xs={2} className="pr-0">
            <TextMd
              to="/register"
              className={classnames({ active: path === "/register" })}
            >
              Register
            </TextMd>
          </Col>
        </Header>
        <RegisterView visible={path === "/register"} />
        <LoginView visible={path === "/login" || path === "/"} />
      </SectionMd>
    </JoinNow>
  );
};

export default AuthView;
