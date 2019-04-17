import { months, nextYearsFromDate, monthsOptions, yearsOptions } from '../formOptions';

describe('FUNC - months', () => {
  it('generates list of 12 months', () => {
    expect(months()).toMatchSnapshot();
  });
});

describe('FUNC - nextYearsFromDate', () => {
  it('generates list of years from provided start date', () => {
    expect(nextYearsFromDate('2006-04-23T10:26:00', 4)).toEqual([6, 7, 8, 9, 10]);
  });
});

describe('FUNC - monthsOptions', () => {
  it('generates list of months options', () => {
    expect(monthsOptions()).toMatchSnapshot();
  });
});

describe('FUNC - yearsOptions', () => {
  it('generates list of next 10 years from given date', () => {
    expect(yearsOptions('2006-04-23T10:26:00', 10)).toMatchSnapshot();
  });
});
