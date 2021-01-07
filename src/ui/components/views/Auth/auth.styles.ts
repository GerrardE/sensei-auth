import styled from "styled-components";
import { Link as BrowserLink } from "react-router-dom";
import { Row as Rw, Col } from "reactstrap";

const SectionMd = styled(Col)`
  background: #ffffff;
  padding: 2rem 4rem;
  text-align: left;
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

const TextMd = styled(BrowserLink).attrs((props) => ({
  className: props.className,
}))`
  &.active {
    border-bottom: 3px solid #ffcd00;
  }
  font-size: 16px;
  color: #4d5667;
  margin: 0;
  padding: 0;
  &:hover {
    text-decoration: none;
    color: #4d5667;
  }
`;

const TextXs = styled(TextLg)`
  font-weight: 500;
  font-size: 12px;
  // line-height: 16px;
  align-items: center;
  color: #4d5667;
  margin-top: 0.5rem;
`;

const Header = styled(Rw)`
  border-radius: 3px;
  margin: 0 0rem 1rem 0rem;
  align-items: end;
  border-bottom: 1px solid #f5f5f5;
  justify-content: space-between;
`;

const Body = styled.div.attrs((props) => ({
  className: props.className,
}))`
  &.visible {
    display: block;
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 2s;
  }

  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  display: none;
  width: 100%;
`;

export { TextLg, TextXs, SectionMd, TextMd, Header, Body };
