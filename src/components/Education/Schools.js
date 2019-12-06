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
export default function Schools() {
  return (
    <div>
      <School>
        <p style={{ paddingTop: "60px" }}>Sept. 2015 - Aug. 2019 </p>
        <p style={{ marginTop: "0px" }}>Master of Science</p>
      </School>
      <School>
        <p style={{ paddingTop: "25px" }}>Sept. 2003 - Aug. 2008 </p>
        <p style={{ marginTop: "0px" }}>Bachelor's of Science</p>
      </School>
      <School>
        <p style={{ marginTop: "-10px" }}>Sept. 1995 - Aug. 2001 </p>
        <p>School Leaving Certificate</p>
      </School>
    </div>
  );
}
