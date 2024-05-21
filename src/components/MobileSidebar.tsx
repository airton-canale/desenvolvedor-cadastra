import { useMemo, useState } from "react";
import { AiOutlineClose, AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import CheckboxWithLabel from "./Checkbox";
import Button from "./Button";
import DropdownMenu from "./DropdownMenu";
import CheckboxGroup from "./CheckboxGroup";
import { priceRangeOptions } from "@/reusable/options";

const MobileSidebar = ({
  products,
  onFilter,
  filters,
  filterOpen,
  closeFilter,
}) => {
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
      className={`flex lg:hidden fixed w-screen flex-col gap-5 bg-white top-0 bottom-0 ${
        filterOpen ? "left-0" : "-left-full"
      } transition-all duration-200`}
    >
      <div className="flex justify-between items-center p-6 border-b-2 border-cadastra-gray ">
        <span className="text-2xl text-cadastra-gray-dark">FILTRAR</span>
        <button onClick={closeFilter}>
          <AiOutlineClose className="text-2xl" />
        </button>
      </div>
      <div className="px-4 flex flex-col gap-3 overflow-scroll">
        <DropdownMenu
          title={"CORES"}
          content={
            <CheckboxGroup
              options={colors}
              value={filters.color}
              onChange={(value) => onFilter("color", value)}
            />
          }
        />
        <DropdownMenu
          title={"TAMANHOS"}
          content={
            <>
              <div className={`flex-wrap w-[80%] gap-2 flex`}>
                {sizes.map((size) => (
                  <div
                    key={size}
                    onClick={() => onFilter("size", size)}
                    className={`max-w-[2.5rem] w-1/5 aspect-square border border-solid ${
                      filters.size === size
                        ? "border-[#FB953E] text-black "
                        : "border-[#808080] text-[#808080]"
                    } flex justify-center items-center cursor-pointer`}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </>
          }
        />
        <DropdownMenu
          title={"FAIXA DE PREÇO"}
          content={
            <>
              <div className={`flex-wrap w-[80%] gap-2 flex`}>
                <CheckboxGroup
                  options={priceRangeOptions}
                  value={filters.price}
                  onChange={(value) => onFilter("price", value)}
                />
              </div>
            </>
          }
        />
        <div className="w-full flex gap-2 pt-6">
          <Button
            text={"APLICAR"}
            onClick={closeFilter}
            variant={"primary"}
            className={"border-none"}
          />
          <Button
            text={"LIMPAR"}
            onClick={() => {
              onFilter("color", null);
              onFilter("size", null);
              onFilter("price", null);
              closeFilter();
            }}
            variant={"outline"}
            className={""}
          />
        </div>
      </div>
    </div>
  );
};
export default MobileSidebar;
