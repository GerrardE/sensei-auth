import styled from "styled-components";

const Image = styled.img.attrs(props => ({
  className: props.className,
}))`
  &.xs {
    width: 10%;
    height: auto;
  }
  &.img-md {
    width: 80%;
    height: auto;
    margin: 0 10% 0
  }
  &.modal-img {
    display: flex;
    margin: auto;
  }
`;

export default Image;
