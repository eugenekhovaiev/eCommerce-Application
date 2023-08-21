const postCodeValidation = {
  required: 'Required',
  validate: (value: string): boolean | string => {
    if (value.match(/^[0-9]{5}$/i)) {
      return true;
    }
    return 'Postal/Zip code should contain only 5 digits';
  },
};

export default postCodeValidation;
