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

export { isItValidInput };
