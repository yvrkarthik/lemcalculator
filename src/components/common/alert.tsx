import * as React from "react";

export interface IAlertProps {
  alertText: string;
  alertType?: string;
}

const Alert: React.SFC<IAlertProps> = (props: IAlertProps) => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="alert alert-danger" role="alert">
              {props.alertText}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Alert;
