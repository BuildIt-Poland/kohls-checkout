import formatDate from '../formatDate';

describe('FUNC - formatDate', () => {
  it('should receive formatted date', () => {
    const formattedDate = formatDate(new Date(2019, 4, 16));
    expect(formattedDate).toEqual('Thu, May 16');
  });
});
