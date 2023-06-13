import Select, { ActionMeta } from 'react-select';

import { customStyleSelect, DropdownContainer, LabelTitle } from 'components/Dropdown/styles';

function Dropdown({
  options,
  placeholder,
  noOptionsMessage = 'Sem opções',
  onSelect,
  label,
  value,
}: IDropdownProps) {
  const handleOnOptionClick = (newValue: unknown, actionMeta: ActionMeta<unknown>) => {
    onSelect && onSelect(newValue, actionMeta);
  };

  return (
    <DropdownContainer>
      {label && <LabelTitle data-testid="test-input-label">{label}</LabelTitle>}
      <Select
        name="ubs"
        options={options}
        placeholder={placeholder}
        styles={customStyleSelect}
        noOptionsMessage={() => noOptionsMessage}
        value={value ? { label: value, value } : undefined}
        onChange={handleOnOptionClick}
        isClearable
      />
    </DropdownContainer>
  );
}

export default Dropdown;
