import validateRealTime from '../../shared/lib/validation/validateRealTime';

describe('validateRealTime', () => {
  it('should return a valid response for a valid input', () => {
    const mockValidation = jest.fn(() => true);
    const inputValue = 'valid-input';
    const result = validateRealTime(inputValue, mockValidation);

    expect(result).toEqual({
      isValid: true,
      message: '',
    });
    expect(mockValidation).toHaveBeenCalledWith(inputValue);
  });

  it('should return an invalid response for an invalid input', () => {
    const errorMessage = 'Invalid input';
    const mockValidation = jest.fn(() => errorMessage);
    const inputValue = 'invalid-input';
    const result = validateRealTime(inputValue, mockValidation);

    expect(result).toEqual({
      isValid: false,
      message: errorMessage,
    });
    expect(mockValidation).toHaveBeenCalledWith(inputValue);
  });
});
