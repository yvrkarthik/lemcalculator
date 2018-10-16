import {
  isItValidInput,
  calculateRequiredDepositValue
} from "../utilities/helpers";

test("checks if the regex validation has passed", () => {
  expect(isItValidInput("12345", RegExp("[0-9]*"))).toBeTruthy;
});

test("checks if the regex validation has failed", () => {
  expect(isItValidInput("abc", RegExp("[0-9]*"))).toBeFalsy;
});

test("calculateRequiredDeposit_ProvideValidNumber_ShouldReturn20%OfTheProvidedNumber", () => {
  expect(calculateRequiredDepositValue(450000)).toEqual("90000.00");
});

test("calculateRequiredDeposit_ProvideAMixtureOfDigits&Characters_ShouldReturnEmptyString", () => {
  expect(calculateRequiredDepositValue(parseInt("asd1as0"))).toEqual("");
});

test("calculateRequiredDeposit_ProvideAString_ShouldReturnEmptyString", () => {
  expect(calculateRequiredDepositValue(parseInt("asdas"))).toEqual("");
});

test("calculateRequiredDeposit_ProvideANegativeNumber_ShouldReturnEmptyString", () => {
  expect(calculateRequiredDepositValue(-450000)).toEqual("");
});
