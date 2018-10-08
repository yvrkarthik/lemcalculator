import * as React from "react";
import BanksList from "./banklist";
import { getBanks, getBanksData, IBankDetails } from "../../services/banklist";

interface ILvrCalculatorState {
  banksList: string[];
  bankData: IBankDetails[];
}

// This is the main container for the App,
// hence no props are being passed on.
// but does require state tp handle the components
class LvrCalculator extends React.Component<{}, ILvrCalculatorState> {
  constructor(props: {}) {
    super(props);
    this.handleBankChange = this.handleBankChange.bind(this);
  }
  // check if this has to be moved to constructor
  state = {
    banksList: getBanks(),
    bankData: []
  };
  render() {
    console.log("From Render Method: " + this.state.bankData);
    return (
      <React.Fragment>
        <BanksList
          banksList={this.state.banksList}
          onSelectionChange={this.handleBankChange}
        />
      </React.Fragment>
    );
  }

  private handleBankChange(e: any) {
    // get the selected value from the event args
    const selectedBank = e.target.value;
    // if the return if the drop down value is default value or Choose...
    if (selectedBank === "" || selectedBank === "Choose...") return;
    else {
      // log the value to the console
      console.log(selectedBank);
      // Get the bank website and lvr link on their webpage
      const bankData1 = getBanksData(selectedBank);
      console.log(bankData1);
      // set the state to that of the returned value.
      this.setState({
        bankData: getBanksData(selectedBank)
      });
    }
  }
}

export default LvrCalculator;
