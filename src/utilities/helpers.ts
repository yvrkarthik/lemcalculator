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

function calculateRequiredDepositValue(propertyValue: number): number {
  return 0.2 * propertyValue;
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
  }
  const percentage = ((deposit / propertyPrice) * 100).toFixed(1);
  return percentage;
}
export {
  isItValidInput,
  calculateRequiredDepositValue,
  calculateProgressPercentage,
  calculateMyDepositWorth
};
