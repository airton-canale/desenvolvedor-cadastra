const Checkbox = ({ onClick, checked }) => {
  return (
      <div onClick={onClick} className="p-[2px] w-fit h-fit border border-solid border-[#808080]">
          <div className={`w-3 h-3 ${checked ? "bg-cadastra-orange" : "bg-white" }`}></div>
      </div>
  );
};

const CheckboxWithLabel = ({ onClick, checked, label }) => {
    return (
        <div className="flex gap-4 cursor-pointer items-center" onClick={onClick}>
            <Checkbox
              checked={checked}
            />
            <span>{label}</span>
          </div>
    )
}
export default CheckboxWithLabel    