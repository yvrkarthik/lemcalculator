import * as React from "react";
interface IInputTextboxProps {
  isReadOnly: boolean;
  textboxLabel: string;
  placeHolder: string;
  inputGroupText: string;
  textboxIdentifier: string;
  isPercentageTextbox: boolean;
  inputValue: string;
  handleOnChange?: any;
}
// TODO:
// 1. Rename the bootstrap naming from the elements

const InputTextbox: React.SFC<IInputTextboxProps> = (
  props: IInputTextboxProps
) => {
  return (
    <div className="container">
      <div className="form-group row">
        <label className="col-sm-4 col-5 col-md-4 col-lg-4 col-xl-4 col-form-label text-right">
          {props.textboxLabel}
        </label>
        {props.isPercentageTextbox ? (
          <div className="input-group col-sm-8 col-7 col-md-6 col-lg-5 col-xl-5">
            <input
              type="text"
              className="form-control"
              id={`input_${props.textboxLabel.trim()}`}
              placeholder={props.placeHolder}
              readOnly={props.isReadOnly}
              aria-label={props.textboxLabel}
              aria-describedby="basic-addon1"
              value={props.inputValue.toString()}
            />
            <div className="input-group-append">
              <span className="input-group-text text-white bg-dark">
                {props.inputGroupText}
              </span>
            </div>
          </div>
        ) : (
          <div className="col-sm-8 col-7 col-md-6 col-lg-5 col-xl-5">
            <div className="input-group ">
              <div className="input-group-prepend">
                <span
                  className="input-group-text text-white bg-dark"
                  id="basic-addon1"
                >
                  {props.inputGroupText}
                </span>
              </div>
              <input
                type="number"
                className="form-control"
                id={`input_${props.textboxLabel.trim()}`}
                placeholder={props.placeHolder}
                readOnly={props.isReadOnly}
                aria-label={props.textboxLabel}
                aria-describedby="basic-addon1"
                onChange={props.handleOnChange}
                value={props.inputValue}
                min="0"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputTextbox;
