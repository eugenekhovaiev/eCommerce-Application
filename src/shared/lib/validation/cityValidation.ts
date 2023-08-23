const cityValidation = {
  required: 'Required',
  validate: (value: string): boolean | string => {
    if (value.match(/^[^\d!@#$%^&*()_+=[\]{};':"\\|,.<>/?]+$/iu)) {
      return true;
    } else if (value === '') {
      return 'Required';
    }
    return 'City should not contain any digits or special characters.';
  },
};

export default cityValidation;
