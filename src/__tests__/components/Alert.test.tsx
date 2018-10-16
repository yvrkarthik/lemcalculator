import * as React from "react";
import * as Enzyme from "enzyme";
import Alert from "../../components/common/alert";
import * as Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("Renders Alert box", () => {
  test("renders a alert span", () => {
    const alertComponent = Enzyme.shallow(<Alert alertText={"hello"} />);
    expect(
      alertComponent.contains(
        <div className="alert alert-danger" role="alert">
          hello
        </div>
      )
    ).toBeTruthy();
  });

  test("renders a alert box", () => {
    const alertComponent = Enzyme.shallow(<Alert alertText={"hello"} />);
    expect(alertComponent.find(".alert")).toBeDefined();
  });

  test("renders a alert box", () => {
    const alertComponent = Enzyme.shallow(<Alert alertText={"hello"} />);
    // Expect the wrapper object to be defined
    expect(alertComponent.find(".alert")).toBeDefined();
  });
});
