import { months, nextYearsFromDate, selectOptions, monthsOptions, yearsOptions } from '../formOptions';

describe('FUNC - months', () => {
  it('generates list of 12 months', () => {
    expect(months()).toMatchSnapshot();
  });
});

describe('FUNC - nextYearsFromDate', () => {
  it('generates list of years from provided start date', () => {
    expect(nextYearsFromDate('1998-04-23T10:26:00', 4)).toEqual(['98', '99', '00', '01', '02']);
  });
});

describe('FUNC - selectOptions', () => {
  it('generates list of select options from flat list of values when NO default option is provided', () => {
    const values = [1, 2, 3];

    expect(selectOptions(values)).toEqual([{ label: 1, value: 1 }, { label: 2, value: 2 }, { label: 3, value: 3 }]);
  });

  it('generates list of select options from flat list of values when default option is provided', () => {
    const values = [1, 2, 3];
    const defaultOption = [{ value: 'MM', label: 'YY' }];

    expect(selectOptions(values, defaultOption)).toEqual([
      { value: 'MM', label: 'YY' },
      { label: 1, value: 1 },
      { label: 2, value: 2 },
      { label: 3, value: 3 }
    ]);
  });
});

describe('FUNC - monthsOptions', () => {
  it('generates list of months options', () => {
    expect(monthsOptions()).toMatchSnapshot();
  });
});

describe('FUNC - yearsOptions', () => {
  it('generates list of next 10 years from given date', () => {
    expect(yearsOptions('1998-04-23T10:26:00', 10)).toMatchSnapshot();
  });
});
