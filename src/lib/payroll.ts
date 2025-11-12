/**
 * Utility functions for payroll calculations in the Philippines.
 */

/**
 * Philippine Holiday Types
 */
export enum HolidayType {
    REGULAR = 'regular',
    SPECIAL = 'special'
}

/**
 * Philippine Holiday Data Structure
 */
export interface Holiday {
    date: string; // YYYY-MM-DD format
    name: string;
    type: HolidayType;
}

/**
 * Philippine Holiday Calendar for 2024-2025
 * Based on Proclamation No. 1263 and other official declarations
 */
export const PHILIPPINE_HOLIDAYS_2024_2025: Holiday[] = [
    // Regular Holidays (11 total)
    { date: '2024-01-01', name: 'New Year\'s Day', type: HolidayType.REGULAR },
    { date: '2024-02-09', name: 'Chinese Lunar New Year', type: HolidayType.REGULAR },
    { date: '2024-03-29', name: 'Maundy Thursday', type: HolidayType.REGULAR },
    { date: '2024-03-30', name: 'Good Friday', type: HolidayType.REGULAR },
    { date: '2024-04-09', name: 'Araw ng Kagitingan', type: HolidayType.REGULAR },
    { date: '2024-05-01', name: 'Labor Day', type: HolidayType.REGULAR },
    { date: '2024-06-12', name: 'Independence Day', type: HolidayType.REGULAR },
    { date: '2024-08-21', name: 'Ninoy Aquino Day', type: HolidayType.REGULAR },
    { date: '2024-08-26', name: 'National Heroes Day', type: HolidayType.REGULAR },
    { date: '2024-11-30', name: 'Bonifacio Day', type: HolidayType.REGULAR },
    { date: '2024-12-25', name: 'Christmas Day', type: HolidayType.REGULAR },
    { date: '2024-12-30', name: 'Rizal Day', type: HolidayType.REGULAR },

    // Special Non-Working Holidays 2024
    { date: '2024-02-10', name: 'Chinese Lunar New Year (Additional)', type: HolidayType.SPECIAL },
    { date: '2024-03-31', name: 'Black Saturday', type: HolidayType.SPECIAL },
    { date: '2024-06-17', name: 'Eid\'l Fitr', type: HolidayType.SPECIAL },
    { date: '2024-08-09', name: 'Eid\'l Adha', type: HolidayType.SPECIAL },
    { date: '2024-11-01', name: 'All Saints\' Day', type: HolidayType.SPECIAL },
    { date: '2024-11-02', name: 'All Souls\' Day', type: HolidayType.SPECIAL },
    { date: '2024-12-08', name: 'Feast of the Immaculate Conception', type: HolidayType.SPECIAL },
    { date: '2024-12-24', name: 'Christmas Eve', type: HolidayType.SPECIAL },
    { date: '2024-12-31', name: 'New Year\'s Eve', type: HolidayType.SPECIAL },

    // Regular Holidays 2025
    { date: '2025-01-01', name: 'New Year\'s Day', type: HolidayType.REGULAR },
    { date: '2025-01-29', name: 'Chinese Lunar New Year', type: HolidayType.REGULAR },
    { date: '2025-04-18', name: 'Maundy Thursday', type: HolidayType.REGULAR },
    { date: '2025-04-19', name: 'Good Friday', type: HolidayType.REGULAR },
    { date: '2025-04-09', name: 'Araw ng Kagitingan', type: HolidayType.REGULAR },
    { date: '2025-05-01', name: 'Labor Day', type: HolidayType.REGULAR },
    { date: '2025-06-12', name: 'Independence Day', type: HolidayType.REGULAR },
    { date: '2025-08-25', name: 'Ninoy Aquino Day', type: HolidayType.REGULAR },
    { date: '2025-08-26', name: 'National Heroes Day', type: HolidayType.REGULAR },
    { date: '2025-11-30', name: 'Bonifacio Day', type: HolidayType.REGULAR },
    { date: '2025-12-25', name: 'Christmas Day', type: HolidayType.REGULAR },
    { date: '2025-12-30', name: 'Rizal Day', type: HolidayType.REGULAR },

    // Special Non-Working Holidays 2025
    { date: '2025-01-30', name: 'Chinese Lunar New Year (Additional)', type: HolidayType.SPECIAL },
    { date: '2025-04-20', name: 'Black Saturday', type: HolidayType.SPECIAL },
    { date: '2025-04-06', name: 'Eid\'l Fitr', type: HolidayType.SPECIAL },
    { date: '2025-06-29', name: 'Eid\'l Adha', type: HolidayType.SPECIAL },
    { date: '2025-11-01', name: 'All Saints\' Day', type: HolidayType.SPECIAL },
    { date: '2025-11-02', name: 'All Souls\' Day', type: HolidayType.SPECIAL },
    { date: '2025-12-08', name: 'Feast of the Immaculate Conception', type: HolidayType.SPECIAL },
    { date: '2025-12-24', name: 'Christmas Eve', type: HolidayType.SPECIAL },
    { date: '2025-12-31', name: 'New Year\'s Eve', type: HolidayType.SPECIAL },
];

