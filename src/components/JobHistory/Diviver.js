import React from "react";
import styled from "styled-components";

const Divider = styled.div`
  height: 650px;
  width: 6px;
  margin: 0px 110px;
  background-color: white;
  border-radius: 2px;
  opacity: 0.5;
  padding: 50px 0px;
`;

const Circle = styled.div`
  margin-top: ${props => (props.marg ? "170px" : "70px")};
  margin-left: -10px;
  height: 25px;
  width: 25px;
  background-color: #66ccff;
  border-radius: 50%;
  display: inline-block;
`;

const SmallCircle = styled.span`
  height: 10px;
  width: 10px;
  background-color: white;
  border-radius: 50%;
  display: inline-block;
`;

export default function Diviver() {
  return (
    <Divider>
      <Circle>
        <SmallCircle></SmallCircle>
      </Circle>
      <Circle marg>
        <SmallCircle></SmallCircle>
      </Circle>
      <Circle marg>
        <SmallCircle></SmallCircle>
      </Circle>
    </Divider>
  );
}
