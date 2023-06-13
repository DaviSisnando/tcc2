import { ChangeEvent } from 'react';
import { FaSearch } from 'react-icons/fa';
import debounce from 'lodash/debounce';

import { SearchInputContainer, SearchInputStyled } from 'components/SearchInput/styles';
import colors from 'styles/colors';

function SearchInput({ placeholder, onChange }: ISearchInputProps) {
  const debounceOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    return onChange && onChange(event);
  };

  return (
    <SearchInputContainer>
      <FaSearch color={colors.grey.lightDark} />
      <SearchInputStyled
        type="text"
        placeholder={placeholder}
        onChange={debounce(debounceOnChange, 200)}
      />
    </SearchInputContainer>
  );
}

export default SearchInput;
