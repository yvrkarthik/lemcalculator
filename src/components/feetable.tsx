import * as React from "react";
import { getBankDetails } from "src/services/banklist";
// interface IFeeProps {
//   loanOver95: number;
//   loanBetween90To95: number;
//   loanBetween85to90: number;
//   loanBetween80to85: number;
//   bank: string;
// }

const FeeTable: React.SFC<{}> = (props: {}) => {
  const t1 = getBankDetails();
  // console.log(t1);
  t1.bankData.map(elem => {
    const t2: number[] = [];
    t2.push(elem.fee.loanOver95);
    compareNumber(t2);
  });
  return (
    <div className="container">
      <div className="row">
        <div className="offset-md-2 col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 table-responsive">
          <table className="table table-bordered table-sm" id="feetable">
            <thead className="thead-dark">
              <tr>
                <th scope="col">%</th>
                {t1.bankData.map((elem, index) => (
                  <th scope="col" key={`bankName_${index}`}>
                    {elem.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr key={`percentage_95`} id="percentage_95">
                <th scope="row">>&nbsp;95.01%</th>
                {t1.bankData.map((elem, index) => (
                  <td key={index}>{elem.fee.loanOver95}%</td>
                ))}
              </tr>
              <tr key={`percentage_90`}>
                <th scope="row">90.01%&nbsp;-&nbsp;95%</th>
                {t1.bankData.map((elem, index) => (
                  <td key={index}>{elem.fee.loanBetween90To95}%</td>
                ))}
              </tr>
              <tr key={`percentage_85`}>
                <th scope="row">85.01%&nbsp;-&nbsp;90%</th>
                {t1.bankData.map((elem, index) => (
                  <td key={index}>{elem.fee.loanBetween85to90}%</td>
                ))}
              </tr>
              <tr key={`percentage_80`}>
                <th scope="row">80.01%&nbsp;-&nbsp;85%</th>
                {t1.bankData.map((elem, index) => (
                  <td key={index}>{elem.fee.loanBetween80to85}%</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
function compareNumber(numberArray: number[]): number {
  console.log(numberArray);
  console.log(Math.max(...numberArray));
  return Math.max(...numberArray);
}
export default FeeTable;
