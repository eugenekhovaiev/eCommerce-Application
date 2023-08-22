const emailValidation = {
  required: 'Required',
  validate: (value: string): boolean | string => {
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

export default emailValidation;
