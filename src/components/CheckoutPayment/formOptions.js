// Generates options for mont and year expiry selects

export function months() {
  let months = [];
  for (let i = 1; i <= 12; i++) {
    months.push(i);
  }

  return months;
}

export function nextYearsFromDate(startDate, yearsAmount = 20) {
  const startYear = Number(
    new Date(startDate)
      .getFullYear()
      .toString()
      .slice(2)
  );

  let years = [];
  for (let i = startYear; i <= startYear + yearsAmount; i++) {
    years.push(i);
  }

  return years;
}

export function monthsOptions() {
  const defaultOption = [{ label: 'MM', value: 'MM', disabled: true }];
  const rawMonths = months();

  return defaultOption.concat(
    rawMonths.map(month => {
      return {
        label: month,
        value: month
      };
    })
  );
}

export function yearsOptions(startDate, yearsAmount) {
  const defaultOption = [{ label: 'YY', value: 'YY', disabled: true }];
  const rawYears = nextYearsFromDate(startDate, yearsAmount);

  return defaultOption.concat(
    rawYears.map(year => {
      return {
        label: year,
        value: year
      };
    })
  );
}
