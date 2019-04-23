import addDays from '../addDays';

describe('FUNC - addDays', () => {
  it('should return correct date', () => {
    expect(addDays('1998-04-23T00:00:00.000Z', 3)).toEqual(new Date('1998-04-26T00:00:00.000Z'));
  });
});
