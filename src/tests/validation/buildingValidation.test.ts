import buildingValidation from '../../shared/lib/validation/buildingValidation';

describe('buildingValidation', () => {
  it('should return true for a valid building number', () => {
    const validValue = '123-abc';
    const result = buildingValidation.validate(validValue);
    expect(result).toBe(true);
  });

  it('should return an error message for an invalid building number', () => {
    const invalidValue = '123@abc';
    const result = buildingValidation.validate(invalidValue);
    expect(result).toBe('Invalid building number. It should not contain special characters.');
  });

  it('should return true for an empty value', () => {
    const emptyValue = '';
    const result = buildingValidation.validate(emptyValue);
    expect(result).toBe(true);
  });
});
