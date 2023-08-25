import unitValidation from '../src/shared/lib/validation/unitValidation';

describe('unitValidation', () => {
  it('should return true for a valid unit number', () => {
    const validUnit = 'Apartment-123';
    const result = unitValidation.validate(validUnit);
    expect(result).toBe(true);
  });

  it('should return "Invalid unit number. It should not contain special characters." for an invalid unit number', () => {
    const invalidUnit = 'Unit@456';
    const result = unitValidation.validate(invalidUnit);
    expect(result).toBe('Invalid unit number. It should not contain special characters.');
  });

  it('should return true for an empty unit number', () => {
    const emptyUnit = '';
    const result = unitValidation.validate(emptyUnit);
    expect(result).toBe(true);
  });
});