/**
 * Checks if a given date is a Philippine holiday.
 * @param date - The date to check (Date object or ISO string)
 * @returns Holiday object if it's a holiday, null otherwise
 */
export function getHolidayInfo(date: Date | string): Holiday | null {
    const dateStr = typeof date === 'string' ? date : date.toISOString().split('T')[0];
    return PHILIPPINE_HOLIDAYS_2024_2025.find(holiday => holiday.date === dateStr) || null;
}

/**
 * Checks if a given date is a regular holiday.
 * @param date - The date to check
 * @returns True if it's a regular holiday
 */
export function isRegularHoliday(date: Date | string): boolean {
    const holiday = getHolidayInfo(date);
    return holiday?.type === HolidayType.REGULAR || false;
}

/**
 * Checks if a given date is a special non-working holiday.
 * @param date - The date to check
 * @returns True if it's a special holiday
 */
export function isSpecialHoliday(date: Date | string): boolean {
    const holiday = getHolidayInfo(date);
    return holiday?.type === HolidayType.SPECIAL || false;
}

/**
 * Checks if a given date is any type of holiday.
 * @param date - The date to check
 * @returns True if it's any holiday
 */
export function isHoliday(date: Date | string): boolean {
    return getHolidayInfo(date) !== null;
}

/**
 * Gets all holidays within a date range.
 * @param startDate - Start date of the range
 * @param endDate - End date of the range
 * @returns Array of holidays within the range
 */
export function getHolidaysInRange(startDate: Date, endDate: Date): Holiday[] {
    const start = new Date(startDate);
    const end = new Date(endDate);

    return PHILIPPINE_HOLIDAYS_2024_2025.filter(holiday => {
        const holidayDate = new Date(holiday.date);
        return holidayDate >= start && holidayDate <= end;
    });
}

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
 * Calculates Philippine income tax withholding based on taxable income for 2024-2025.
 * Uses progressive tax brackets for monthly income.
 * Note: This is a simplified monthly calculation. Proper implementation requires
 * year-to-date tracking for accurate withholding.
 * @param taxableIncome - Monthly taxable income
 * @returns Monthly tax withholding amount
 */
