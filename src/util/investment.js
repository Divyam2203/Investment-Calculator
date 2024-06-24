
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = parseFloat(initialInvestment);
  let totalInterest = 0;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (parseFloat(expectedReturn) / 100);
    investmentValue += interestEarnedInYear + parseFloat(annualInvestment);
    totalInterest = totalInterest+interestEarnedInYear;
    annualData.push({
      year: i + 1, // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      valueEndOfYear: investmentValue, // investment value at end of year
      annualInvestment: annualInvestment, // investment added in this year
      totalInterest: totalInterest,
    });
  }

  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
export const formatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
