import dayjs from 'dayjs';

const dateOfBirthValidtion = {
  required: 'Required',
  validate: (value: string): boolean | string => {
    const minAge = 13;
    const today = new Date();
    const dateOfBirth = dayjs(value).toDate();

    const dobYear = dateOfBirth.getFullYear();
    const dobMonth = dateOfBirth.getMonth();
    const dobDay = dateOfBirth.getDate();

    const age = today.getFullYear() - dobYear;
    if (dateOfBirth.toString() === 'Invalid Date') return 'Enter valid date';
    if (dateOfBirth.getFullYear() < 1900) return 'Enter valid date';
    if (
      age < minAge ||
      (age === minAge && (today.getMonth() < dobMonth || (today.getMonth() === dobMonth && today.getDate() < dobDay)))
    ) {
      return 'Person must be at least 13 years old';
    }
    return true;
  },
};

export default dateOfBirthValidtion;