export function getTaxDeduction(taxableIncome: number): number {
    // Philippine Income Tax Brackets for 2024-2025 (monthly equivalent)
    // These are approximate monthly brackets based on annual brackets
    if (taxableIncome <= 20833.33) { // Up to ₱250,000 annually
        return 0;
    } else if (taxableIncome <= 33333.33) { // ₱250,001 - ₱400,000 annually
        return (taxableIncome - 20833.33) * 0.20;
    } else if (taxableIncome <= 66666.67) { // ₱400,001 - ₱800,000 annually
        return 2500 + (taxableIncome - 33333.33) * 0.25;
    } else if (taxableIncome <= 166666.67) { // ₱800,001 - ₱2,000,000 annually
        return 10833.33 + (taxableIncome - 66666.67) * 0.30;
    } else if (taxableIncome <= 666666.67) { // ₱2,000,001 - ₱8,000,000 annually
        return 40833.33 + (taxableIncome - 166666.67) * 0.35;
    } else { // Over ₱8,000,000 annually
        return 200833.33 + (taxableIncome - 666666.67) * 0.40;
    }
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

/**
 * Calculates holiday pay for regular holidays.
 * Regular holidays are paid at 100% of daily rate plus 30% premium.
 * @param dailyRate - The employee's daily rate
 * @param hoursWorked - Hours worked on the holiday (default 8)
 * @returns Holiday pay amount
 */
export function getRegularHolidayPay(dailyRate: number, hoursWorked: number = 8): number {
    // 100% basic pay + 30% premium = 130% of daily rate
    return dailyRate * 1.3;
}

/**
 * Calculates holiday pay for special non-working holidays.
 * Special holidays are paid at 100% of daily rate plus 30% premium if worked.
 * @param dailyRate - The employee's daily rate
 * @param hoursWorked - Hours worked on the holiday (default 8)
 * @returns Holiday pay amount
 */
export function getSpecialHolidayPay(dailyRate: number, hoursWorked: number = 8): number {
    // 100% basic pay + 30% premium = 130% of daily rate
    return dailyRate * 1.3;
}

/**
 * Calculates overtime pay for regular holidays.
 * First 8 hours: 200% of hourly rate (100% + 100% holiday premium)
 * Additional hours: 260% of hourly rate (200% + 60% overtime premium)
 * @param hourlyRate - The employee's hourly rate
 * @param overtimeHours - Number of overtime hours worked on regular holiday
 * @returns Overtime pay amount for regular holiday
 */
export function getRegularHolidayOvertimePay(hourlyRate: number, overtimeHours: number): number {
    if (overtimeHours <= 8) {
        return overtimeHours * hourlyRate * 2.0; // 200%
    } else {
        const first8Hours = 8 * hourlyRate * 2.0;
        const additionalHours = overtimeHours - 8;
        const additionalPay = additionalHours * hourlyRate * 2.6; // 260%
        return first8Hours + additionalPay;
    }
}

/**
 * Calculates overtime pay for special holidays.
 * First 8 hours: 150% of hourly rate (130% holiday + 20% overtime)
 * Additional hours: 195% of hourly rate (130% + 65% overtime)
 * @param hourlyRate - The employee's hourly rate
 * @param overtimeHours - Number of overtime hours worked on special holiday
 * @returns Overtime pay amount for special holiday
 */
export function getSpecialHolidayOvertimePay(hourlyRate: number, overtimeHours: number): number {
    if (overtimeHours <= 8) {
        return overtimeHours * hourlyRate * 1.5; // 150%
    } else {
        const first8Hours = 8 * hourlyRate * 1.5;
        const additionalHours = overtimeHours - 8;
        const additionalPay = additionalHours * hourlyRate * 1.95; // 195%
        return first8Hours + additionalPay;
    }
}

/**
 * Calculates night differential pay.
 * Night shift premium is 10% of hourly rate for hours worked between 10 PM and 6 AM.
 * @param hourlyRate - The employee's hourly rate
 * @param nightHours - Number of hours worked during night shift
 * @returns Night differential amount
 */
export function getNightDifferential(hourlyRate: number, nightHours: number): number {
    return nightHours * hourlyRate * 0.10;
}

/**
 * Calculates 13th month pay (Christmas bonus).
 * Based on 1/12 of annual basic salary, prorated for months worked.
 * @param monthlyBasicSalary - Monthly basic salary
 * @param monthsWorked - Number of months worked in the year (default 12)
 * @returns 13th month pay amount
 */
export function get13thMonthPay(monthlyBasicSalary: number, monthsWorked: number = 12): number {
    return (monthlyBasicSalary * monthsWorked) / 12;
}

/**
 * Validates payslip calculation data for errors and data integrity.
 * @param data - The payslip calculation data to validate
 * @returns Object with isValid boolean and array of error messages
 */
export function validatePayslipCalculation(data: {
    employeeId?: string;
    basicPay?: number;
    overtime?: number;
    allowances?: number;
    sssDeduction?: number;
    philhealthDeduction?: number;
    pagibigDeduction?: number;
    taxDeduction?: number;
    lateDeduction?: number;
    otherDeductions?: number;
    netPay?: number;
    daysWorked?: number;
    dailyRate?: number;
}): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    // Required field validation
    if (!data.employeeId || data.employeeId.trim() === '') {
        errors.push('Employee ID is required');
    }

    // Numeric field validation with non-negative checks
    const numericFields = [
        { name: 'basicPay', value: data.basicPay, min: 0 },
        { name: 'overtime', value: data.overtime, min: 0 },
        { name: 'allowances', value: data.allowances, min: 0 },
        { name: 'sssDeduction', value: data.sssDeduction, min: 0 },
        { name: 'philhealthDeduction', value: data.philhealthDeduction, min: 0 },
        { name: 'pagibigDeduction', value: data.pagibigDeduction, min: 0 },
        { name: 'taxDeduction', value: data.taxDeduction, min: 0 },
        { name: 'lateDeduction', value: data.lateDeduction, min: 0 },
        { name: 'otherDeductions', value: data.otherDeductions, min: 0 },
        { name: 'netPay', value: data.netPay, min: 0 },
        { name: 'daysWorked', value: data.daysWorked, min: 0 },
        { name: 'dailyRate', value: data.dailyRate, min: 0 },
    ];

    for (const field of numericFields) {
        if (field.value === undefined || field.value === null) {
            errors.push(`${field.name} is required`);
        } else if (typeof field.value !== 'number' || isNaN(field.value)) {
            errors.push(`${field.name} must be a valid number`);
        } else if (field.value < field.min) {
            errors.push(`${field.name} cannot be negative`);
        }
    }

    // Business logic validation
    if (data.daysWorked && data.daysWorked > 31) {
        errors.push('Days worked cannot exceed 31 days in a month');
    }

    if (data.dailyRate && data.daysWorked && data.basicPay) {
        const expectedBasicPay = data.dailyRate * data.daysWorked;
        const variance = Math.abs(data.basicPay - expectedBasicPay);
        if (variance > 0.01) { // Allow for small floating point differences
            errors.push(`Basic pay (${data.basicPay}) doesn't match daily rate × days worked (${expectedBasicPay})`);
        }
    }

    // Net pay calculation validation
    if (data.basicPay !== undefined && data.overtime !== undefined && data.allowances !== undefined &&
        data.sssDeduction !== undefined && data.philhealthDeduction !== undefined &&
        data.pagibigDeduction !== undefined && data.taxDeduction !== undefined &&
        data.lateDeduction !== undefined && data.otherDeductions !== undefined && data.netPay !== undefined) {

        const calculatedEarnings = data.basicPay + data.overtime + data.allowances;
        const calculatedDeductions = data.sssDeduction + data.philhealthDeduction + data.pagibigDeduction +
                                   data.taxDeduction + data.lateDeduction + data.otherDeductions;
        const calculatedNetPay = calculatedEarnings - calculatedDeductions;

        const variance = Math.abs(data.netPay - calculatedNetPay);
        if (variance > 0.01) { // Allow for small floating point differences
            errors.push(`Net pay calculation mismatch. Expected: ${calculatedNetPay}, Got: ${data.netPay}`);
        }
    }

    // Government deduction limits validation
    if (data.sssDeduction && data.sssDeduction > 2000) {
        errors.push('SSS deduction exceeds maximum monthly contribution');
    }

    if (data.philhealthDeduction && data.philhealthDeduction > 2500) {
        errors.push('PhilHealth deduction exceeds maximum monthly contribution');
    }

    if (data.pagibigDeduction && data.pagibigDeduction > 1000) {
        errors.push('Pag-IBIG deduction exceeds maximum monthly contribution');
    }

    return {
        isValid: errors.length === 0,
        errors
    };
}

