import * as React from "react";
import InputTextbox from "./common/inputtextbox";

export interface ILvrCalculatorState {
  percentageOfDeposit: string;
  propertyValue: string;
  myDeposit: string;
}

class ILvrCalculator extends React.Component<{}, ILvrCalculatorState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      percentageOfDeposit: "",
      propertyValue: "",
      myDeposit: ""
    };
    this.handleMyDeposit = this.handleMyDeposit.bind(this);
    this.handlePropertyPrice = this.handlePropertyPrice.bind(this);
  }

  render() {
    return (
      <React.Fragment>
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
          inputGroupText={"$"}
          isPercentageTextbox={true}
          inputValue={this.state.percentageOfDeposit}
        />
      </React.Fragment>
    );
  }

  // Get the value of the property
  // Format the number as currency
  private handlePropertyPrice(e: any) {
    const propertyVal = e.target.value;
    if (propertyVal === 0 || propertyVal === "") {
      this.setState(() => ({
        myDeposit: "",
        percentageOfDeposit: ""
      }));
    }
    this.setState(() => ({
      propertyValue: propertyVal
    }));
  }

  private handleMyDeposit(e: any) {
    const myDepositValue = e.target.value;
    /*
    Return :
    if the propertyValue is empty
    if the propertyValue characters are less than 4
    */
    if (
      this.state.propertyValue === "" ||
      this.state.propertyValue.length <= 4
    ) {
      this.setState(() => ({
        myDeposit: "",
        percentageOfDeposit: ""
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
      this.setState(() => ({
        myDeposit: myDepositValue,
        percentageOfDeposit: percentageOfDeposit
      }));
    }
  }

  // calculate the percentage and display the result with 2 decimals only
  private calculatePercentage(deposit: number, propertyPrice: number): string {
    const percentage = ((deposit / propertyPrice) * 100).toPrecision(2);
    return percentage;
  }
}

export default ILvrCalculator;
