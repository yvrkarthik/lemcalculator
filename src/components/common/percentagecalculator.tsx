import * as React from "react";
export interface IPercentageCalculatorProps {
  isReadOnly: boolean;
  textboxLabel: string;
  placeHolder: string;
  inputGroupText: string;
  inputValue: string;
}

const PercentageCalculator: React.SFC<IPercentageCalculatorProps> = (
  props: IPercentageCalculatorProps
) => {
  return (
    <div className="container">
      <div className="form-group row">
        <label className="col-sm-4 col-5 col-md-5 col-lg-4 col-xl-4 col-form-label text-right">
          {props.textboxLabel}
        </label>
        <div className="input-group input-group-sm col-sm-6 col-6 col-md-6 col-lg-5 col-xl-5">
          <input
            type="text"
            className="form-control"
            id={`input_${props.textboxLabel.trim()}`}
            placeholder={props.placeHolder}
            readOnly={props.isReadOnly}
            aria-label={props.textboxLabel}
            aria-describedby="basic-addon1"
            value={props.inputValue}
          />
          <div className="input-group-append">
            <span className="input-group-text text-white bg-dark">
              {props.inputGroupText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PercentageCalculator;