/**
 * Represents different payroll cycle types.
 */
export enum PayrollCycleType {
    MONTHLY = 'monthly',
    SEMI_MONTHLY = 'semi_monthly',
    BI_WEEKLY = 'bi_weekly',
    WEEKLY = 'weekly'
}


/**
 * Configuration for different payroll cycles.
 */
export const PAYROLL_CYCLE_CONFIGS = {
    [PayrollCycleType.MONTHLY]: {
        periodsPerYear: 12,
        daysPerPeriod: 30,
        description: 'Monthly (1st to end of month)'
    },
    [PayrollCycleType.SEMI_MONTHLY]: {
        periodsPerYear: 24,
        daysPerPeriod: 15,
        description: 'Semi-monthly (1-15, 16-end)'
    },
    [PayrollCycleType.BI_WEEKLY]: {
        periodsPerYear: 26,
        daysPerPeriod: 14,
        description: 'Bi-weekly (every 2 weeks)'
    },
    [PayrollCycleType.WEEKLY]: {
        periodsPerYear: 52,
        daysPerPeriod: 7,
        description: 'Weekly'
    }
};

/**
 * Calculates pay period dates based on cycle type and reference date.
 * @param cycleType - The payroll cycle type
 * @param referenceDate - Reference date (defaults to today)
 * @param periodOffset - Offset from current period (0 = current, -1 = previous, 1 = next)
 * @returns Object with period start date, end date, and period identifier
 */
