import styled from "styled-components";
import { Modal as Mdl, ModalBody as MdlBdy } from "reactstrap";

const Modal = styled(Mdl)`
    background: #FFFFFF;
    border-radius: 13px;
    width: 80%;
    margin: 5% auto;
`;

const ModalBody = styled(MdlBdy)`
    margin: 5rem 3rem;
`;

const TextLg = styled.h1`
  font-size: 24px;
  color: #33535F;
  text-align: center;
  line-height: 22px;
  font-weight: bold;
  font-style: normal;
  margin-top: 1rem;
`;

const TextSm = styled.h6`
  font-size: 16px;
  color: #33535F;
  text-align: center;
  line-height: 20px;
  font-weight: 500;
  font-style: normal;
  margin-top: 1rem;
`;

export { Modal, TextLg, TextSm, ModalBody };
