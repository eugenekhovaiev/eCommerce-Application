import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';
import getProducts from '../../shared/api/user/getProducts';
import TextFieldElement from '../../shared/UI/textFieldElement/TextFieldElement';
import getFullClassName from '../../shared/lib/helpers/getFullClassName';
import { SearchInputProps } from '../../shared/types';

const SearchInput = (props: SearchInputProps): JSX.Element => {
  const fullClassName = getFullClassName('search-input', props.additionalClassName);
  const [search, setSearch] = useState('');

  const handleEnterKey = async (event: React.KeyboardEvent<HTMLDivElement>): Promise<void> => {
    if (event.key === 'Enter') {
      const newQueryParams = {
        searchText: search,
      };
      const productsObj = await getProducts(newQueryParams);
      if (props.setCategoryId) props.setCategoryId('');
      if (props.setProducts) props.setProducts(productsObj.body.results);
    }
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
    </div>
  );
};

export default SearchInput;
