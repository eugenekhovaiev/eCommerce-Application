const nameValidation = {
  required: 'Required',
  validate: (value: string): boolean | string => {
    if (value.match(/^[a-zA-Zа-яА-Я'-]+$/i)) {
      return true;
    }
    return 'Name should contain only letters (Latin/Cyrillic), apostrophes, and hyphens.';
  },
};

export default nameValidation;
