const postCodeValidation = (postalCode: string, country: string | undefined): string | boolean => {
  switch (country) {
    case 'US':
      if (postalCode.match(/^([0-9]{5})(?:-([0-9]{4}))?$/i)) {
        return true;
      }
      return 'US ZIP code should contain only digits and be in the format XXXXX or XXXXX-XXXX.';
    case 'PL':
      if (postalCode.match(/^\d{2}-\d{3}$/i)) {
        return true;
      }
      return 'Polish postal code should contain only digits and be in the format XX-XXX.';
    case 'UA':
      if (postalCode.match(/^\d{5}$/i)) {
        return true;
      }
      return 'Ukrainian postal code should be a 5-digit number.';
  }
  return 'Please select a country';
};

export default postCodeValidation;
