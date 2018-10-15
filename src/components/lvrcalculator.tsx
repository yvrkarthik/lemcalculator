import * as React from "react";
import InputTextbox from "./common/inputtextbox";
import Alert from "./common/alert";
import RowHeader from "./common/rowheader";
import FeeTable from "./feetable";
import { getBankDetails } from "src/services/banklist";
import FeeTableindollars from "./feetableindollars";
import SaySomething from "./common/saysomething";
import Percentage from "./common/progressbar";
import { isItValidInput } from "src/utilities/helpers";

export interface ILvrCalculatorState {
  percentageOfDeposit: string;
  propertyValue: string;
  myDeposit: string;
  errorText: string;
  requiredDeposit: string;
  fillerPercentage: string;
}

class ILvrCalculator extends React.Component<{}, ILvrCalculatorState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      percentageOfDeposit: "",
      propertyValue: "",
      myDeposit: "",
      errorText: "",
      requiredDeposit: "",
      fillerPercentage: ""
    };
    this.handleMyDeposit = this.handleMyDeposit.bind(this);
    this.handlePropertyPrice = this.handlePropertyPrice.bind(this);
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
          pattern={"[0-9*]"}
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
          textboxIdentifier={"requiredDeposit"}
          isReadOnly={true}
          textboxLabel="Required Deposit&nbsp;(20%):"
          placeHolder="0"
          inputGroupText={"$"}
          isPercentageTextbox={false}
          // handleOnChange={this.handleRequiredDeposit}
          inputValue={this.state.requiredDeposit}
        />
        <Percentage fillerPercentage={this.state.fillerPercentage} />

        <InputTextbox
          textboxIdentifier={"myDepositPercentageTextBox"}
          isReadOnly={true}
          textboxLabel="% of Deposit&nbsp;:"
          placeHolder="0"
          inputGroupText={"%"}
          isPercentageTextbox={true}
          inputValue={this.state.percentageOfDeposit}
        />
        {/* Hide the calculator if the % of deposit equal to or more than 20% */}
        {parseInt(this.state.percentageOfDeposit) >= 20 ? (
          <SaySomething />
        ) : (
          <React.Fragment>
            <RowHeader headerText="% of LEM Fees per Bank :" />
            <FeeTable bankdetails={getBankDetails()} />
            {this.state.propertyValue !== "" &&
            this.state.myDeposit !== "" &&
            parseInt(this.state.percentageOfDeposit) >= 5 &&
            parseInt(this.state.percentageOfDeposit) < 20 ? (
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
        )}
      </React.Fragment>
    );
  }

  // Get the value of the property
  // Format the number as currency
  // TODO: Prevent string being entered into the text box -- done
  // move the required property % to a new function
  private handlePropertyPrice(e: any) {
    const propertyVal = e.target.value;

    if (!isItValidInput(propertyVal, RegExp("\\d"))) {
      this.setState(() => ({
        propertyValue: ""
      }));
      return;
    }
    const doesPropertyValueHasDecimals = RegExp("\\d+\\.\\d+");

    if (doesPropertyValueHasDecimals.test(propertyVal)) {
      this.setState(() => ({
        myDeposit: "",
        percentageOfDeposit: "",
        errorText:
          "The Property price must be a number and must not be more than 10 digits",
        fillerPercentage: ""
      }));
      return;
    } else if (propertyVal !== 0) {
      const requiredDepositValue = 0.2 * parseInt(propertyVal);
      // clear-up all the fields when the property value is cleared
      this.setState(() => ({
        propertyValue: propertyVal,
        errorText: "",
        requiredDeposit: requiredDepositValue.toString(),
        myDeposit: "",
        percentageOfDeposit: ""
      }));
    }
  }

  private handleMyDeposit(e: any) {
    const myDepositValue = e.target.value;
    /*
    Return error :
    if the propertyValue is empty
    if the propertyValue characters are less than 4
    */
    if (
      this.state.propertyValue === "" ||
      this.state.propertyValue.length < 4
    ) {
      this.setState(() => ({
        myDeposit: "",
        percentageOfDeposit: "",
        errorText: "Loan amount must be minimum of 4 digits",
        fillerPercentage: ""
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
      const depositProgress = (
        (parseInt(myDepositValue) / parseInt(this.state.requiredDeposit)) *
        100
      ).toString();
      if (percentageOfDeposit === "") {
        this.setState(() => ({
          errorText: "Deposit cannot be more than property price."
        }));
      } else {
        this.setState(() => ({
          myDeposit: myDepositValue,
          percentageOfDeposit: percentageOfDeposit.toString(),
          errorText: "",
          fillerPercentage: depositProgress
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
