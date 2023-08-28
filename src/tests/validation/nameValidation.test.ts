import nameValidation from '../../shared/lib/validation/nameValidation';

describe('nameValidation', () => {
  it('should return true for a valid name', () => {
    const validName = 'Alex';
    const result = nameValidation.validate(validName);
    expect(result).toBe(true);
  });

  it('should return "Required" for an empty name', () => {
    const emptyName = '';
    const result = nameValidation.validate(emptyName);
    expect(result).toBe('Required');
  });

  it('should return "Name should contain only letters (Latin/Cyrillic), apostrophes, or hyphens." for a name with special characters', () => {
    const invalidName = 'Alex!';
    const result = nameValidation.validate(invalidName);
    expect(result).toBe('Name should contain only letters (Latin/Cyrillic), apostrophes, or hyphens.');
  });

  it('should return true for a name with an apostrophe', () => {
    const nameWithApostrophe = "O'Connor";
    const result = nameValidation.validate(nameWithApostrophe);
    expect(result).toBe(true);
  });

  it('should return true for a name with a hyphen', () => {
    const nameWithHyphen = 'Smith-Jones';
    const result = nameValidation.validate(nameWithHyphen);
    expect(result).toBe(true);
  });
});
