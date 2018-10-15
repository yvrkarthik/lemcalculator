import * as React from "react";
import InputTextbox from "./common/inputtextbox";
import Alert from "./common/alert";
import RowHeader from "./common/rowheader";
import FeeTable from "./feetable";
import { getBankDetails } from "src/services/banklist";
import FeeTableindollars from "./feetableindollars";
import Awesome from "./common/Awesome";
import Percentage from "./common/progressbar";
import {
  isItValidInput,
  calculateRequiredDepositValue,
  calculateProgressPercentage,
  calculateMyDepositWorth
} from "src/utilities/helpers";
import { ErrorMessages } from "src/utilities/appconstants";

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
          <Awesome />
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
  private handlePropertyPrice(e: any) {
    const propertyVal = e.target.value;

    // if the property price has string characters then return
    if (isItValidInput(propertyVal.toString(), RegExp("[a-z]"))) {
      this.setState(() => ({
        propertyValue: "",
        requiredDeposit: ""
      }));
      return;
    } // check if the property value has decimals
    else if (isItValidInput(propertyVal, RegExp("\\d+\\."))) {
      this.setState(() => ({
        myDeposit: "",
        percentageOfDeposit: "",
        errorText: ErrorMessages.propertyPriceMustNotHaveDecimals,
        fillerPercentage: ""
      }));
      return;
    } // start the calculation when the length if more than 0
    else if (
      propertyVal.toString().length >= 0 &&
      propertyVal.toString() !== 0
    ) {
      const requiredDepositValue = calculateRequiredDepositValue(
        parseInt(propertyVal)
      );
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

    // input should only be having digits
<<<<<<< HEAD
    if (isItValidInput(myDepositValue.toString(), RegExp("[a-z]"))) {
      this.setState(() => ({
        requiredDeposit: ""
      }));
      return;
    } else if (
      /*
=======

    /*
>>>>>>> f10b3fefb804408a04bd5b3d0e55988f9f78c4ba
    Return error :
    if the propertyValue is empty
    if the propertyValue characters are less than 4
    */
      this.state.propertyValue === "" ||
      this.state.propertyValue.length < 4 ||
      parseInt(this.state.propertyValue) < 5000
    ) {
      this.setState(() => ({
        myDeposit: "",
        percentageOfDeposit: "",
        errorText: ErrorMessages.loanAmountMustBeAtleast4Digits,
        fillerPercentage: "0"
      }));
      return;
    } else {
      /*
      Convert the string to Int for calculating the %
      */
      const percentageOfDeposit = calculateMyDepositWorth(
        myDepositValue,
        parseInt(this.state.propertyValue)
      );
      const depositProgress = calculateProgressPercentage(
        parseInt(myDepositValue),
        parseInt(this.state.requiredDeposit)
      );

      if (percentageOfDeposit === "") {
        this.setState(() => ({
          errorText: ErrorMessages.depositCannotBeMoreThanPropertyPrice
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
}

export default ILvrCalculator;
