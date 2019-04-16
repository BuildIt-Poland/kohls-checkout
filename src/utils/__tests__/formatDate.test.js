import formatDate from '../formatDate';

describe('FUNC - formatDate', () => {
  it('should receive formatted date', () => {
    expect(formatDate(new Date(2019, 4, 16))).toEqual('Thu, May 16');
  });
});
