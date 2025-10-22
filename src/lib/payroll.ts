/**
 * Utility functions for payroll calculations in the Philippines.
 */

/**
 * Calculates the SSS (Social Security System) employee contribution based on Monthly Salary Credit (MSC) for 2025.
 * Employee share: 5%, Employer share: 10%, Total: 15%
 * @param msc - Monthly Salary Credit
 * @returns Employee share of SSS contribution (5% of MSC)
 */
export function getSSSDeduction(msc: number): number {
  return msc * 0.05;
}

/**
 * Calculates the PhilHealth employee contribution based on Monthly Salary Credit (MSC) for 2025.
 * PhilHealth contribution is 5% of MSC, employee pays half (2.5%).
 * @param msc - Monthly Salary Credit
 * @returns Employee share of PhilHealth contribution
 */
export function getPhilhealthDeduction(msc: number): number {
  // 5% of MSC, employee pays half
  return msc * 0.05 / 2;
}

/**
 * Calculates the Pag-IBIG employee contribution based on Monthly Salary Credit (MSC) for 2025.
 * Pag-IBIG contribution is 2% of MSC (maximum MSC is 10,000) for both employee and employer.
 * @param msc - Monthly Salary Credit
 * @returns Employee share of Pag-IBIG contribution
 */
export function getPagibigDeduction(msc: number): number {
  // Cap MSC at 10,000
  const cappedMsc = Math.min(10000, msc);
  // Pag-IBIG: 2% of capped MSC
  return cappedMsc * 0.02;
}

/**
 * Placeholder for tax deduction calculation.
 * This would require a tax table based on taxable income.
 * @param taxableIncome - Taxable income
 * @returns Tax deduction
 */
export function getTaxDeduction(taxableIncome: number): number {
  // Simplified tax calculation - this should be replaced with actual tax brackets
  // For demonstration, using a flat 15% rate
  return taxableIncome * 0.15;
}