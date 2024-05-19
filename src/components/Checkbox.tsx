const Checkbox = ({ onClick, checked }) => {
    return (
        <div onClick={onClick} className="p-[2px] w-fit h-fit border border-solid border-[#808080]">
            <div className={`w-3 h-3 ${checked ? "bg-[#FB953E]" : "bg-white" }`}></div>
        </div>
    );
  };
  
  export default Checkbox;
  