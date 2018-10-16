import {
  isItValidInput,
  calculateRequiredDeposit,
  calculateProgressPercentage,
  calculateMyDepositWorth,
  calculateLEMFees
} from "../utilities/helpers";

describe("IsValidInput", () => {
  test("checks if the regex validation has passed", () => {
    expect(isItValidInput("12345", RegExp("[0-9]*"))).toBeTruthy;
  });

  test("checks if the regex validation has failed", () => {
    expect(isItValidInput("abc", RegExp("[0-9]*"))).toBeFalsy;
  });
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

describe("calculateMyDepositWorth", () => {
  test("calculateMyDepositWorth_ProvideDeposit&Property_shouldReturnMyDepositWorth", () => {
    expect(calculateMyDepositWorth(45000, 450000)).toEqual("10.0");
  });

  test("calculateMyDepositWorth_ProvideDepositMorethanProperty_shouldReturnEmptyString", () => {
    expect(calculateMyDepositWorth(500000, 450000)).toEqual("");
  });

  test("calculateMyDepositWorth_DepositIsNaN_shouldReturnEmptyString", () => {
    expect(calculateMyDepositWorth(parseInt("asdv"), 450000)).toEqual("");
  });
  test("calculateMyDepositWorth_PropertyPriceIsNaN_shouldReturnEmptyString", () => {
    expect(calculateMyDepositWorth(45000, parseInt("asdv"))).toEqual("");
  });
});

describe("calculateLEMFees", () => {
  test("calculateLEMFees_ProvideNum1&Num2_shouldReturn", () => {
    const propertyValue: number = 500000;
    const deposit: number = 45000;
    const amountToCalculateLEM = propertyValue - deposit;
    const lemFees: number = 0.25;
    expect(calculateLEMFees(amountToCalculateLEM, lemFees)).toEqual(1137.5);
  });
});
