import cityValidation from '../src/shared/lib/validation/cityValidation';

describe('cityvalidation', () => {
    it('should return true for a valid city', () => {
        const validCity = 'Minsk';
        const result = cityValidation.validate(validCity);
        expect(result).toBe(true);
    });

    it('should return an error message for a city with digits', () => {
        const invalidCity = 'Warsaw 123';
        const result = cityValidation.validate(invalidCity);
        expect(result).toBe('City should not contain any digits or special characters.');
    });

    it('should return an error message for a city with special characters', () => {
        const invalidCity = 'Minsk!';
        const result = cityValidation.validate(invalidCity);
        expect(result).toBe('City should not contain any digits or special characters.');
    });

    it('should return "Required" for an empty city', () => {
        const emptyCity = '';
        const result = cityValidation.validate(emptyCity);
        expect(result).toBe('Required');
    });
});