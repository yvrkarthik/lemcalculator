import * as React from "react";
import InputTextbox from "./common/inputtextbox";
import PercentageCalculator from "./common/percentagecalculator";

export interface ILvrCalculatorState {
  percentageOfDeposit: number;
  propertyValue: number;
  myDeposit: number;
}

class ILvrCalculator extends React.Component<{}, ILvrCalculatorState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      percentageOfDeposit: 0,
      propertyValue: 0,
      myDeposit: 0
    };
    this.handleMyDeposit = this.handleMyDeposit.bind(this);
    this.handlePropertyPrice = this.handlePropertyPrice.bind(this);
  }
  componentDidMount() {
    this.setState(() => ({
      percentageOfDeposit: 0,
      propertyValue: 0,
      myDeposit: 0
    }));
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
          inputValue={this.state.propertyValue}
        />
        <InputTextbox
          textboxIdentifier={"myDepositTextBox"}
          isReadOnly={false}
          textboxLabel="My Deposit&nbsp;:"
          placeHolder="50,000"
          inputGroupText={"$"}
          isPercentageTextbox={false}
          handleOnChange={this.handleMyDeposit}
          inputValue={this.state.myDeposit}
        />
        <PercentageCalculator
          isReadOnly={true}
          textboxLabel="% of Deposit&nbsp;:"
          placeHolder="20"
          inputGroupText={"%"}
          inputValue={this.state.percentageOfDeposit.toString()}
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
        myDeposit: 0,
        percentageOfDeposit: 0
      }));
    }
    this.setState(() => ({
      propertyValue: propertyVal
    }));
  }

  // 1. validate the input
  private handleMyDeposit(e: any) {
    const myDepositValue = e.target.value;
    // check if the property value is 0 or negative number
    if (this.state.propertyValue <= 0) {
      this.setState(() => ({
        myDeposit: 0,
        percentageOfDeposit: 0
      }));
      return;
    } else {
      const percentageOfDeposit = this.calculatePercentage(
        myDepositValue,
        this.state.propertyValue
      );
      this.setState(() => ({
        myDeposit: myDepositValue,
        percentageOfDeposit: percentageOfDeposit
      }));
    }
  }

  // calculate the percentage
  private calculatePercentage(deposit: number, propertyPrice: number): number {
    return Math.round((deposit / propertyPrice) * 100);
  }
}

export default ILvrCalculator;
