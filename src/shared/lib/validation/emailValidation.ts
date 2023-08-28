const emailValidation = {
  required: 'Required',
  validate: (value: string): boolean | string => {
    if (
      value.match(
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
      )
    ) {
      return true;
    } else if (value === '') {
      return 'Required';
    } else if (value.includes(' ') === true) {
      return 'Email address must not contain whitespace';
    } else if (value.search(/@/) === -1) {
      return 'Email address must contain an "@" symbol';
    } else if (value.lastIndexOf('@') === value.length - 1) {
      return 'Email address must contain a domain name (e.g., example.com)';
    }
    return 'Enter valid email, e.g. user@example.com';
  },
};

export default emailValidation;
