const unitValidation = {
  validate: (value: string): boolean | string => {
    if (value) {
      if (value.match(/^[a-zA-Zа-яА-Я0-9\-/._#]+$/i)) {
        return true;
      }

      return 'Invalid unit number. It should not contain special characters.';
    }
    return true;
  },
};

export default unitValidation;
