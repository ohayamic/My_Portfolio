import React from "react";
import styled from "styled-components";

const Separator = styled.div`
  height: 650px;
  width: 5px;
  margin: 0px 80px;
  background-color: white;
  border-radius: 2px;
  opacity: 0.5;
`;

const Circle = styled.div`
  margin: 90px -10px;
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

export default function Divider() {
  return (
    <Separator>
      <Circle>
        <SmallCircle></SmallCircle>
      </Circle>
      <Circle>
        <SmallCircle></SmallCircle>
      </Circle>
      <Circle>
        <SmallCircle></SmallCircle>
      </Circle>
    </Separator>
  );
}
