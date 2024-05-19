import { useMemo, useState } from "react";
import Checkbox from "./Checkbox";

const Sidebar = ({ products, onFilter, filters }) => {
  const [seeMore, setSeeMore] = useState(false);
  const colors = useMemo(
    () => [...new Set(products.map(({ color }) => color))],
    [products]
  );

  const sizes = useMemo(
    () => [...new Set(products.flatMap(({ size }) => size))],
    [products]
  );

  console.log("colors: ", colors, products);
  console.log("sizes: ", sizes);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4">
        <h4>CORES</h4>
        {colors.slice(0, !seeMore ? 5 : 999).map((color) => (
          <div className="flex gap-4 cursor-pointer" onClick={() => onFilter("color", color)}          >
            <Checkbox
              checked={filters.color === color}
            />
            <span>{color}</span>
          </div>
        ))}
        <div
          onClick={() => {
            setSeeMore((prev) => !prev);
          }}
          className="flex gap-3 items-center underline"
        >
          <span className="text-[#808080] cursor-pointer">
            {" "}
            {!seeMore ? "Ver todas as cores" : "Ver cores principais"}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <span>TAMANHOS</span>
        <div className="flex flex-wrap w-full gap-2">
          {sizes.map((size) => (
            <div onClick={() => onFilter('size', size)} className={`w-1/5 aspect-square border border-solid ${filters.size === size ? 'border-[#FB953E]' : 'border-[#808080]'} flex justify-center items-center cursor-pointer`}>
              {size}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
