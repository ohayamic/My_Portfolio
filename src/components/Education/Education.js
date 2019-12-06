import React from "react";
import Divider from "../Divider/Divider";
import Schools from "./Schools";
import SchoolDetails from "./SchoolDetails";

const Education = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <Schools />
          </div>
          <div className="col-2">
            <Divider />
          </div>

          <div className="col-5">
            <SchoolDetails />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
