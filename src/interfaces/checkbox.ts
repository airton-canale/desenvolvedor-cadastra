interface PriceOptions {
  label: string | undefined;
  value: string | undefined;
}

interface PriceRangeOptions {
  label: string | undefined;
  value: number | undefined;
}

interface CheckboxProps {
  onClick?: () => void;
  checked: boolean;
}

interface CheckboxWithLabelProps {
  onClick: () => void;
  checked: boolean;
  label: string | undefined;
}

interface CheckboxGroupProps {
  options: PriceOptions[] | PriceRangeOptions[] ;
  value: string | undefined | number;
  onChange: (val: string | number | undefined | null) => void;
}
