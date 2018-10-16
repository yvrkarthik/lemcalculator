import {
  isItValidInput,
  calculateRequiredDeposit,
  calculateProgressPercentage
} from "../utilities/helpers";

test("checks if the regex validation has passed", () => {
  expect(isItValidInput("12345", RegExp("[0-9]*"))).toBeTruthy;
});

test("checks if the regex validation has failed", () => {
  expect(isItValidInput("abc", RegExp("[0-9]*"))).toBeFalsy;
});
//#region Calculate Required Deposit
describe("calculateRequiredDeposit", () => {
  test("calculateRequiredDeposit_ProvideValidNumber_ShouldReturn20%OfTheProvidedNumber", () => {
    expect(calculateRequiredDeposit(450000)).toEqual("90000.00");
  });

  test("calculateRequiredDeposit_ProvideAMixtureOfDigits&Characters_ShouldReturnEmptyString", () => {
    expect(calculateRequiredDeposit(parseInt("asd1as0"))).toEqual("");
  });

  test("calculateRequiredDeposit_ProvideAString_ShouldReturnEmptyString", () => {
    expect(calculateRequiredDeposit(parseInt("asdas"))).toEqual("");
  });

  test("calculateRequiredDeposit_ProvideANegativeNumber_ShouldReturnEmptyString", () => {
    expect(calculateRequiredDeposit(-450000)).toEqual("");
  });
});
//#endregion

describe("calculateProgressPercentage", () => {
  test("calculateProgressPercentage_ProvideDeposit&PropertyPrice_shouldReturnProgressPercentage", () => {
    expect(calculateProgressPercentage(90000, 450000)).toEqual("20");
  });

  test("calculateProgressPercentage_Provide0Deposit&0PropertyPrice_shouldReturnProgressPercentage", () => {
    expect(calculateProgressPercentage(0, 0)).toEqual("");
  });

  test("calculateProgressPercentage_ProvideSameDeposit&PropertyPrice_shouldReturnProgressPercentage", () => {
    expect(calculateProgressPercentage(10, 10)).toEqual("100");
  });

  test("calculateProgressPercentage_ProvideANaNDeposit_shouldReturnEmptyString", () => {
    expect(calculateProgressPercentage(parseInt("abc"), 10)).toEqual("");
  });

  test("calculateProgressPercentage_ProvideANaNProperty_shouldReturnEmptyString", () => {
    expect(calculateProgressPercentage(10, parseInt("abc"))).toEqual("");
  });
});
