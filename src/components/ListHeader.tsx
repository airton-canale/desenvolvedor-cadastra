import Select, { Options } from "react-select";
import Button from "./Button";
import { priceOptions } from "@/reusable/options";
import {  customStyles  } from "@/reusable/selectStyle";


const ListHeader: React.FC<ListHeaderProps> = ({ onChange, selectedOrdering, onOrderClick, onFilterClick }) => {

  return (
    <>
    <div className="w-full lg:flex hidden justify-between py-8 px-28">
      <h1 className="text-2xl">Blusas</h1>
      <Select
        value={selectedOrdering}
        onChange={onChange as any}
        options={priceOptions as any}
        placeholder={priceOptions.find(opt => opt.value === selectedOrdering)?.label || <span>Ordenar por:</span>}
        styles={customStyles}
      />
    </div>
    <h1 className="text-2xl lg:hidden flex justify-center py-3 w-full">Blusas</h1>
    <div className="lg:hidden p-2 flex">
      <Button className={'w-1/2'} text={"Filtar"}  onClick={onFilterClick}  variant={"outline"} />
      <Button className={'w-1/2'} text={"Ordenar"}  onClick={onOrderClick}  variant={"outline"} />
    </div>
    </>
  );
};

export default ListHeader;
