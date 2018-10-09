import * as React from "react";

const SaySomething: React.SFC<{}> = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="offset-md-2 col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
          <div className="card bg-dark text-white">
            <div className="card-body">
              <h5 className="card-title">Awesome...!!</h5>
              <p className="card-text">
                Your all good, you don't need this calculator anymore :)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaySomething;
