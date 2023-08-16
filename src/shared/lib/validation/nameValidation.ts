const nameValidation = {
  required: 'Required',
  validate: (value: string): boolean | string => {
    if (value.match(/^[A-Za-z]+$/i)) {
      return true;
    }
    return 'Name should contain only Latin letters';
  },
};

export default nameValidation;
