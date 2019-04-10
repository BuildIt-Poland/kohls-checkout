import { generateMonths, generateYears } from './optionsBuilder';

describe('CreditCard#optionsBuilder', () => {
  it('should generate correctly object with months', () => {
    expect(generateMonths(2)).toEqual([
      { label: 'MM', value: 'MM', disabled: true },
      { label: '1', value: '1' },
      { label: '2', value: '2' }
    ]);
  });
  it('should generate correctly object with months', () => {
    const DATE_TO_USE = new Date('2010');
    const _Date = Date;
    global.Date = jest.fn(() => DATE_TO_USE);
    global.Date.UTC = _Date.UTC;
    global.Date.parse = _Date.parse;
    global.Date.now = _Date.now;

    expect(generateYears(2)).toEqual([
      { label: 'YY', value: 'YY', disabled: true },
      { label: '10', value: '10' },
      { label: '11', value: '11' }
    ]);
  });
});
