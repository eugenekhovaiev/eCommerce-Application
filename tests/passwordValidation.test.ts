import passwordValidation from '../src/shared/lib/validation/passwordValidation';

describe('passwordValidation', () => {
  it('should return true for a valid password', () => {
    const validPassword = 'Password!1';
    const result = passwordValidation.validate(validPassword);
    expect(result).toBe(true);
  });

  it('should return "Password must be at least 8 characters long" for a short password', () => {
    const shortPassword = 'Abc12!';
    const result = passwordValidation.validate(shortPassword);
    expect(result).toBe('Password must be at least 8 characters long');
  });

  it('should return "Password must contain at least one uppercase letter (A-Z)" for a password without uppercase letter', () => {
    const invalidPassword = 'password!1';
    const result = passwordValidation.validate(invalidPassword);
    expect(result).toBe('Password must contain at least one uppercase letter (A-Z)');
  });

  it('should return "Password must contain at least one lowercase letter (a-z)" for a password without lowercase letter', () => {
    const invalidPassword = 'PASSWORD!1';
    const result = passwordValidation.validate(invalidPassword);
    expect(result).toBe('Password must contain at least one lowercase letter (a-z)');
  });

  it('should return "Password must contain at least one digit (0-9)" for a password without digits', () => {
    const invalidPassword = 'Password!';
    const result = passwordValidation.validate(invalidPassword);
    expect(result).toBe('Password must contain at least one digit (0-9)');
  });

  it('should return "Password must contain at least one special character (e.g., !@#$%^&*)" for a password without special characters', () => {
    const invalidPassword = 'Password123';
    const result = passwordValidation.validate(invalidPassword);
    expect(result).toBe('Password must contain at least one special character (e.g., !@#$%^&*)');
  });

  it('should return "Enter valid password" for an invalid password', () => {
    const invalidPassword = 'Invalidpassword1!  ';
    const result = passwordValidation.validate(invalidPassword);
    expect(result).toBe('Enter valid password');
  });
});
