import React, { Component } from "react";
import styled from "styled-components";
import JobHistory from "../components/JobHistory/JobHistory";
import Education from "../components/Education/Education";
const Wrapper = styled.div`
  background: rgb(15, 71, 177);
  background: linear-gradient(
    130deg,
    rgba(15, 71, 177, 1) 0%,
    rgba(29, 107, 253, 1) 29%,
    rgba(62, 196, 226, 1) 69%
  );
  height: 1000px;
  padding: 40px;
  margin-top: 100px;
  text-align: center;
`;

const ButtonStyle = styled.button`
  background-color: ${props => (props.primary ? "white" : "#319BD8")};
  color: ${props => (props.primary ? "gray" : "white")};
  border: 1px solid #acd7f0;
  border-radius: 10px;
  height: 60px;
  margin: 100px 10px;
  width: 200px;
  font-size: 18px;
  :hover {
    background-color: ${props => (props.primary ? "#319BD8" : "white")};
    color: ${props => (props.primary ? "white" : "gray")};
    cursor: pointer;
  }
`;

class Experience extends Component {
  state = {
    IsChanged: false
  };
  ShowSchool = () => {
    this.setState({
      IsChanged: false
    });
  };

  ShowExperience = () => {
    this.setState({
      IsChanged: !false
    });
  };
  render() {
    return (
      <Wrapper>
        <div>
          <ButtonStyle primary onClick={this.ShowSchool}>
            My Educational
          </ButtonStyle>
          <ButtonStyle onClick={this.ShowExperience}>My Experience</ButtonStyle>
          {this.state.IsChanged ? <JobHistory /> : <Education />}
        </div>
      </Wrapper>
    );
  }
}

export default Experience;
