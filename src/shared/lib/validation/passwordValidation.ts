const passwordValidation = {
  required: 'Required',
  validate: (value: string): boolean | string => {
    if (value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-#!$@%^&*_+~=:;?/])[-\w#!$@%^&*+~=:;?/]{8,}$/)) {
      return true;
    } else if (value.length < 8) {
      return 'Password must be at least 8 characters long';
    } else if (value.search(/[A-Z]{1,}/) === -1) {
      return 'Password must contain at least one uppercase letter (A-Z)';
    } else if (value.search(/[a-z]{1,}/) === -1) {
      return 'Password must contain at least one lowercase letter (a-z)';
    } else if (value.search(/[0-9]{1,}/) === -1) {
      return 'Password must contain at least one digit (0-9)';
    } else if (value.search(/[\W_]{1,}/) === -1) {
      return 'Password must contain at least one special character (e.g., !@#$%^&*)';
    }
    return 'Enter valid password';
  },
};

export default passwordValidation;
