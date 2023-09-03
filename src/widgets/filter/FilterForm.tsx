import { useForm, SubmitHandler } from 'react-hook-form';
import { useState, useEffect } from 'react';
import AccordionCheckbox from '../../entities/accordion/AccordionCheckbox';
import AccordionSlider from '../../entities/accordion/AccordionSlider';
import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';
import FILTER_SIZE from '../../shared/consts/FILTER_SIZE';
import FILTER_COLOR from '../../shared/consts/FILTER_COLOR';
import getProducts from '../../shared/api/user/getProducts';
import { useFilterContext } from '../../shared/lib/contexts/FilterContext';
import { FilterAttribute, FilterFormFields, FilterFormProps } from '../../shared/types';
import Typography from '@mui/material/Typography/Typography';

function cartesianProduct<Type1, Type2>(array1: Type1[], array2: Type2[]): (Type1 | Type2)[][] {
  if (array1.length === 0) return [array2];
  if (array2.length === 0) return [array1];
  return array1.map((item1) => array2.map((item2) => [item1, item2])).flat();
}

const transformToFilterAttributes = (enumName: string, values: string[], state: boolean[]): FilterAttribute[] => {
  return values
    .map((item, ind) => (state[ind] ? item : false))
    .filter((item) => item)
    .map((item) => ({
      enumName,
      value: item || '',
    }));
};

const FilterForm = (props: FilterFormProps): JSX.Element => {
  const [colorStates, setColorStates] = useState(Object.values(FILTER_COLOR).map(() => false));
  const [sizeStates, setSizeStates] = useState(Object.values(FILTER_SIZE).map(() => false));
  const [priceState, setPriceState] = useState<number[]>([0, 100]);
  const { handleSubmit } = useForm<FilterFormFields>();
  const { isCategoryUpdated, updateIsCategoryUpdated } = useFilterContext();

  useEffect(() => {
    if (isCategoryUpdated) {
      setColorStates(Object.values(FILTER_COLOR).map(() => false));
      setSizeStates(Object.values(FILTER_SIZE).map(() => false));
      setPriceState([0, 100]);
      updateIsCategoryUpdated(false);
    }
  }, [isCategoryUpdated]);

  const onSubmit: SubmitHandler<FilterFormFields> = async (): Promise<void> => {
    const colors = transformToFilterAttributes('color', Object.values(FILTER_COLOR), colorStates);
    const sizes = transformToFilterAttributes('size', Object.values(FILTER_SIZE), sizeStates);
    const queryAttributes = cartesianProduct(sizes, colors);
    // console.log(cartesianProduct(result, sizes2).map((item) => item.flat()));
    try {
      const promises = queryAttributes.map((item) =>
        getProducts({
          filters: {
            categoriesIds: props.categoriesIds,
            attributes: item,
            priceRange: { from: priceState[0] * 100, to: priceState[1] * 100 },
          },
        }),
      );
      const productsObj = await Promise.all(promises);
      props.setProducts(productsObj.map((item) => item.body.results).flat());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="form filter-form" onSubmit={handleSubmit(onSubmit)}>
      <AccordionCheckbox
        label={<Typography>Color</Typography>}
        states={colorStates}
        setStates={setColorStates}
        selectItems={FILTER_COLOR}
        additionalClassName="filter-form__item"
      />
      <AccordionCheckbox
        label={<Typography>Size</Typography>}
        states={sizeStates}
        setStates={setSizeStates}
        selectItems={FILTER_SIZE}
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
