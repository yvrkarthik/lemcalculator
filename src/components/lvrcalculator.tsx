import * as React from "react";
import InputTextbox from "./common/inputtextbox";
import Alert from "./common/alert";
import RowHeader from "./common/rowheader";
import FeeTable from "./feetable";
import { getBankDetails } from "src/services/banklist";
import FeeTableindollars from "./feetableindollars";

export interface ILvrCalculatorState {
  percentageOfDeposit: string;
  propertyValue: string;
  myDeposit: string;
  errorText: string;
}

class ILvrCalculator extends React.Component<{}, ILvrCalculatorState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      percentageOfDeposit: "",
      propertyValue: "",
      myDeposit: "",
      errorText: ""
    };
    this.handleMyDeposit = this.handleMyDeposit.bind(this);
    this.handlePropertyPrice = this.handlePropertyPrice.bind(this);
    // this.displayFeeTableInDollars = this.displayFeeTableInDollars.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        {this.state.errorText !== "" ? (
          <Alert alertText={this.state.errorText} />
        ) : (
          ""
        )}

        <InputTextbox
          textboxIdentifier={"propertyPriceTextBox"}
          isReadOnly={false}
          textboxLabel="Property Price&nbsp;:"
          placeHolder="200,000"
          inputGroupText={"$"}
          isPercentageTextbox={false}
          handleOnChange={this.handlePropertyPrice}
          inputValue={this.state.propertyValue.toString()}
        />
        <InputTextbox
          textboxIdentifier={"myDepositTextBox"}
          isReadOnly={false}
          textboxLabel="My Deposit&nbsp;:"
          placeHolder="50,000"
          inputGroupText={"$"}
          isPercentageTextbox={false}
          handleOnChange={this.handleMyDeposit}
          inputValue={this.state.myDeposit.toString()}
        />
        <InputTextbox
          textboxIdentifier={"myDepositPercentageTextBox"}
          isReadOnly={true}
          textboxLabel="% of Deposit&nbsp;:"
          placeHolder="0"
          inputGroupText={"%"}
          isPercentageTextbox={true}
          inputValue={this.state.percentageOfDeposit}
        />
        <RowHeader headerText="% of LEM Fees per Bank :" />
        <FeeTable bankdetails={getBankDetails()} />

        {this.state.propertyValue !== "" &&
        this.state.myDeposit !== "" &&
        parseInt(this.state.percentageOfDeposit) >= 5 ? (
          <React.Fragment>
            <RowHeader headerText="LEM Fees per Bank in $$ :" />
            <FeeTableindollars
              bankdetails={getBankDetails()}
              amountToCalculateLem={
                parseInt(this.state.propertyValue) -
                parseInt(this.state.myDeposit)
              }
              depositPercentage={parseInt(this.state.percentageOfDeposit)}
            />
          </React.Fragment>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }

  // Get the value of the property
  // Format the number as currency
  private handlePropertyPrice(e: any) {
    const propertyVal = e.target.value;
    const doesPropertyValueHasDecimals = RegExp("\\d+\\.\\d+");
    doesPropertyValueHasDecimals.test(this.state.propertyValue);

    if (doesPropertyValueHasDecimals.test(propertyVal)) {
      this.setState(() => ({
        myDeposit: "",
        percentageOfDeposit: "",
        errorText: "Property price cannot have decimals."
      }));
      return;
    }

    this.setState(() => ({
      propertyValue: propertyVal,
      errorText: ""
    }));
  }

  private handleMyDeposit(e: any) {
    const myDepositValue = e.target.value;
    // test if the property value has decimals
    const doesPropertyValueHasDecimals = RegExp("\\d+\\.\\d+");
    doesPropertyValueHasDecimals.test(this.state.propertyValue);
    // console.log(testRegex.test(this.state.propertyValue));
    /*
    Return error :
    if the propertyValue is empty
    if the propertyValue characters are less than 4
    if the propertyValue has decimals in it
    */
    if (
      this.state.propertyValue === "" ||
      this.state.propertyValue.length <= 4 ||
      doesPropertyValueHasDecimals.test(this.state.propertyValue)
    ) {
      this.setState(() => ({
        myDeposit: "",
        percentageOfDeposit: "",
        errorText:
          "Property price cannot have decimals and it should be at-least 4 digits"
      }));

      return;
    } else {
      /*
      Convert the string to Int for calculating the %
      */
      const percentageOfDeposit = this.calculatePercentage(
        myDepositValue,
        parseInt(this.state.propertyValue)
      );
      if (percentageOfDeposit === "") {
        this.setState(() => ({
          errorText: "Deposit cannot be morethan property price."
        }));
      } else {
        this.setState(() => ({
          myDeposit: myDepositValue,
          percentageOfDeposit: percentageOfDeposit.toString(),
          errorText: ""
        }));
      }
    }
  }

  // calculate the percentage and display the result with 2 decimals only
  private calculatePercentage(deposit: number, propertyPrice: number): string {
    if (deposit > propertyPrice) {
      return "";
    }
    const percentage = ((deposit / propertyPrice) * 100).toFixed(1);
    return percentage;
  }
}

export default ILvrCalculator;
