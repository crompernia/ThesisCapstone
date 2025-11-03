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
/**
 * Calculates overtime pay for regular days at 125% of hourly rate.
 * @param hourlyRate - The employee's hourly rate
 * @param overtimeHours - Number of overtime hours worked
 * @returns Overtime pay amount
 */
export function getOvertimePay(hourlyRate: number, overtimeHours: number): number {
  return overtimeHours * hourlyRate * 1.25;
}

/**
 * Calculates overtime pay for rest days or special non-working holidays.
 * First 8 hours: 130% of hourly rate
 * Additional hours beyond 8: 260% of hourly rate (130% + 130% on top of the first 130%)
 * @param hourlyRate - The employee's hourly rate
 * @param overtimeHours - Number of overtime hours worked on rest day/special holiday
 * @returns Overtime pay amount
 */
export function getRestDayOvertimePay(hourlyRate: number, overtimeHours: number): number {
  if (overtimeHours <= 8) {
    return overtimeHours * hourlyRate * 1.3;
  } else {
    const first8Hours = 8 * hourlyRate * 1.3;
    const additionalHours = overtimeHours - 8;
    const additionalPay = additionalHours * hourlyRate * 2.6; // 130% + 130% on top = 260%
    return first8Hours + additionalPay;
  }
}

/**
 * Calculates prorated deductions for half-month pay periods.
 * @param fullDeduction - Full monthly deduction amount
 * @param isHalfMonth - Whether this is for a half-month period
 * @returns Prorated deduction amount
 */
export function getProratedDeduction(fullDeduction: number, isHalfMonth: boolean = false): number {
    return isHalfMonth ? fullDeduction / 2 : fullDeduction;
}