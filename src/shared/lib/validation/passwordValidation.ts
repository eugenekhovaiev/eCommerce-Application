export const passwordValidation = {
  required: 'Required',
  validate: (value: string) => {
    if (value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-#!$@%^&*_+~=:;?/])[-\w#!$@%^&*+~=:;?/]{8,}$/)) {
      return true;
    }
    return 'Enter valid password';
  },
};
