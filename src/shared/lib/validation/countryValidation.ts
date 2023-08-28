const countryValidation = {
  required: 'Required',
  validate: (value: string): boolean | string => {
    if (value === '') {
      return 'This field is required';
    }
    return true;
  },
};

export default countryValidation;
