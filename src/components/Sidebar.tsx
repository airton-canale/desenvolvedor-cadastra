import { useMemo, useState } from "react";
import { AiOutlineUp, AiOutlineDown, AiOutlineClose } from "react-icons/ai";
import CheckboxGroup from "./CheckboxGroup";
import SizeSelect from "./SizeSelect"
import { priceRangeOptions } from "@/reusable/options";

const Sidebar = ({ products, onFilter, filters, filterOpen, closeFilter }) => {
  const [seeMore, setSeeMore] = useState(false);
  const colors = useMemo(
    () => [...new Set(products.map(({ color }) => color))].map((color) => ({
      label: color, value: color
    })),
    [products]
  );

  const sizes = useMemo(
    () => [...new Set(products.flatMap(({ size }) => size))],
    [products]
  );

  return (
    <div
      className={"lg:flex lg:relative hidden w-fit flex-col gap-5 p-8 bg-white"}
    >
      <div className="flex flex-col gap-4">
        <h4 className="text-lg">CORES</h4>
          <CheckboxGroup
           options={colors.slice(0, !seeMore ? 5 : 999)}
           value={filters.color}
           onChange={(value) => onFilter("color", value)}
          />
        <div
          onClick={() => {
            setSeeMore((prev) => !prev);
          }}
          className="flex gap-3 items-center underline"
        >
          <span className="text-[#808080] cursor-pointer flex items-center gap-1">
            {!seeMore ? "Ver todas as cores" : "Ver cores principais"}
            {!seeMore ? (
              <AiOutlineDown className="mt-1" />
            ) : (
              <AiOutlineUp className="mt-1" />
            )}
          </span>
        </div>
        <button className="absolute top-8 right-8 block lg:hidden" onClick={closeFilter}><AiOutlineClose /></button>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <h4 className="text-lg">TAMANHOS</h4>
        <SizeSelect sizes={sizes} selectedSize={filters.size} onFilter={onFilter}  />

        <h4 className="text-lg">FAIXA DE PREÇO</h4>
          <CheckboxGroup
            options={priceRangeOptions}
            value={filters.price}
            onChange={(value) => onFilter("price", value)}
          />
      </div>
    </div>
  );
};
export default Sidebar;
