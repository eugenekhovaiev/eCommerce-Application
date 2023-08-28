import streetValidation from '../../shared/lib/validation/streetValidation';

describe('streetValidation', () => {
  it('should return true for a valid street address', () => {
    const validStreet = '123 Main Street';
    const result = streetValidation.validate(validStreet);
    expect(result).toBe(true);
  });

  it('should return "Required" for an empty street address', () => {
    const emptyStreet = '';
    const result = streetValidation.validate(emptyStreet);
    expect(result).toBe('Street address must contain at least one character');
  });

  it('should return "Street address must contain at least one character" for a street address with only spaces', () => {
    const spacesStreet = '    ';
    const result = streetValidation.validate(spacesStreet);
    expect(result).toBe('Street address must contain at least one character');
  });
});
