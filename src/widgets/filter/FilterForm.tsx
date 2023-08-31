// import { useForm, useFormState, SubmitHandler } from 'react-hook-form';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import AccordionCheckbox from '../../entities/accordion/AccordionCheckbox';
import AccordionSlider from '../../entities/accordion/AccordionSlider';
import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';
// import CheckboxElement from '../../shared/UI/checkboxElement/CheckboxElement';
import COUNTRY_CODE from '../../shared/consts/COUNTRY_CODE';
import FILTER_COLOR from '../../shared/consts/FILTER_COLOR';
import { FilterFormFields } from '../../shared/types';
import Typography from '@mui/material/Typography/Typography';

const FilterForm = (): JSX.Element => {
  const [countryStates, setCountryStates] = useState(Object.values(COUNTRY_CODE).map(() => false));
  const [colorStates, setColorStates] = useState(Object.values(FILTER_COLOR).map(() => false));
  const [priceState, setPriceState] = useState<number[]>([0, 100]);
  // const [colorCategory, setColorCategory] = useState(false);
  const { handleSubmit } = useForm<FilterFormFields>();

  // const handleClick = (): void => setColorCategory(!colorCategory);
  const onSubmit: SubmitHandler<FilterFormFields> = (data): void => {
    console.log(data);
    console.log('countryStates');
    console.log(countryStates);
    console.log('colorStates');
    console.log(colorStates);
    console.log('price');
    console.log('min: ', priceState[0], 'max: ', priceState[1]);
  };

  return (
    <form className="form filter-form" onSubmit={handleSubmit(onSubmit)}>
      <AccordionCheckbox
        label={<Typography>Country</Typography>}
        states={countryStates}
        setStates={setCountryStates}
        selectItems={COUNTRY_CODE}
        additionalClassName="filter-form__item"
      />
      <AccordionCheckbox
        label={
          <Typography>Color</Typography>
          // <div className="form__checkbox">
          //   <CheckboxElement checked={colorCategory} onChange={handleClick} />
          //   <div>{'Color'}</div>
          // </div>
        }
        states={colorStates}
        setStates={setColorStates}
        selectItems={FILTER_COLOR}
        additionalClassName="filter-form__item"
      />
      <AccordionSlider
        label="Price"
        min={0}
        max={100}
        state={priceState}
        setState={setPriceState}
        additionalClassName="filter-form__item"
      />
      <ButtonElement type="submit" additionalClassName="form__submit filter-form__submit" title="Apply" />
    </form>
  );
};

export default FilterForm;