export function calculatePayPeriodDates(
    cycleType: PayrollCycleType,
    referenceDate: Date = new Date(),
    periodOffset: number = 0
): { startDate: Date; endDate: Date; periodId: string; payDate: Date } {
    const date = new Date(referenceDate);

    switch (cycleType) {
        case PayrollCycleType.SEMI_MONTHLY:
            // Semi-monthly: 1-15 and 16-end of month
            const currentDay = date.getDate();
            const isFirstHalf = currentDay <= 15;

            // Adjust for period offset
            let targetMonth = date.getMonth();
            let targetYear = date.getFullYear();
            let targetHalf = isFirstHalf;

            const totalPeriods = periodOffset;
            targetMonth += Math.floor(totalPeriods / 2);
            targetHalf = (totalPeriods % 2 === 0) ? targetHalf : !targetHalf;

            // Adjust year if month overflowed
            while (targetMonth >= 12) {
                targetMonth -= 12;
                targetYear += 1;
            }
            while (targetMonth < 0) {
                targetMonth += 12;
                targetYear -= 1;
            }

            let startDate: Date;
            let endDate: Date;
            let payDate: Date;

            if (targetHalf) {
                // First half: 1st to 15th
                startDate = new Date(targetYear, targetMonth, 1);
                endDate = new Date(targetYear, targetMonth, 15);
                payDate = new Date(targetYear, targetMonth, 20); // Pay on 20th
            } else {
                // Second half: 16th to end of month
                startDate = new Date(targetYear, targetMonth, 16);
                endDate = new Date(targetYear, targetMonth + 1, 0); // Last day of month
                payDate = new Date(targetYear, targetMonth + 1, 5); // Pay on 5th of next month
            }

            const periodId = `${startDate.getFullYear()}-${String(startDate.getMonth() + 1).padStart(2, '0')}-${targetHalf ? '01' : '02'}`;

            return {
                startDate,
                endDate,
                periodId,
                payDate
            };

        case PayrollCycleType.MONTHLY:
            // Monthly: 1st to end of month
            const monthlyDate = new Date(date.getFullYear(), date.getMonth() + periodOffset, 1);
            const monthlyStart = new Date(monthlyDate.getFullYear(), monthlyDate.getMonth(), 1);
            const monthlyEnd = new Date(monthlyDate.getFullYear(), monthlyDate.getMonth() + 1, 0);
            const monthlyPayDate = new Date(monthlyDate.getFullYear(), monthlyDate.getMonth() + 1, 10); // Pay on 10th of next month

            return {
                startDate: monthlyStart,
                endDate: monthlyEnd,
                periodId: `${monthlyStart.getFullYear()}-${String(monthlyStart.getMonth() + 1).padStart(2, '0')}`,
                payDate: monthlyPayDate
            };

        case PayrollCycleType.BI_WEEKLY:
            // Bi-weekly: every 14 days
            const biWeeklyStart = new Date(date);
            biWeeklyStart.setDate(date.getDate() - date.getDay() + 1); // Start of week (Monday)
            biWeeklyStart.setDate(biWeeklyStart.getDate() + (periodOffset * 14));

            const biWeeklyEnd = new Date(biWeeklyStart);
            biWeeklyEnd.setDate(biWeeklyStart.getDate() + 13); // 14 days total (Monday to Sunday)

            const biWeeklyPayDate = new Date(biWeeklyEnd);
            biWeeklyPayDate.setDate(biWeeklyEnd.getDate() + 3); // Pay 3 days after period end

            return {
                startDate: biWeeklyStart,
                endDate: biWeeklyEnd,
                periodId: `BW-${biWeeklyStart.getFullYear()}${String(biWeeklyStart.getMonth() + 1).padStart(2, '0')}${String(biWeeklyStart.getDate()).padStart(2, '0')}`,
                payDate: biWeeklyPayDate
            };

        case PayrollCycleType.WEEKLY:
            // Weekly: Monday to Sunday
            const weeklyStart = new Date(date);
            weeklyStart.setDate(date.getDate() - date.getDay() + 1 + (periodOffset * 7)); // Monday

            const weeklyEnd = new Date(weeklyStart);
            weeklyEnd.setDate(weeklyStart.getDate() + 6); // Sunday

            const weeklyPayDate = new Date(weeklyEnd);
            weeklyPayDate.setDate(weeklyEnd.getDate() + 2); // Pay 2 days after period end (Tuesday)

            return {
                startDate: weeklyStart,
                endDate: weeklyEnd,
                periodId: `W-${weeklyStart.getFullYear()}${String(weeklyStart.getMonth() + 1).padStart(2, '0')}${String(weeklyStart.getDate()).padStart(2, '0')}`,
                payDate: weeklyPayDate
            };

        default:
            throw new Error(`Unsupported payroll cycle type: ${cycleType}`);
    }
}

