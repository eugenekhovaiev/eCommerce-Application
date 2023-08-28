import countryValidation from '../../shared/lib/validation/countryValidation';

describe('countryValidation', () => {
  it('should return true for a non-empty value', () => {
    const validValue = 'USA';
    const result = countryValidation.validate(validValue);
    expect(result).toBe(true);
  });

  it('should return "This field is required" for an empty value', () => {
    const emptyValue = '';
    const result = countryValidation.validate(emptyValue);
    expect(result).toBe('This field is required');
  });
});
