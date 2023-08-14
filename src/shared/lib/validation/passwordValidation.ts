export const passwordValidation = {
  required: 'Required',
  validate: (value: string): true | 'Enter valid password' => {
    if (value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-#!$@%^&*_+~=:;?/])[-\w#!$@%^&*+~=:;?/]{8,}$/)) {
      return true;
    }
    return 'Enter valid password';
  },
};
