import React from "react";
import { Row, Col } from "reactstrap";
import { AppCarousel } from "../../molecules";
import { PlayButton, GoogleStore, AppleStore } from "@public";
import {
  TextLg,
  Join,
  Link,
  Wrapper,
  SectionBg,
  Footer,
  Div,
  Row as WrapperRow,
} from "./joinnow.styles";
import { AppImage } from "../../atoms";
import constants from "./joinnow.constants";

const { items } = constants;

const JoinNow: React.FunctionComponent = ({ children }) => {
  return(
    <Join fluid>
    <Wrapper>
      <WrapperRow>
        <SectionBg lg={7} md={12} sm={12} xs={12}>
          <Row>
            <Col>
              <TextLg className="sensei">Sensei</TextLg>
            </Col>
          </Row>
          <Div className="d-flex justify-content-center">
            <AppCarousel config={{ carouselItems: items }} />
          </Div>
          <Footer>
            <Row className="mt-2">
              <Col>
                <AppImage
                  config={{
                    imageSrc: PlayButton,
                    imageClassName: "mr-3",
                    imageAlt: "How Sensei Works",
                  }}
                />
                <Link config={{ linkText: "How Sensei Works" }} />
              </Col>
            </Row>
            <Row className="d-flex flex-row-reverse py-2">
              <Col>
                <AppImage
                  config={{
                    imageSrc: GoogleStore,
                    imageClassName: "mr-1",
                    imageAlt: "Download From Google Store",
                  }}
                />
                <AppImage
                  config={{
                    imageSrc: AppleStore,
                    imageClassName: "ml-1",
                    imageAlt: "Download From Apple Store",
                  }}
                />
              </Col>
            </Row>
          </Footer>
        </SectionBg>
        {children}
      </WrapperRow>
    </Wrapper>
  </Join>
  );
};

export default JoinNow;
