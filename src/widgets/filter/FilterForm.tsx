import { useForm, SubmitHandler } from 'react-hook-form';
import { useState, useEffect } from 'react';
import AccordionCheckbox from '../../entities/accordion/AccordionCheckbox';
import AccordionSlider from '../../entities/accordion/AccordionSlider';
import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';
import FILTER_SIZE from '../../shared/consts/FILTER_SIZE';
import FILTER_COLOR from '../../shared/consts/FILTER_COLOR';
import FILTER_SORT from '../../shared/consts/FILTER_SORT';
import getProducts from '../../shared/api/user/getProducts';
import { useFilterContext } from '../../shared/lib/contexts/FilterContext';
import cartesianProduct from '../../shared/lib/helpers/cartesianProduct';
import { FilterAttribute, FilterFormFields, FilterFormProps } from '../../shared/types';
import Typography from '@mui/material/Typography/Typography';

const transformToFilterAttributes = (enumName: string, values: string[], state: boolean[]): FilterAttribute[] => {
  return values
    .map((item, ind) => (state[ind] ? item : false))
    .filter((item) => item)
    .map((item) => ({
      enumName,
      value: item || '',
    }));
};

const transformToFilterSortBy = (values: string[], state: boolean[]): ({ by: string; order: string } | undefined)[] => {
  return values
    .map((item, ind) => (state[ind] ? item : false))
    .filter((item) => item)
    .map((item) => {
      if (item) {
        if (item.indexOf('Asc') !== -1) {
          return {
            by: item.replace('Asc', ''),
            order: 'asc',
          };
        }
        return {
          by: item.replace('Desc', ''),
          order: 'desc',
        };
      }
      return undefined;
    });
};

const FilterForm = (props: FilterFormProps): JSX.Element => {
  const priceRange = [0, 1000];
  const [colorStates, setColorStates] = useState(Object.values(FILTER_COLOR).map(() => false));
  const [sizeStates, setSizeStates] = useState(Object.values(FILTER_SIZE).map(() => false));
  const [sortStates, setSortStates] = useState(Object.values(FILTER_SORT).map(() => false));
  const [priceState, setPriceState] = useState<number[]>([priceRange[0], priceRange[1]]);
  const { handleSubmit } = useForm<FilterFormFields>();
  const { isCategoryUpdated, updateIsCategoryUpdated } = useFilterContext();

  useEffect(() => {
    if (isCategoryUpdated) {
      setColorStates(Object.values(FILTER_COLOR).map(() => false));
      setSizeStates(Object.values(FILTER_SIZE).map(() => false));
      setSortStates(Object.values(FILTER_SORT).map(() => false));
      setPriceState([priceRange[0], priceRange[1]]);
      updateIsCategoryUpdated(false);
    }
  }, [isCategoryUpdated]);

  const handleResetClick = async (): Promise<void> => {
    setColorStates(Object.values(FILTER_COLOR).map(() => false));
    setSizeStates(Object.values(FILTER_SIZE).map(() => false));
    setSortStates(Object.values(FILTER_SORT).map(() => false));
    setPriceState([priceRange[0], priceRange[1]]);
    const productsObj = await getProducts({
      filters: {
        categoriesIds: props.categoriesIds,
      },
    });
    updateIsCategoryUpdated(false);
    props.setProducts(productsObj.body.results);
  };

  const onSubmit: SubmitHandler<FilterFormFields> = async (): Promise<void> => {
    const colors = transformToFilterAttributes('color', Object.values(FILTER_COLOR), colorStates);
    const sizes = transformToFilterAttributes('size', Object.values(FILTER_SIZE), sizeStates);
    const sort = transformToFilterSortBy(Object.keys(FILTER_SORT), sortStates);
    const queryAttributes = cartesianProduct(sizes, colors);
    // console.log(cartesianProduct(result, sizes2).map((item) => item.flat()));

    try {
      if (queryAttributes.length === 0) {
        const productsObj = await getProducts({
          searchText: props.search || undefined,
          sort: sort[0],
          filters: {
            categoriesIds: props.categoriesIds,
            priceRange: { from: priceState[0] * 100, to: priceState[1] * 100 },
          },
        });
        props.setProducts(productsObj.body.results);
      } else {
        const promises = queryAttributes.map((item) =>
          getProducts({
            searchText: props.search || undefined,
            sort: sort[0],
            filters: {
              categoriesIds: props.categoriesIds,
              attributes: item,
              priceRange: { from: priceState[0] * 100, to: priceState[1] * 100 },
            },
          }),
        );
        const productsObj = await Promise.all(promises);
        props.setProducts(productsObj.map((item) => item.body.results).flat());
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="form filter-form" onSubmit={handleSubmit(onSubmit)}>
      <AccordionCheckbox
        label={<Typography>Sort by</Typography>}
        states={sortStates}
        setStates={setSortStates}
        selectItems={FILTER_SORT}
        additionalClassName="filter-form__item"
        multiple={false}
      />
      <AccordionCheckbox
        label={<Typography>Color</Typography>}
        states={colorStates}
        setStates={setColorStates}
        selectItems={FILTER_COLOR}
        additionalClassName="filter-form__item"
        multiple={false}
      />
      <AccordionCheckbox
        label={<Typography>Size</Typography>}
        states={sizeStates}
        setStates={setSizeStates}
        selectItems={FILTER_SIZE}
        additionalClassName="filter-form__item"
        multiple={false}
      />
      <AccordionSlider
        label="Price"
        min={priceRange[0]}
        max={priceRange[1]}
        state={priceState}
        setState={setPriceState}
        additionalClassName="filter-form__item"
      />
      <ButtonElement type="submit" additionalClassName="form__submit filter-form__submit" title="Apply" />
      <ButtonElement
        type="button"
        additionalClassName="form__submit filter-form__submit"
        title="Reset"
        onClick={handleResetClick}
      />
    </form>
  );
};

export default FilterForm;
