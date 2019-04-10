/**
 * Generate Options for Months checkbox
 *
 * @param {Number} numberOfMonths - Amount of months to generate options. (12 by default)
 */
const generateMonths = (numberOfMonths = 12) => {
  const monthOptions = [{ label: 'MM', value: 'MM', disabled: true }];

  for (let i = 1; i <= numberOfMonths; i++) {
    monthOptions.push({
      label: `${i}`,
      value: `${i}`
    });
  }
  return monthOptions;
};

/**
 * Generate Options for Years checkbox
 *
 * @param {Number} yearsAmount - Amount of years to generate options. (20 by default)
 */
const generateYears = (yearsAmount = 20) => {
  const yearOptions = [{ label: 'YY', value: 'YY', disabled: true }];

  let currentYear = Number(
    new Date()
      .getFullYear()
      .toString()
      .slice(2)
  );

  for (let i = 1; i <= yearsAmount; i++) {
    yearOptions.push({
      label: `${currentYear}`,
      value: `${currentYear}`
    });
    currentYear++;
  }

  return yearOptions;
};

export { generateMonths, generateYears };
