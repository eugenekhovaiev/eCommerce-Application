import emailValidation from '../src/shared/lib/validation/emailValidation';

describe('emailValidation', () => {
  it('should return true for a valid email', () => {
    const validEmail = 'user@example.com';
    const result = emailValidation.validate(validEmail);
    expect(result).toBe(true);
  });

  it('should return "Required" for an empty email', () => {
    const emptyEmail = '';
    const result = emailValidation.validate(emptyEmail);
    expect(result).toBe('Required');
  });

  it('should return "Email address must not contain whitespace" for an email with whitespace', () => {
    const invalidEmail = 'user@ example.com';
    const result = emailValidation.validate(invalidEmail);
    expect(result).toBe('Email address must not contain whitespace');
  });

  it('should return "Email address must contain an "@" symbol" for an email without "@"', () => {
    const invalidEmail = 'userexample.com';
    const result = emailValidation.validate(invalidEmail);
    expect(result).toBe('Email address must contain an "@" symbol');
  });

  it('should return "Email address must contain a domain name (e.g., example.com)" for an email with "@" at the end', () => {
    const invalidEmail = 'user@';
    const result = emailValidation.validate(invalidEmail);
    expect(result).toBe('Email address must contain a domain name (e.g., example.com)');
  });

  it('should return "Enter valid email, e.g. user@example.com" for an invalid email', () => {
    const invalidEmail = 'inv@alid-email';
    const result = emailValidation.validate(invalidEmail);
    expect(result).toBe('Enter valid email, e.g. user@example.com');
  });
});