/**
 * Gets the current pay period information based on cycle type.
 * @param cycleType - The payroll cycle type
 * @returns Current pay period details
 */
export function getCurrentPayPeriod(cycleType: PayrollCycleType = PayrollCycleType.SEMI_MONTHLY) {
    return calculatePayPeriodDates(cycleType, new Date(), 0);
}

/**
 * Gets the next pay period information.
 * @param cycleType - The payroll cycle type
 * @returns Next pay period details
 */
export function getNextPayPeriod(cycleType: PayrollCycleType = PayrollCycleType.SEMI_MONTHLY) {
    return calculatePayPeriodDates(cycleType, new Date(), 1);
}

/**
 * Gets the previous pay period information.
 * @param cycleType - The payroll cycle type
 * @returns Previous pay period details
 */
export function getPreviousPayPeriod(cycleType: PayrollCycleType = PayrollCycleType.SEMI_MONTHLY) {
    return calculatePayPeriodDates(cycleType, new Date(), -1);
}

/**
 * Calculates leave deduction for unpaid leaves based on DOLE Philippines regulations.
 * Unpaid leaves result in proportional deduction from basic pay.
 * @param dailyRate - Employee's daily rate
 * @param unpaidLeaveDays - Number of unpaid leave days taken
 * @returns Leave deduction amount
 */
export function getLeaveDeduction(dailyRate: number, unpaidLeaveDays: number): number {
    return dailyRate * unpaidLeaveDays;
}

/**
 * Determines if a leave type is paid or unpaid based on DOLE Philippines regulations.
 * Philippine labor law requires payment for certain leave types.
 * @param leaveType - The type of leave (e.g., 'Vacation Leave', 'Sick Leave', 'Emergency Leave')
 * @returns Object with isPaid boolean and payPercentage (0-100)
 */
