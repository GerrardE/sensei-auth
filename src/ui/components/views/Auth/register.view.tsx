import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PasswordStrengthBar from "react-password-strength-bar";
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
import { IRegisterProps } from "./auth.interfaces";
import {
  fieldSchema,
  passwordSchema,
  emailSchema,
} from "../validations/schema";
import {
  registerStart,
  registerModalStop,
} from "@domain/redux/register/register.actions";
import { IRegistrationFormData } from "@domain/redux/register/register.interfaces";
import { RootState } from "@domain/redux";
import { AppModal } from "@ui/components/molecules";
import { Smiley, Eye } from "@public";

const RegisterView: React.FC<IRegisterProps> = (props) => {
  // HANDLE VISIBILITY OF THE COMPONENT
  const { visible } = props;

  // INSTANTIATE FORM FUNCTIONS
  const { register, handleSubmit, errors } = useForm();

  const { firstName, email, lastName, password } = errors;

  const [pwd, setPassword] = useState("");

  // PULL DATA FROM STATE
  const { loading, register: registr, modalOpen } = useSelector(
    (state: RootState) => state.register
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

    if (registr.message === "signup successful") {
      modalDetails = {
        modalImage: Smiley,
        modalTitle: "Congratulations!!!",
        modalDescription: "You have created an account",
      };

      return modalDetails;
    }

    return modalDetails;
  };

  // REGISTER FORM SUBMISSION
  const onSubmit = (data: IRegistrationFormData) =>
    dispatch(registerStart(data));

  return (
    <Body className={classnames({ visible })}>
      <AppModal
        config={{
          modalIsOpen: modalOpen,
          modalToggle: () => dispatch(registerModalStop(false)),
          handleModal: handleModalDetails(),
        }}
      />
      <TextLg>Getting Started</TextLg>
      <TextXs>Please enter your information to create an account</TextXs>
      <Form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
        <Row form>
          <Col lg={6} md={6} sm={12} xs={12}>
            <FormGroup>
              <AppLabel
                config={{
                  labelHtmlFor: "firstName",
                  labelClassName: "form-label",
                }}
              >
                *First Name
              </AppLabel>
              <AppInput
                config={{
                  inputType: "text",
                  inputRef: register(
                    fieldSchema({
                      title: "firstName",
                      minvalue: 2,
                      maxvalue: 20,
                    })
                  ),
                  inputId: "firstName",
                  inputName: "firstName",
                  inputClassName: classnames("form-control", {
                    "is-invalid": firstName,
                  }),
                }}
              />
              <AppErrorMessage config={{ message: firstName?.message }} />
            </FormGroup>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <FormGroup>
              <AppLabel
                config={{
                  labelHtmlFor: "lastName",
                  labelClassName: "form-label",
                }}
              >
                *Last Name
              </AppLabel>
              <AppInput
                config={{
                  inputType: "text",
                  inputRef: register(
                    fieldSchema({
                      title: "lastName",
                      minvalue: 2,
                      maxvalue: 20,
                    })
                  ),
                  inputId: "lastName",
                  inputName: "lastName",
                  inputClassName: classnames("form-control", {
                    "is-invalid": lastName,
                  }),
                }}
              />
              <AppErrorMessage config={{ message: lastName?.message }} />
            </FormGroup>
          </Col>
        </Row>
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
                  inputId: "email",
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
                  inputId: "password",
                  inputName: "password",
                  inputClassName: classnames("form-control br-0", {
                    "is-invalid": password,
                  }),
                  inputGroup: "append",
                  inputOnChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value),
                  inputGroupIcon: <AppImage config={{ imageSrc: Eye }} />,
                }}
              />
              <AppErrorMessage config={{ message: password?.message }} />
              <Row>
                <Col lg={4} md={4} className="mt-2">
                  <PasswordStrengthBar minLength={6} password={pwd} />
                </Col>
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
            <AppButton
              config={{
                buttonType: "submit",
                buttonId: "register",
                buttonOnClick: () => onSubmit,
                buttonClassName: "mt-1",
                buttonDisabled: loading,
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
              buttonId: "registerlinkedin",
              buttonOnClick: () => window.location.href = `${process.env.REACT_APP_API_BASE_URL}auth/linkedIn/signup/initialize`,
              buttonClassName: "mt-4 btn-primary",
            }}
          >
            <FaLinkedinIn className="mr-3 mb--2" size="18" />
            Join with Linkedin
          </AppButton>
        </Col>
        <Col>
          <AppButton
            config={{
              buttonType: "submit",
              buttonId: "registergoogle",
              buttonOnClick: () => window.location.href = `${process.env.REACT_APP_API_BASE_URL}auth/google/signup/initialize`,
              buttonClassName: "mt-4 btn-primary",
            }}
          >
            <FaGoogle className="mr-3 mb--2" size="18" />
            Join with Google
          </AppButton>
        </Col>
      </Row>
    </Body>
  );
};

export default RegisterView;
