import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const DropdownMenu: React.FC<DropdownMenuProps> = ({ content, title }) => {
    const [tabOpen, setTabOpen] = useState(false);
    return (
      <>
        <div className="flex justify-between items center text-[#808080] text-2xl py-2"  onClick={() => {
                setTabOpen((prev) => !prev);
              }}>
          <h4>{title}</h4>
          {tabOpen ? (
            <AiOutlineUp
              className="mt-1"
            />
          ) : (
            <AiOutlineDown
              className="mt-1"
            />
          )}
        </div>
        {tabOpen && <div>{content}</div>}
      </>
    );
  };
  export default DropdownMenu