export function getLeavePayRules(leaveType: string): { isPaid: boolean; payPercentage: number } {
    const paidLeaveTypes = [
        'Vacation Leave',
        'Sick Leave',
        'Maternity Leave',
        'Paternity Leave',
        'Solo Parent Leave',
        'VAWC Leave' // Violence Against Women and Children Leave
    ];

    // Check if it's a paid leave type
    const normalizedLeaveType = leaveType.toLowerCase();
    const isPaid = paidLeaveTypes.some(type =>
        normalizedLeaveType.includes(type.toLowerCase().replace(' leave', ''))
    );

    if (isPaid) {
        // Most paid leaves are 100% paid, except special cases
        let payPercentage = 100;

        // Maternity leave has special rules (105% for normal delivery, 125% for caesarian)
        // For simplicity, we'll use 100% and let HR adjust manually if needed
        if (normalizedLeaveType.includes('maternity')) {
            payPercentage = 100; // Can be adjusted to 105 or 125 as needed
        }

        return { isPaid: true, payPercentage };
    }

    // Emergency leave, bereavement, etc. are typically unpaid unless specified by company policy
    return { isPaid: false, payPercentage: 0 };
}

/**
 * Calculates paid leave compensation for approved paid leaves.
 * Paid leaves should be treated as regular working days for payroll purposes.
 * @param dailyRate - Employee's daily rate
 * @param paidLeaveDays - Number of paid leave days
 * @param payPercentage - Percentage of daily rate to pay (default 100)
 * @returns Leave pay amount
 */
export function getPaidLeaveCompensation(dailyRate: number, paidLeaveDays: number, payPercentage: number = 100): number {
    return dailyRate * paidLeaveDays * (payPercentage / 100);
}

/**
 * Overtime types for different work conditions
 */
export enum OvertimeType {
    REGULAR = 'regular',           // Regular workday overtime (125%)
    HOLIDAY_REGULAR = 'holiday_regular',   // Regular holiday overtime (200%)
    HOLIDAY_SPECIAL = 'holiday_special',   // Special holiday overtime (150%)
    REST_DAY = 'rest_day'          // Rest day overtime (130%)
}

/**
 * Calculates holiday pay based on attendance data and holiday calendar.
 * @param dailyRate - Employee's daily rate
 * @param attendanceRecords - Array of attendance records for the pay period
 * @returns Object with regular holiday pay, special holiday pay, and overtime amounts
 */
export function calculateHolidayPayFromAttendance(
    dailyRate: number,
    attendanceRecords: Array<{
        date: string;
        hoursWorked: number;
        isOvertime: boolean;
        overtimeHours: number;
        overtimeType?: OvertimeType;
    }>
): {
    regularHolidayPay: number;
    specialHolidayPay: number;
    regularHolidayOvertime: number;
    specialHolidayOvertime: number;
} {
    let regularHolidayPay = 0;
    let specialHolidayPay = 0;
    let regularHolidayOvertime = 0;
    let specialHolidayOvertime = 0;

    for (const record of attendanceRecords) {
        const holiday = getHolidayInfo(record.date);
        if (!holiday) continue;

        const hoursWorked = record.hoursWorked || 0;
        const overtimeHours = record.overtimeHours || 0;
        const overtimeType = record.overtimeType || OvertimeType.REGULAR;

        if (holiday.type === HolidayType.REGULAR) {
            // Regular holiday pay for hours worked
            if (hoursWorked > 0) {
                regularHolidayPay += getRegularHolidayPay(dailyRate, hoursWorked);
            }
            // Regular holiday overtime
            if (overtimeHours > 0) {
                regularHolidayOvertime += getRegularHolidayOvertimePay(dailyRate / 8, overtimeHours);
            }
        } else if (holiday.type === HolidayType.SPECIAL) {
            // Special holiday pay for hours worked
            if (hoursWorked > 0) {
                specialHolidayPay += getSpecialHolidayPay(dailyRate, hoursWorked);
            }
            // Special holiday overtime
            if (overtimeHours > 0) {
                specialHolidayOvertime += getSpecialHolidayOvertimePay(dailyRate / 8, overtimeHours);
            }
        }
    }

    return {
        regularHolidayPay,
        specialHolidayPay,
        regularHolidayOvertime,
        specialHolidayOvertime
    };
}

/**
 * Calculates comprehensive overtime pay based on attendance records and work conditions.
 * Only includes overtime that has been approved by HR.
 * @param hourlyRate - Employee's hourly rate
 * @param attendanceRecords - Array of attendance records with overtime details
 * @returns Object with different types of overtime pay
 */
