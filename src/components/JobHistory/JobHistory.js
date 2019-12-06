import React from "react";
import Divider from "./Diviver";
import Companys from "./Companys";

import CompanyDetails from "./CompanyDetails";

const JobHistory = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-5" style={{ marginTop: "40px" }}>
            <Companys />
          </div>
          <div className="col-2">
            <Divider />
          </div>
          <div className="col-5" style={{ marginTop: "20px", padding: "15px" }}>
            <CompanyDetails />
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobHistory;
