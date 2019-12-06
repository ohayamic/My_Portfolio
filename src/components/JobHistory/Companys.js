import React from "react";
import styled from "styled-components";

const Company = styled.div`
  margin-bottom: 50px;
  padding-top: 50px;
  text-align: right;
  width: 100%;
  height: 150px;
  font-size: 22px;
  color: #d9d9d9;
  overflow: auto;
`;

const Paragraph = styled.p`
  margin-bottom: -7px;
`;

export default function Companys() {
  return (
    <div>
      <Company>
        <Paragraph>10/2010 – 09/2015</Paragraph>
        <Paragraph>Trustcare Solutions (Lagos Nigeria)</Paragraph>
        <Paragraph>Full-Time Employment</Paragraph>
      </Company>
      <Company>
        <Paragraph> 05/2007 – 11/2007 </Paragraph>
        <Paragraph>
          Securities and Exchange Commission (Abuja Nigeria)
        </Paragraph>
        <Paragraph>Internship</Paragraph>
      </Company>
      <Company>
        <Paragraph> 05/2007 – 11/2007 </Paragraph>
        <Paragraph>
          Securities and Exchange Commission (Abuja Nigeria)
        </Paragraph>
        <Paragraph>Internship</Paragraph>
      </Company>
    </div>
  );
}
