import { IValidationRealTime } from '../../types';

const validateRealTime = (value: string, inputValidation: (value: string) => string | boolean): IValidationRealTime => {
  const validationAnswer: IValidationRealTime = {
    isValid: inputValidation(value) !== true ? false : true,
    message: inputValidation(value) !== true ? inputValidation(value).toString() : '',
  };
  return validationAnswer;
};

export default validateRealTime;
