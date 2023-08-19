const buildingValidation = {
  required: 'Required',
  validate: (value: string): boolean | string => {
    if (value.trim().match(/^[a-zA-Z0-9\s\-/._#]+$/i)) {
      return true;
    }

    return 'Invalid building number. Use letters, digits, spaces, hyphens, slashes, periods, underscores, or hash symbols.';
  },
};

export default buildingValidation;