export const emailValidation = {
  required: 'Required',
  validate: (value: string): true | 'Enter valid email' => {
    if (
      value.match(
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
      )
    ) {
      return true;
    }
    return 'Enter valid email';
  },
};
