import React from "react";
import Logo from "../img/logo1.png";
import FB from "../img/face.png";
import TW from "../img/twitter.png";
import IN from "../img/xing.png";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 400px;
  //background-color: #3c3c3c;
  background-color: #051636;
`;

const InnerWrapper = styled.div`
  padding: 50px;
  font-size: 24px;
  text-align: left;
  color: white;
`;

const LogoHeader = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 20px 0px;

  > a {
    color: gray;
    text-decoration: none;
    :hover {
      color: white;
    }
  }
  > a > span {
    font-size: 30px;
  }
`;

const Img = styled.img`
  height: 50px;
  background-color: whitesmoke;
  margin-right: 10px;
`;

const ImgSocial = styled(Img)`
  height: 30px;
  background-color: transparent;
`;

const AboutCompany = styled.div`
  padding: 20px;
  font-size: 21px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: gray;
  > a {
    color: whitesmoke;
    :hover {
      color: #b3ffff;
      font-size: 22px;
    }
  }
`;

const CompanyContact = styled.div`
  padding: 10px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  > a {
    font-size: 21px;
    text-decoration: none;
    color: gray;
    margin-bottom: 10px;
    :hover {
      color: #b3ffff;
      font-size: 22px;
    }
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <div className="row">
          <LogoHeader>
            <a href="/">
              <Img src={Logo} />
              <span> OhayaMic </span>
            </a>
          </LogoHeader>
          <div className="col-6">
            <div className="row">
              <div className="col-8">
                <AboutCompany>
                  <p>
                    We are a German Based agency specializing in web
                    development.
                  </p>
                  <a href="/">More on this</a>
                </AboutCompany>
              </div>
              <div className="col-4">
                <CompanyContact>
                  <a href="/">
                    <p>Contact Us</p>
                  </a>
                  <a href="/">
                    <p>OhayaMic@gmail.com</p>
                  </a>
                  <a href="/">
                    <p>+4917647167980</p>
                  </a>
                  <div style={{ marginLeft: "10px" }}>
                    <a href="/">
                      <ImgSocial src={FB} />
                    </a>
                    <a href="/">
                      <ImgSocial src={TW} />
                    </a>
                    <a href="/">
                      <ImgSocial src={IN} />
                    </a>
                  </div>
                </CompanyContact>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="row">
              <div className="col-6">
                <AboutCompany>
                  <p>Looking to hire us, get details </p>
                  <a href="/">
                    <p>Here</p>
                  </a>
                </AboutCompany>
              </div>
              <CompanyContact className="col-5">
                <a href="/">
                  <p>Manifesto</p>
                </a>
                <a href="/">
                  <p>Press</p>
                </a>
                <a href="/">
                  <p>Data Protection</p>
                </a>
                <a href="/">
                  <p>
                    German <ImgSocial src={IN} />
                  </p>
                </a>
              </CompanyContact>
            </div>
          </div>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Footer;
