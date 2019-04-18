import scrollToRef from '../scrollToRef';

describe('FUNC - scrollToRef', () => {
  beforeEach(() => {
    global.scrollTo = jest.fn();
  });

  afterEach(() => {
    global.scrollTo.mockReset();
  });

  it('should call window scrollTo with correct', () => {
    const ref = {
      current: {
        offsetTop: 10
      }
    };

    scrollToRef(ref, 1);

    expect(global.scrollTo).toHaveBeenCalledWith({
      top: 9,
      left: 0,
      behavior: 'smooth'
    });
  });

  it('should call window scrollTo with correct', () => {
    const ref = {
      current: {
        offsetTop: 10
      }
    };

    scrollToRef(ref);

    expect(global.scrollTo).toHaveBeenCalledWith({
      top: 10,
      left: 0,
      behavior: 'smooth'
    });
  });
});
