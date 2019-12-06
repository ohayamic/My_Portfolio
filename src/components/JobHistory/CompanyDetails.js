import React from "react";
import styled from "styled-components";

const CompanyDetail = styled.div`
  margin-bottom: 50px;
  padding-top: 10px;
  color: #d9d9d9;
  overflow: auto;
  height: 170px;
  text-align: left;
  font-size: 18px;
`;

const Paragraph = styled.p`
  margin-bottom: -7px;
`;

export default function CompanyDetails() {
  return (
    <div>
      <CompanyDetail>
        <p>
          I worked as a software consultant for five years with Trustcare
          Solutions Nigeria Limited. My most important tasks include ensuring
          that clients' needs are properly communicated to our technical team. I
          also ensure the newly implemented features meet our customers' needs
          through testing and troubleshooting. Thirdly, I use my skills as an
          Oracle certified associate to build databases to house clients data
          properly. I am also part of the team that deployed and train users to
          how to use the software in our clients' establishment. Finally I am
          part of the team that provide 24/7 support for the software.
        </p>
      </CompanyDetail>
      <CompanyDetail>
        <Paragraph>Major Role: Hardware maintenance</Paragraph>
        <ul>
          <li>Computer hardware maintenance and troubleshooting.</li>
          <li>Updating company’s Website with new contents.</li>
          <li>Repaired faulty desktop computers.</li>
          <li>Provided support to IT related issues</li>
        </ul>
      </CompanyDetail>
      <CompanyDetail>
        <Paragraph>Major Role: Computer Networks </Paragraph>
        <ul>
          <li> Provided assistance for Computer networking.</li>
          <li>Ensures facility Computer networks is up and running.</li>
          <li>Troubleshoot Computer networking issues.</li>
        </ul>
      </CompanyDetail>
    </div>
  );
}
