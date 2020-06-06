import {AppConstants} from "./appconstants";

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
    return regexPatternToTestAgainst.test(valueToBeTested);
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
function calculateRequiredDeposit(propertyValue: number): string {
    return isItValidInput(propertyValue.toString(), RegExp("[a-z]")) ||
    propertyValue < 0 ? "" : (AppConstants.requiredDepositPercentage * propertyValue).toFixed(2);
}

/**
 * This function calculates the required deposit %
 * @param depositValue number
 * @param requiredDeposit number
 * @returns string
 * @example
 * calculateProgressPercentage(90000, 450000)
 * // returns a string value
 *    20
 */
function calculateProgressPercentage(
    depositValue: number,
    requiredDeposit: number
): string {
    return isNaN(depositValue) ||
    isNaN(requiredDeposit) ||
    depositValue === 0 ||
    requiredDeposit === 0 ? "" : ((depositValue / requiredDeposit) * 100).toString();
}

/**
 * This function calculates the required deposit %
 * @returns string
 * @example
 * calculateProgressPercentage(90000, 450000)
 * // returns a string value with 2 decimals
 *    20.00
 * @param deposit
 * @param propertyPrice
 */
function calculateMyDepositWorth(
    deposit: number,
    propertyPrice: number
): string {
    if (deposit > propertyPrice) {
        return "";
    } else if (isNaN(deposit) || isNaN(propertyPrice)) {
        return "";
    }
    return ((deposit / propertyPrice) * 100).toFixed(1);
}

function calculateLEMFees(number1: number, number2: number): number {
    return (number1 / 100) * number2;
}

export {
    isItValidInput,
    calculateRequiredDeposit,
    calculateProgressPercentage,
    calculateMyDepositWorth,
    calculateLEMFees
};
