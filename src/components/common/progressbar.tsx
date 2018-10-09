import * as React from "react";

export interface IPercentageProps {
  fillerPercentage: string;
}

const Percentage: React.SFC<IPercentageProps> = (props: IPercentageProps) => {
  // console.log(props.fillerPercentage);
  return (
    <div className="container">
      <div className="form-group row">
        <label className="col-sm-4 col-5 col-md-4 col-lg-4 col-xl-4 col-form-label text-right">
          My Deposit vs Required Deposit :
        </label>
        <div className="col-sm-6 col-6 col-md-6 col-lg-5 col-xl-5 col-form-label pt-2">
          {props.fillerPercentage === "100" ? (
            <div className="progress">
              <div
                className="progress-bar bg-success col-form-label"
                role="progressbar"
                style={{ width: `100%` }}
              />
            </div>
          ) : (
            <div className="progress">
              <div
                className="progress-bar bg-info col-form-label"
                role="progressbar"
                style={{ width: `${props.fillerPercentage}%` }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Percentage;
