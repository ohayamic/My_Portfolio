import React from "react";
import styled from "styled-components";
import Image from "../img/IMG.jpg";
import Mail from "../img/mail.png";
import Telephone from "../img/telephone.png";
import House from "../img/house.png";
import Calendar from "../img/calendar.png";
import Facebook from "../img/facebook.png";
import Twitter from "../img/twitter.png";
import Xing from "../img/xing.png";
import Linkedin from "../img/linkedin.png";

const Wrapper = styled.div`
  width: 90%;
  background-color: white;
  margin: 150px auto -150px;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 4px 40px 4px 8px rgba(0, 0, 0, 0.05),
    4px 50px 4px 8px rgba(0, 0, 0, 0.05);
`;

const ProfileImg = styled.img`
  padding: 10px;
  width: 90%;
  height: 800px;
  border-radius: 25px;
  text-align: center;
`;

const BioDataStyle = styled.div`
  border-radius: 25px;
  text-align: start;
  height: 800px;
  padding: 100px 60px;
`;

const Divider = styled.div`
  vertical-align: middle;
  margin-top: 20px;
`;

const H1Style = styled.h1`
  font-weight: bolder;
  font-size: 50px;
`;

const Dev = styled.p`
  font-size: 30px;
  font-weight: light;
`;

const IconsContact = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
`;

const SpanStyle = styled.p`
  font-size: 22px;
  color: gray;
`;

const ParaStyle = styled.p`
  font-size: 26px;
  color: #27292b;
`;

const SocialContact = styled(IconsContact)`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  margin-top: 20px;
  opacity: 0.3;
  :hover {
    opacity: 1;
    cursor: pointer;
  }
`;
const SocialContactLarge = styled(IconsContact)`
  width: 60px;
  height: 60px;
  margin-right: 20px;
  margin-top: 20px;
  opacity: 0.3;
  :hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const Bio = () => {
  return (
    <div>
      <Wrapper className="container-fluid">
        <div className="row">
          <div className="col-7">
            <div>
              <ProfileImg src={Image} alt="profilePics" />
            </div>
          </div>
          <div className="col-5">
            <BioDataStyle>
              <Divider>
                <ParaStyle>Hello Everybody, I am</ParaStyle>
              </Divider>
              <Divider>
                <H1Style>Ohaya O. Michael</H1Style>
              </Divider>
              <Divider>
                <Dev> Junior Web Developer (React.js)</Dev>
              </Divider>
              <Divider>
                <SpanStyle>
                  As a Junior Web Developer, I am passionate about
                  web-applications that engages users that visit the site in
                  other to create useful user experience and satisfaction.
                </SpanStyle>
              </Divider>
              <Divider>
                <Divider>
                  <SpanStyle>
                    <IconsContact src={Calendar} alt="dob" />
                    10th October
                  </SpanStyle>
                </Divider>

                <Divider>
                  <SpanStyle>
                    <IconsContact src={Telephone} alt="telephone" /> +49 (0)
                    17647167980
                  </SpanStyle>
                </Divider>

                <Divider>
                  <SpanStyle>
                    <IconsContact src={Mail} alt="business" />
                    michael.onyebuchi.ohaya@gmail.com
                  </SpanStyle>
                </Divider>

                <Divider>
                  <SpanStyle>
                    <IconsContact src={House} alt="house" />
                    Wilhelm-külz Straße 22, 99423 Weimar
                  </SpanStyle>
                </Divider>
                <SocialContact src={Facebook} alt="house" />
                <SocialContactLarge src={Twitter} alt="house" />
                <SocialContactLarge src={Xing} alt="house" />
                <SocialContact src={Linkedin} alt="house" />
              </Divider>
              <Divider></Divider>
            </BioDataStyle>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Bio;
