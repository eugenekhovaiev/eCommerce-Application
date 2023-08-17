const streetValidation = {
  required: 'Required',
  validate: (value: string): boolean | string => {
    if (value.trim().match(/.+/i)) {
      // if (value.trim().match(/^[#.0-9a-zA-Z\s,-]+$/i)) {
      return true;
    }
    return 'Street address must contain at least one character';
  },
};

export default streetValidation;