export function calculateOvertimePayFromAttendance(
    hourlyRate: number,
    attendanceRecords: Array<{
        date: string;
        overtimeHours: number;
        overtimeType: OvertimeType;
        overtimeApproved?: boolean;
    }>
): {
    regularOvertime: number;
    holidayRegularOvertime: number;
    holidaySpecialOvertime: number;
    restDayOvertime: number;
    totalOvertime: number;
} {
    let regularOvertime = 0;
    let holidayRegularOvertime = 0;
    let holidaySpecialOvertime = 0;
    let restDayOvertime = 0;

    for (const record of attendanceRecords) {
        const overtimeHours = record.overtimeHours || 0;
        if (overtimeHours <= 0) continue;

        // Only calculate pay for approved overtime
        if (!record.overtimeApproved) continue;

        const overtimeType = record.overtimeType || OvertimeType.REGULAR;

        switch (overtimeType) {
            case OvertimeType.REGULAR:
                regularOvertime += getOvertimePay(hourlyRate, overtimeHours);
                break;
            case OvertimeType.HOLIDAY_REGULAR:
                holidayRegularOvertime += getRegularHolidayOvertimePay(hourlyRate, overtimeHours);
                break;
            case OvertimeType.HOLIDAY_SPECIAL:
                holidaySpecialOvertime += getSpecialHolidayOvertimePay(hourlyRate, overtimeHours);
                break;
            case OvertimeType.REST_DAY:
                restDayOvertime += getRestDayOvertimePay(hourlyRate, overtimeHours);
                break;
        }
    }

    const totalOvertime = regularOvertime + holidayRegularOvertime + holidaySpecialOvertime + restDayOvertime;

    return {
        regularOvertime,
        holidayRegularOvertime,
        holidaySpecialOvertime,
        restDayOvertime,
        totalOvertime
    };
}

/**
 * Determines the appropriate overtime type based on date and work conditions.
 * @param date - The date of work
 * @param isRestDay - Whether this is a rest day for the employee
 * @returns The appropriate overtime type
 */
export function determineOvertimeType(date: Date | string, isRestDay: boolean = false): OvertimeType {
    const holiday = getHolidayInfo(date);

    if (holiday) {
        return holiday.type === HolidayType.REGULAR
            ? OvertimeType.HOLIDAY_REGULAR
            : OvertimeType.HOLIDAY_SPECIAL;
    }

    if (isRestDay) {
        return OvertimeType.REST_DAY;
    }

    return OvertimeType.REGULAR;
}

/**
 * Calculates night differential based on attendance records.
 * Night shift premium is 10% of hourly rate for hours worked between 10 PM and 6 AM.
 * @param hourlyRate - Employee's hourly rate
 * @param attendanceRecords - Array of attendance records with night hours
 * @returns Night differential amount
 */
export function calculateNightDifferentialFromAttendance(
    hourlyRate: number,
    attendanceRecords: Array<{
        date: string;
        nightHours: number; // Hours worked between 10 PM and 6 AM
    }>
): number {
    let totalNightDifferential = 0;

    for (const record of attendanceRecords) {
        const nightHours = record.nightHours || 0;
        if (nightHours > 0) {
            totalNightDifferential += getNightDifferential(hourlyRate, nightHours);
        }
    }

    return totalNightDifferential;
}

/**
 * Simplified night differential calculation for basic implementation.
 * Assumes a percentage of total hours worked are night hours.
 * @param hourlyRate - Employee's hourly rate
 * @param totalHoursWorked - Total hours worked in the period
 * @param nightShiftPercentage - Percentage of hours that are night shift (default 25%)
 * @returns Estimated night differential amount
 */
export function calculateEstimatedNightDifferential(
    hourlyRate: number,
    totalHoursWorked: number,
    nightShiftPercentage: number = 25
): number {
    const estimatedNightHours = totalHoursWorked * (nightShiftPercentage / 100);
    return getNightDifferential(hourlyRate, estimatedNightHours);
}