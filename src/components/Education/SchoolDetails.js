import React from "react";
import styled from "styled-components";

export const School = styled.div`
  margin-bottom: 100px;
  text-align: right;
  width: 100%;
  height: 145px;
  font-size: 22px;
  color: #e6e6e6;
`;

const SchoolDetail = styled(School)`
  text-align: left;
  font-size: 18px;
`;

export default function SchoolDetails() {
  return (
    <div>
      <SchoolDetail>
        <p style={{ paddingTop: "30px" }}>
          Bauhaus University Weimar, P.M.B 99425{" "}
        </p>
        <p style={{ marginTop: "-15px" }}>
          Masters in Computer Science and Media studies
        </p>
        <ul>
          <li>Focus in Image Analysis and Machine Learning. </li>
          <li>Degree as Master of Science (M.Sc.) </li>
        </ul>
      </SchoolDetail>
      <SchoolDetail>
        <p>Federal University of Technology Owerri, P.M.B 1526 </p>
        <p style={{ marginTop: "-15px" }}>
          Bachelors in Mathematics and Computer Science{" "}
        </p>
        <ul>
          <li>Focus in Software Development. </li>
          <li>Degree as Bachelor of Science (B.Sc.) </li>
        </ul>
      </SchoolDetail>
      <SchoolDetail>
        <p style={{ marginTop: "-30px" }}>
          Randle Secondary School Apapa Lagos, P.M.B ....
        </p>
        <p style={{ marginTop: "-15px" }}>First School Leaving Certificate</p>
        <ul>
          <li>Focus in Image Analysis and Machine Learning. </li>
          <li>Degree as Master of Science (M.Sc.) </li>
        </ul>
      </SchoolDetail>
    </div>
  );
}
