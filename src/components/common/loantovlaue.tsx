import * as React from "react";
export interface ILoanToValueRatioProps {
  loanOver95: number;
  loanBetween90To95: number;
  loanBetween85to90: number;
  loanBetween80to85: number;
  bank: string;
  bankWebsite: string;
  bankLvrLink: string;
}

const LoanToValueRatio: React.SFC<ILoanToValueRatioProps> = (
  props: ILoanToValueRatioProps
) => {
  return (
    <React.Fragment>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center active">
          {props.bank}
          {/* <span className="badge badge-primary badge-pill">
            {props.loanOver95}%
          </span> */}
        </li>
        {/* <li className="list-group-item d-flex justify-content-between align-items-center">
          Loan over 95.01%
          <span className="badge badge-primary badge-pill">
            {props.loanOver95}%
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Loan between 90.01% – 95%
          <span className="badge badge-primary badge-pill">
            {props.loanBetween90To95}%
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Loan between 85.01% – 90%
          <span className="badge badge-primary badge-pill">
            {props.loanBetween85to90}%
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Loan between 80.01% – 85%
          <span className="badge badge-primary badge-pill">
            {props.loanBetween80to85}%
          </span>
        </li> */}
      </ul>
    </React.Fragment>
  );
};

export default LoanToValueRatio;
