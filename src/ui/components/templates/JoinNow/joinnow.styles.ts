import styled from "styled-components";
import { Container, Row as Rw, Col } from "reactstrap";
import { AppLink as Lnk } from "../../atoms";

const Join = styled(Container)`
  background: #fafaf9;
  padding: 0;
`;

const Wrapper = styled.div`
  background: #ffffff;
  overflow: hidden;
`;

const Row = styled(Rw)`
  height: 100vh;
`;

const SectionBg = styled(Col)`
  background: #e5e5e5;
  padding: 2rem 3rem;
`;

const TextLg = styled.h1.attrs((props) => ({
  className: props.className,
}))`
  &.text-black {
    line-height: 50px;
    color: #4d5667;
    text-align: center;
  }
  &.sensei {
    letter-spacing: 0.04em;
  }
  font-style: normal;
  font-weight: bold;
  color: #ffcd00;
  line-height: 30px;
  font-size: 25px;
  cursor: pointer;
`;

const Link = styled(Lnk)`
  font-weight: 500;
  font-size: 14px;
  line-height: 50px;
`;

const Footer = styled(Rw)`
  background: #efefef;
  width: 100%;
  padding: 0.25rem 3rem;
  position: absolute;
  right: 0;
  bottom: 0;
  justify-content: space-between;
  height: 4rem;
`;

const Div = styled.div`
  height: 90%;
`;

export { Join, TextLg, Link, Wrapper, SectionBg, Footer, Div, Row };
