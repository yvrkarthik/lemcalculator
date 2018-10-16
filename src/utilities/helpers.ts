import { AppConstants } from "./appconstants";

/**
 * This function is used to test whether the given string is valid.
 * @param valueToBeTested string
 * @param regexPatternToTestAgainst Regex
 * @returns boolean
 * @example
 * isItValidInput("abc",RegExp("[a-z]*"))
 * // returns true
 */
function isItValidInput(
  valueToBeTested: string,
  regexPatternToTestAgainst: RegExp
): boolean {
  return regexPatternToTestAgainst.test(valueToBeTested) ? true : false;
}

/**
 * This function calculates the required deposit
 * @param propertyValue number
 * @returns string with 2 decimal values
 * @example
 * calculateRequiredDepositValue(450000)
 * // returns a string value
 *    90000.00
 */
function calculateRequiredDepositValue(propertyValue: number): string {
  if (
    // isNaN(propertyValue) ||
    isItValidInput(propertyValue.toString(), RegExp("[a-z]")) ||
    propertyValue < 0
  ) {
    return "";
  }
  return (AppConstants.requiredDepositPercentage * propertyValue).toFixed(2);
}

function calculateProgressPercentage(
  depositValue: number,
  requiredDeposit: number
): string {
  if (depositValue === 0 || requiredDeposit === 0) {
    return "";
  } else {
    return ((depositValue / requiredDeposit) * 100).toString();
  }
}

function calculateMyDepositWorth(
  deposit: number,
  propertyPrice: number
): string {
  if (deposit > propertyPrice) {
    return "";
  } else if (isNaN(deposit)) {
    return "Not a valid number";
  }
  const percentage = ((deposit / propertyPrice) * 100).toFixed(1);
  return percentage;
}

function calculateLEMFees(number1: number, number2: number): number {
  return (number1 / 100) * number2;
}

export {
  isItValidInput,
  calculateRequiredDepositValue,
  calculateProgressPercentage,
  calculateMyDepositWorth,
  calculateLEMFees
};
