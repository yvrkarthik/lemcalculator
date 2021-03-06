import * as React from "react";

export interface IPercentageProps {
  fillerPercentage: string;
}

const Percentage: React.SFC<IPercentageProps> = (props: IPercentageProps) => {
  return (
    <div className="container">
      <div className="form-group row">
        <label className="col-sm-4 col-5 col-md-4 col-lg-4 col-xl-4 col-form-label text-right">
          My deposit vs Required Deposit :
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
                className="progress-bar bg-info col-form-label text-center"
                role="progressbar"
                // style={{ width: `${props.fillerPercentage}%` }}
                style={{
                  width: `${
                    isNaN(parseInt(props.fillerPercentage))
                      ? "0"
                      : props.fillerPercentage
                  }%`
                }}
              >
                {isValidInput(parseInt(props.fillerPercentage))}
                {/* {isNaN(parseInt(props.fillerPercentage))
                  ? ""
                  : parseInt(props.fillerPercentage).toFixed() + "%"} */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

function isValidInput(progressBar: number): string {
  if (isNaN(progressBar)) {
    return "";
  } else if (progressBar > 100) {
    return "100%";
  } else {
    return progressBar.toFixed() + "%";
  }
}
export default Percentage;
