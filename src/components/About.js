import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Database from "../img/database.png";
import OOP from "../img/oop.png";
import Framework from "../img/framework.png";

const Wrapper = styled.div`
  width: 90%;
  padding: 40px;
  margin-top: 200px;
  text-align: left;
`;

const H1Style = styled.h1`
  margin-top: 100px;
  font-weight: bolder;
  font-size: 50px;
`;

const ParaStyle = styled.p`
  margin: 30px 0px;
  font-size: 20px;
  color: gray;
`;
const BoxStyle = styled.div`
  margin: 20px;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

const KnowledgeIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 10px;
  opacity: 0.3;
  :hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const SpanStyle = styled.span`
  margin-top: 5px;
  font-size: 18px;
`;

const SpanStyleBold = styled(SpanStyle)`
  font-weight: bolder;
  margin: 10px auto;
`;

// styling the Experience section
const ExperienceWrapper = styled.div`
  margin-top: 100px;
  padding-left: 50px;
`;

const Para = styled(ParaStyle)`
  margin-top: 40px;
  margin-bottom: 0px;
  font-size: 22px;
`;

const Row = styled.div`
  background-color: white;
  border-radius: 5px;
  border: 1px solid gray;
  width: 100%;
  height: 12px;
`;

const InnerRow = styled.div`
  background: rgb(15, 71, 177);
  background: linear-gradient(
    130deg,
    rgba(15, 71, 177, 1) 0%,
    rgba(29, 107, 253, 1) 29%,
    rgba(62, 196, 226, 1) 69%
  );
  width: ${props => props.theme.main};
  height: 11px;
`;

const About = () => {
  return (
    <Wrapper>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <H1Style>About Myself</H1Style>
            <ParaStyle>
              I will approach each task responsibly, with commitment and
              dedication. With me, your company gains an employee who is
              flexible, motivated and team-oriented. In previous projects, I
              have also been able to demonstrate strong communication skills, a
              high willingness to learn and a great deal of creativity.
            </ParaStyle>
            <div className="container-fluid">
              <div className="row">
                <BoxStyle className="col-3">
                  <KnowledgeIcon src={Database} alt="database" />
                  <br />
                  <SpanStyleBold>Certified</SpanStyleBold>
                  <div>
                    <SpanStyle> Oracle OCA</SpanStyle>
                    <br />
                    <SpanStyle> Posgresql</SpanStyle>
                    <br />
                    <SpanStyle> Mysql</SpanStyle>
                  </div>
                </BoxStyle>
                <BoxStyle className="col-3">
                  <KnowledgeIcon src={OOP} alt="Object Oriented Programming" />
                  <br />
                  <SpanStyleBold>Very Good </SpanStyleBold>
                  <div>
                    <SpanStyle> Python 3.0 </SpanStyle>
                    <br />
                    <SpanStyle> Java</SpanStyle>
                    <br />
                    <SpanStyle> JavaScript</SpanStyle>
                  </div>
                </BoxStyle>
                <BoxStyle className="col-3">
                  <KnowledgeIcon src={Framework} alt="framework" />
                  <br />
                  <SpanStyleBold>Very Good</SpanStyleBold>
                  <div>
                    <SpanStyle> React.js </SpanStyle>
                    <br />
                    <SpanStyle> Flask</SpanStyle>
                    <br />
                    <SpanStyle> Vue.js</SpanStyle>
                  </div>
                </BoxStyle>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ExperienceWrapper>
              <ThemeProvider theme={{ main: "90%" }}>
                <Para>JavaScript</Para>
                <Row>
                  <InnerRow></InnerRow>
                </Row>
              </ThemeProvider>
              <ThemeProvider theme={{ main: "87%" }}>
                <Para>React.js Library</Para>
                <Row>
                  <InnerRow></InnerRow>
                </Row>
              </ThemeProvider>
              <ThemeProvider theme={{ main: "80%" }}>
                <Para>Flask Framework</Para>
                <Row>
                  <InnerRow></InnerRow>
                </Row>
              </ThemeProvider>
              <ThemeProvider theme={{ main: "85%" }}>
                <Para>Oracle/Postgresql</Para>
                <Row>
                  <InnerRow></InnerRow>
                </Row>
              </ThemeProvider>
              <ThemeProvider theme={{ main: "90%" }}>
                <Para>HTML/CSS</Para>
                <Row>
                  <InnerRow></InnerRow>
                </Row>
              </ThemeProvider>
              <ThemeProvider theme={{ main: "70%" }}>
                <Para>Python 3.0</Para>
                <Row>
                  <InnerRow></InnerRow>
                </Row>
              </ThemeProvider>
            </ExperienceWrapper>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
