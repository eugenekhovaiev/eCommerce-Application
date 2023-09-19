import { useForm, SubmitHandler } from 'react-hook-form';
import { useState, useEffect } from 'react';
import AccordionCheckbox from '../../entities/accordion/AccordionCheckbox';
import AccordionSlider from '../../entities/accordion/AccordionSlider';
import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';
import FILTER_NECK_PAD from '../../shared/consts/FILTER_NECK_PAD';
import FILTER_BREED_SIZE from '../../shared/consts/FILTER_BREED_SIZE';
import FILTER_SORT from '../../shared/consts/FILTER_SORT';
import getProducts from '../../shared/api/user/getProducts';
import { useFilterContext } from '../../shared/lib/contexts/FilterContext';
import cartesianProduct from '../../shared/lib/helpers/cartesianProduct';
import { FilterAttribute, FilterFormFields, FilterFormProps } from '../../shared/types';
import Typography from '@mui/material/Typography/Typography';
import { useProductsArrayContext } from '../../shared/lib/contexts/ProductsArrayContext';

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
  const { updateProductsArray } = useProductsArrayContext();

  const priceRange = [0, 30];
  const [neckPadStates, setNeckPadStates] = useState(Object.values(FILTER_NECK_PAD).map(() => false));
  const [breedSizeStates, setBreedSizeStates] = useState(Object.values(FILTER_BREED_SIZE).map(() => false));
  const [sortStates, setSortStates] = useState(Object.values(FILTER_SORT).map(() => false));
  const [priceState, setPriceState] = useState<number[]>([priceRange[0], priceRange[1]]);
  const { handleSubmit } = useForm<FilterFormFields>();
  const { isCategoryUpdated, updateIsCategoryUpdated } = useFilterContext();

  useEffect(() => {
    if (isCategoryUpdated) {
      setNeckPadStates(Object.values(FILTER_NECK_PAD).map(() => false));
      setBreedSizeStates(Object.values(FILTER_BREED_SIZE).map(() => false));
      setSortStates(Object.values(FILTER_SORT).map(() => false));
      setPriceState([priceRange[0], priceRange[1]]);
      updateIsCategoryUpdated(false);
    }
  }, [isCategoryUpdated]);

  const handleResetClick = async (): Promise<void> => {
    setNeckPadStates(Object.values(FILTER_NECK_PAD).map(() => false));
    setBreedSizeStates(Object.values(FILTER_BREED_SIZE).map(() => false));
    setSortStates(Object.values(FILTER_SORT).map(() => false));
    setPriceState([priceRange[0], priceRange[1]]);
    const productsObj = await getProducts({
      searchText: props.search || undefined,
      filters: {
        categoriesIds: props.categoriesIds,
      },
    });
    updateIsCategoryUpdated(false);
    updateProductsArray(productsObj.body.results);
  };

  const onSubmit: SubmitHandler<FilterFormFields> = async (): Promise<void> => {
    const breedSize = transformToFilterAttributes('dog-breed-size', Object.values(FILTER_BREED_SIZE), breedSizeStates);
    const neckPad = transformToFilterAttributes('neck-pad', Object.values(FILTER_NECK_PAD), neckPadStates);
    const sort = transformToFilterSortBy(Object.keys(FILTER_SORT), sortStates);
    const queryAttributes = cartesianProduct(breedSize, neckPad);

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
        updateProductsArray(productsObj.body.results);
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
        updateProductsArray(productsObj.map((item) => item.body.results).flat());
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
        label={<Typography>Braided neck pad</Typography>}
        states={neckPadStates}
        setStates={setNeckPadStates}
        selectItems={FILTER_NECK_PAD}
        additionalClassName="filter-form__item"
        multiple={false}
      />
      <AccordionCheckbox
        label={<Typography>Breed size</Typography>}
        states={breedSizeStates}
        setStates={setBreedSizeStates}
        selectItems={FILTER_BREED_SIZE}
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
