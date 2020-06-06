import * as React from "react";
import {IBankData} from "../services/banklist";
import {calculateLEMFees} from "../utilities/helpers";

interface IFeeProps {
  // loanOver95: number;
  // loanBetween90To95: number;
  // loanBetween85to90: number;
  // loanBetween80to85: number;
  // bank: string;
  bankdetails: IBankData;
  amountToCalculateLem: number;
  depositPercentage: number;
}

function FeeTableInDollars(props: IFeeProps) {
  return (
      <div className="container pb-3">
        <div className="row">
          <div className="offset-md-2 col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 table-responsive">
            <table className="table table-bordered table-sm" id="feetable">
              <thead className="thead-dark">
              <tr>
                <th scope="col">%</th>
                {props.bankdetails.bankData.map((elem, index) => (
                    <th scope="col" key={`bankName_${index}`}>
                      {elem.name}
                    </th>
                ))}
              </tr>
              </thead>
              <tbody>
              <tr key={`percentage_95`} id="percentage_95">
                <th scope="row">>&nbsp;95%</th>
                {props.depositPercentage <= 5 ? (
                    props.bankdetails.bankData.map((elem, index) => (
                        <td key={index}>
                          {elem.fee.loanOver95 === 0
                              ? "NA"
                              : calculateLEMFees(
                                  props.amountToCalculateLem,
                                  elem.fee.loanOver95
                              )
                                  .toLocaleString("en-NZ", {
                                    style: "currency",
                                    currency: "NZD"
                                  })
                                  .toString()}
                        </td>
                    ))
                ) : (
                    <React.Fragment/>
                )}
              </tr>

              <tr key={`percentage_90`}>
                <th scope="row">90.01%&nbsp;-&nbsp;95%</th>
                {props.depositPercentage > 5.1 &&
                props.depositPercentage < 10 ? (
                    props.bankdetails.bankData.map((elem, index) => (
                        <td key={index}>
                          {calculateLEMFees(
                              props.amountToCalculateLem,
                              elem.fee.loanBetween90To95
                          )
                              .toLocaleString("en-NZ", {
                                style: "currency",
                                currency: "NZD"
                              })
                              .toString()}
                        </td>
                    ))
                ) : (
                    <React.Fragment/>
                )}
              </tr>

              <tr key={`percentage_85`}>
                <th scope="row">85.01%&nbsp;-&nbsp;90%</th>
                {props.depositPercentage >= 10 &&
                props.depositPercentage < 15 ? (
                    props.bankdetails.bankData.map((elem, index) => (
                        <td key={index}>
                          {calculateLEMFees(
                              props.amountToCalculateLem,
                              elem.fee.loanBetween85to90
                          )
                              .toLocaleString("en-NZ", {
                                style: "currency",
                                currency: "NZD"
                              })
                              .toString()}
                        </td>
                    ))
                ) : (
                    <React.Fragment/>
                )}
              </tr>
              <tr key={`percentage_80`}>
                <th scope="row">80.01%&nbsp;-&nbsp;85%</th>
                {props.depositPercentage >= 15 &&
                props.depositPercentage < 20 ? (
                    props.bankdetails.bankData.map((elem, index) => (
                        <td key={index}>
                          {calculateLEMFees(
                              props.amountToCalculateLem,
                              elem.fee.loanBetween80to85
                          )
                              .toLocaleString("en-NZ", {
                                style: "currency",
                                currency: "NZD"
                              })
                              .toString()}
                        </td>
                    ))
                ) : (
                    <React.Fragment/>
                )}
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
}

export default FeeTableInDollars;
