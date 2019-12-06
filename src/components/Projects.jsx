import React from "react";
import styled from "styled-components";

const ProjectWrapper = styled.div`
  height: 900px;
`;
const ProjectHeading = styled.div`
  margin-top: 120px;
  text-align: center;
  font-size: 50px;
  font-weight: bolder;
  padding: 30px 0px;
  > p {
    width: 50%;
    margin: 26px auto;
    font-size: 20px;
    color: gray;
  }
`;
const ProjectBody = styled.div`
  width: 90%;
  margin: 100px auto;
  > div {
    height: 450px;
    text-align: left;
    border: 2px solid lightgray;
    border-radius: 15px 25px;
  }
`;

const Projects = () => {
  return (
    <ProjectWrapper>
      <ProjectHeading>
        <div>
          <p> Some Personal Projects </p>
        </div>

        <p>
          "If your actions inspire others to dream more, learn more, do more and
          become more, you are a leader." - John Quincy Adams
        </p>
        <p>
          "Leadership is the art of getting someone else to do something you
          want done because he wants to do it." - Dwight D. Eisenhower
        </p>
        <ProjectBody className="row">
          <div className="col-4">One</div>
          <div className="col-4">Two</div>
          <div className="col-4"> Three</div>
        </ProjectBody>
      </ProjectHeading>
    </ProjectWrapper>
  );
};

export default Projects;
