interface IOption {
  label: string;
  value: string;
}

interface IDropdownProps {
  options: IOption[];
  placeholder: string;
  noOptionsMessage?: string;
  label?: string;
  onSelect?: (newValue: unknown, actionMeta: import('react-select').ActionMeta<unknown>) => void;
  value?: string;
}
