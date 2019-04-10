import cardValidator from 'card-validator';
import { isNumber, getPotentialCardRules } from './cardRules';

jest.mock('card-validator');

describe('#getPotentialCardRules', () => {
  afterEach(() => {
    jest.resetModules();
  });

  describe('when card validator returns potential card', () => {
    it('should return correct rules', () => {
      const mockData = {
        card: {
          type: 'dummy',
          lengths: [16],
          code: {
            size: 2
          }
        }
      };

      cardValidator.number.mockReturnValue(mockData);

      expect(getPotentialCardRules('444')).toEqual({
        type: 'dummy',
        maxLength: 16,
        securityCode: {
          size: 2
        }
      });
    });
  });

  describe('when card validator returns null', () => {
    let result;

    beforeEach(() => {
      cardValidator.number.mockReturnValue({});
      result = getPotentialCardRules('nOnValidNumber');
    });

    it('should return null', () => {
      expect(result).toEqual(null);
    });

    it('card validator should have been called with correct values', () => {
      expect(cardValidator.number).toHaveBeenCalledWith('nOnValidNumber');
    });
  });
});

describe('#isNumber', () => {
  describe('when is a number', () => {
    it('should return true', () => {
      expect(isNumber(2)).toEqual(true);
      expect(isNumber('2')).toEqual(true);
    });
  });

  describe('when is not a number', () => {
    it('should return false', () => {
      expect(isNumber('2a')).toEqual(false);
    });
  });

  describe('when is null', () => {
    it('should return false', () => {
      expect(isNumber(null)).toEqual(false);
    });
  });

  describe('when is undefined', () => {
    it('should return false', () => {
      expect(isNumber(undefined)).toEqual(false);
    });
  });
});
