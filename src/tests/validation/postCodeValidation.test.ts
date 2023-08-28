import postCodeValidation from '../../shared/lib/validation/postCodeValidation';

describe('postCodeValidation', () => {
  it('should return true for a valid US ZIP code', () => {
    const validUSPostalCode = '12345';
    const result = postCodeValidation(validUSPostalCode, 'US');
    expect(result).toBe(true);
  });

  it('should return "US ZIP code should contain only digits and be in the format XXXXX or XXXXX-XXXX." for an invalid US ZIP code', () => {
    const invalidUSPostalCode = '12345-678';
    const result = postCodeValidation(invalidUSPostalCode, 'US');
    expect(result).toBe('US ZIP code should contain only digits and be in the format XXXXX or XXXXX-XXXX.');
  });

  it('should return true for a valid Polish postal code', () => {
    const validPLPostalCode = '12-345';
    const result = postCodeValidation(validPLPostalCode, 'PL');
    expect(result).toBe(true);
  });

  it('should return "Polish postal code should contain only digits and be in the format XX-XXX." for an invalid Polish postal code', () => {
    const invalidPLPostalCode = '12345';
    const result = postCodeValidation(invalidPLPostalCode, 'PL');
    expect(result).toBe('Polish postal code should contain only digits and be in the format XX-XXX.');
  });

  it('should return true for a valid Ukrainian postal code', () => {
    const validUAPostalCode = '12345';
    const result = postCodeValidation(validUAPostalCode, 'UA');
    expect(result).toBe(true);
  });

  it('should return "Ukrainian postal code should be a 5-digit number." for an invalid Ukrainian postal code', () => {
    const invalidUAPostalCode = '123456';
    const result = postCodeValidation(invalidUAPostalCode, 'UA');
    expect(result).toBe('Ukrainian postal code should be a 5-digit number.');
  });

  it('should return "Please select a country" when no country is provided', () => {
    const postalCode = '12345';
    const result = postCodeValidation(postalCode, undefined);
    expect(result).toBe('Please select a country');
  });
});
