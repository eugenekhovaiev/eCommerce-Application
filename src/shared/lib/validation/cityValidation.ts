const cityValidation = {
  required: 'Required',
  validate: (value: string): boolean | string => {
    if (value.match(/^[^\d!@#$%^&*()_+=[\]{};':"\\|,.<>/?]+$/iu)) {
      return true;
    }
    return 'City should not contain any digits or special characters: !@#$%^&*()_+=[]{};:\'"\\|,.<>/?';
  },
};

export default cityValidation;