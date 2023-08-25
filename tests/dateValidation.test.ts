import dayjs from "dayjs";
import dateOfBirthValidation from '../src/shared/lib/validation/dateValidation';

describe('dateOfBirthValidation', () => {
  it('should return true for a valid date of birth', () => {
    const validDate = dayjs().subtract(20, 'years').format('YYYY-MM-DD');
    const result = dateOfBirthValidation.validate(validDate);
    expect(result).toBe(true);
  });

  it('should return "Person must be at least 13 years old" for a date of birth less than 13 years ago', () => {
    const invalidDate = dayjs().subtract(12, 'years').format('YYYY-MM-DD');
    const result = dateOfBirthValidation.validate(invalidDate);
    expect(result).toBe('Person must be at least 13 years old');
  });

  it('should return "Enter valid date" for an invalid date', () => {
    const invalidDate = 'invalid-date';
    const result = dateOfBirthValidation.validate(invalidDate);
    expect(result).toBe('Enter valid date');
  });

  it('should return "Enter valid date" for a date before 1900', () => {
    const oldDate = '1899-01-01';
    const result = dateOfBirthValidation.validate(oldDate);
    expect(result).toBe('Enter valid date');
  });

  it('should return "Enter valid date" for an empty value', () => {
    const emptyValue = '';
    const result = dateOfBirthValidation.validate(emptyValue);
    expect(result).toBe('Enter valid date');
  });
});