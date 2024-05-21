import CheckboxWithLabel from "./Checkbox";

const CheckboxGroup = ({options, value, onChange}) => {
  return (
    options.map((opt) => (
        <CheckboxWithLabel onClick={() => onChange(opt.value)} checked={opt.value === value} label={opt.label} />
    ))
  )
};
export default CheckboxGroup;
