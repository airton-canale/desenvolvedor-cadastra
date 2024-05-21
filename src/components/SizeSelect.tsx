const SizeSelect: React.FC<SizeSelectProps> = ({
  sizes,
  selectedSize,
  onFilter,
}) => (
  <div className="flex flex-wrap w-[80%] gap-2">
    {sizes.map((size) => (
      <div
        key={size}
        onClick={() => onFilter("size", size)}
        className={`w-1/5 aspect-square border border-solid ${
          selectedSize === size
            ? "border-[#FB953E] text-black "
            : "border-[#808080] text-[#808080]"
        } flex justify-center items-center cursor-pointer`}
      >
        {size}
      </div>
    ))}
  </div>
);

export default SizeSelect;
