import * as React from "react";

interface IBanksListProps {
  banksList: string[];
  onSelectionChange: any;
}

/**
 * This component returns the list of Banks from the API
 * @param props BankList string[]
 */
const BanksList: React.SFC<IBanksListProps> = (props: IBanksListProps) => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="input-group mb-3 container">
              <div className="input-group-prepend">
                <label className="input-group-text">Select the Bank</label>
              </div>
              <select
                className="custom-select"
                id="inputGroupSelect01"
                onChange={props.onSelectionChange}
              >
                <option defaultValue="">Choose...</option>
                {props.banksList.map((elem, index) => (
                  <option key={"elem_" + index} value={elem}>
                    {elem}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BanksList;
