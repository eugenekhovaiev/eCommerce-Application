import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';
import getProducts from '../../shared/api/user/products/getProducts';
import TextFieldElement from '../../shared/UI/textFieldElement/TextFieldElement';
import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';
import getFullClassName from '../../shared/lib/helpers/getFullClassName';
import { SearchInputProps } from '../../shared/types';
import { useFilterContext } from '../../shared/lib/contexts/FilterContext';
import { useProductsArrayContext } from '../../shared/lib/contexts/ProductsArrayContext';
import { useLastQueryParametersContext } from '../../shared/lib/contexts/LastQueryParametersContext';

const SearchInput = (props: SearchInputProps): JSX.Element => {
  const { updateProductsArray } = useProductsArrayContext();
  const { updateLastQueryParameters } = useLastQueryParametersContext();

  const fullClassName = getFullClassName('search-input', props.additionalClassName);
  const [search, setSearch] = useState('');
  const { isCategoryUpdated, updateIsCategoryUpdated } = useFilterContext();

  useEffect(() => {
    if (isCategoryUpdated) {
      setSearch('');
    }
  }, [isCategoryUpdated]);

  const handleEnterKey = async (event: React.KeyboardEvent<HTMLDivElement>): Promise<void> => {
    if (event.key === 'Enter') {
      const newQueryParams = {
        searchText: search,
      };
      const productsObj = await getProducts(newQueryParams);
      updateLastQueryParameters(newQueryParams);
      if (props.setSearch) props.setSearch(search);
      if (props.setCategoryId) props.setCategoryId('');
      if (updateProductsArray) updateProductsArray(productsObj.body.results);
      updateIsCategoryUpdated(true);
      if (document.activeElement instanceof HTMLInputElement) document.activeElement.blur();
    }
  };

  const handleClick = async (): Promise<void> => {
    const newQueryParams = {
      searchText: search,
    };
    const productsObj = await getProducts(newQueryParams);
    updateLastQueryParameters(newQueryParams);
    if (props.setSearch) props.setSearch(search);
    if (props.setCategoryId) props.setCategoryId('');
    if (updateProductsArray) updateProductsArray(productsObj.body.results);
    updateIsCategoryUpdated(true);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const value = event.target.value;
    setSearch(value);
  };

  return (
    <div className={fullClassName}>
      <TextFieldElement
        variant="outlined"
        label="Search"
        value={search}
        onChange={handleSearchChange}
        onKeyDown={handleEnterKey}
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        }
      />
      <ButtonElement additionalClassName="search-button" type="button" title="Go" onClick={handleClick} />
    </div>
  );
};

export default SearchInput;
