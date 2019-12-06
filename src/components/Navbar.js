import React from "react";
import styled from "styled-components";

/*const Logo = styled.div`
    float: left;
  `;*/
const Links = styled.div`
  background: #051636;
  //background: palevioletred;
  //background: rgb(64, 198, 203);
  //background: linear-gradient(8deg,rgba(64, 198, 203, 1) 25%, rgba(0, 119, 255, 0.9710259103641457) 100%);
  height: 70px;
`;

/*const ClearDiv = styled.div`
  clear: both;
`;*/

const Li = styled.li`
  font-size: 22px;
  padding-top: 10px;
`;

const A = styled.a`
  color: #e6e6e6;
`;

const Navbar = () => {
  return (
    <div>
      <Links className="container-fluid">
        <ul className="nav justify-content-end">
          <Li className="nav-item">
            <A className="nav-link active" href="/">
              Home
            </A>
          </Li>
          <Li className="nav-item">
            <A className="nav-link" href="/">
              About
            </A>
          </Li>
          <Li className="nav-item">
            <A className="nav-link" href="/">
              Experience
            </A>
          </Li>
          <Li className="nav-item">
            <A className="nav-link" href="/">
              Portfolio
            </A>
          </Li>
        </ul>
      </Links>
    </div>
  );
};

export default Navbar;
