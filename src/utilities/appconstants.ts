enum AppConstants {
  requiredDepositPercentage = 0.2
}

enum ErrorMessages {
  depositCannotBeMoreThanPropertyPrice = "Deposit cannot be more than property price.",
  loanAmountMustBeAtleast4Digits = "Loan amount must be minimum of 4 digits and must be minimum of $5,000",
  propertyPriceMustNotHaveDecimals = "The Property price must be a number and must not have decimals."
}

export { AppConstants, ErrorMessages };
