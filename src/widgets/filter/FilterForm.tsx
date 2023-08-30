// import { useForm, useFormState, SubmitHandler } from 'react-hook-form';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import AccordionCheckbox from '../../entities/accordion/AccordionCheckbox';
import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';
import COUNTRY_CODE from '../../shared/consts/COUNTRY_CODE';
import FILTER_COLOR from '../../shared/consts/FILTER_COLOR';
import { FilterFormFields } from '../../shared/types';

const FilterForm = (): JSX.Element => {
  const [countryStates, setCountryStates] = useState(Object.values(COUNTRY_CODE).map(() => false));
  const [colorStates, setColorStates] = useState(Object.values(FILTER_COLOR).map(() => false));
  const { handleSubmit } = useForm<FilterFormFields>();

  const onSubmit: SubmitHandler<FilterFormFields> = (data): void => {
    console.log(data);
    console.log('countryStates');
    console.log(countryStates);
    console.log('colorStates');
    console.log(colorStates);
  };

  return (
    <form className="form filter-form" onSubmit={handleSubmit(onSubmit)}>
      <AccordionCheckbox
        label={'Country'}
        states={countryStates}
        setStates={setCountryStates}
        selectItems={COUNTRY_CODE}
        additionalClassName="filter-form__item"
      />
      <AccordionCheckbox
        label={'Color'}
        states={colorStates}
        setStates={setColorStates}
        selectItems={FILTER_COLOR}
        additionalClassName="filter-form__item"
      />
      <ButtonElement type="submit" additionalClassName="form__submit filter-form__submit" title="Apply" />
    </form>
  );
};

export default FilterForm;
