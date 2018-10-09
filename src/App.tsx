import * as React from "react";
import "./App.css";
import Navbar from "./components/common/navbar";
import ILvrCalculator from "./components/lvrcalculator";
import Footer from "./components/common/footer";

class App extends React.Component {
  constructor(props: {}) {
    super(props);
  }
  public render() {
    return (
      <div className="App">
        <Navbar title="Low Equity Margin (LEM Calculator)" />
        <main role="main" className="container App-add-padding">
          <ILvrCalculator />
        </main>
        <Footer />
        <div className="container-fluid App-add-padding" />
      </div>
    );
  }
}

export default App;
