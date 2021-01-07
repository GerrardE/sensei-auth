import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Row, Col, Form, FormGroup, Spinner } from "reactstrap";
import classnames from "classnames";
import { FaLinkedinIn, FaGoogle } from "react-icons/fa";
import {
  AppLabel,
  AppInput,
  AppButton,
  AppImage,
  AppErrorMessage,
} from "../../atoms";
import { TextLg, TextXs, Body } from "./auth.styles";
import { ILoginProps } from "./auth.interfaces";
import { passwordSchema, emailSchema } from "../validations/schema";
import { ILoginFormData } from "@domain/redux/login/login.interfaces";
import { loginStart, loginModalStop } from "@domain/redux/login/login.actions";
import { RootState } from "@domain/redux";
import { AppModal } from "@ui/components/molecules";
import { UnSmiley, Eye } from "@public";

const LoginView: React.FC<ILoginProps> = (props) => {
  const { visible } = props;

  const { register, handleSubmit, errors } = useForm();

  const { email, password } = errors;

  // PULL DATA FROM STATE
  const { loading, errors: err, modalOpen } = useSelector(
    (state: RootState) => state.login
  );

  // SETUP DISPATCH
  const dispatch = useDispatch();

  // SET UP MODAL
  const handleModalDetails = () => {
    let modalDetails = {
      modalImage: "",
      modalTitle: "",
      modalDescription: "",
    };

    if (err?.error?.message === "invalid email or password") {
      modalDetails = {
        modalImage: UnSmiley,
        modalTitle: "Oops!!! You have the wrong email or password!!!",
        modalDescription: `kindly try again or let us help you reset your password`,
      };

      return modalDetails;
    }

    return modalDetails;
  };

  // LOGIN FORM SUBMISSION
  const onSubmit = (data: ILoginFormData) => dispatch(loginStart(data));

  return (
    <Body className={classnames({ visible: visible })}>
      <AppModal
        config={{
          modalIsOpen: modalOpen,
          modalToggle: () => dispatch(loginModalStop(false)),
          handleModal: handleModalDetails(),
        }}
      />
      <TextLg>Stay Connected</TextLg>
      <TextXs>Please enter your details to access your account</TextXs>
      <Form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col>
            <FormGroup>
              <AppLabel
                config={{
                  labelHtmlFor: "email",
                  labelClassName: "form-label",
                }}
              >
                *Email Address
              </AppLabel>
              <AppInput
                config={{
                  inputType: "email",
                  inputRef: register(emailSchema),
                  inputId: "loginemail",
                  inputName: "email",
                  inputClassName: classnames("form-control", {
                    "is-invalid": email,
                  }),
                }}
              />
              <AppErrorMessage config={{ message: email?.message }} />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <AppLabel
                config={{
                  labelHtmlFor: "password",
                  labelClassName: "form-label",
                }}
              >
                *Password
              </AppLabel>
              <AppInput
                config={{
                  inputType: "password",
                  inputRef: register(passwordSchema),
                  inputId: "loginpassword",
                  inputName: "password",
                  inputClassName: classnames("form-control br-0", {
                    "is-invalid": password,
                  }),
                  inputGroup: "append",
                  inputGroupIcon: <AppImage config={{ imageSrc: Eye }} />,
                }}
              />
              <AppErrorMessage config={{ message: password?.message }} />
              <Row>
                <Col>
                  {loading && (
                    <Spinner
                      type="grow"
                      color="warning"
                      size="sm"
                      className="float-right mt-2"
                    />
                  )}
                </Col>
              </Row>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row className="mx-0">
              <AppInput
                config={{
                  inputType: "checkbox",
                  inputRef: register(),
                  inputId: "rememberme",
                  inputName: "rememberme",
                  inputClassName: "mr-2 py-0",
                }}
              />
              <TextXs className="my-auto">Remember me</TextXs>
            </Row>
          </Col>
          
          <Col>
            <Row className="mx-0 float-right">
              <TextXs>Forgot password?</TextXs>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <AppButton
              config={{
                buttonType: "submit",
                buttonId: "login",
                buttonOnClick: () => onSubmit,
                buttonClassName: "mt-1",
              }}
            >
              Continue
            </AppButton>
          </Col>
        </Row>
      </Form>
      <Row>
        <Col>
          <AppButton
            config={{
              buttonType: "submit",
              buttonId: "loginlinkedin",
              buttonOnClick: () =>
                (window.location.href = `${process.env.REACT_APP_API_BASE_URL}auth/linkedIn/signup/initialize`),
              buttonClassName: "mt-4 btn-primary",
            }}
          >
            <FaLinkedinIn className="mr-3 mb--2" size="18" />
            Sign in with Linkedin
          </AppButton>
        </Col>
        <Col>
          <AppButton
            config={{
              buttonType: "submit",
              buttonId: "logingoogle",
              buttonOnClick: () =>
                (window.location.href = `${process.env.REACT_APP_API_BASE_URL}auth/google/signup/initialize`),
              buttonClassName: "mt-4 btn-primary",
            }}
          >
            <FaGoogle className="mr-3 mb--2" size="18" />
            Sign in with Google
          </AppButton>
        </Col>
      </Row>
    </Body>
  );
};

export default LoginView;
