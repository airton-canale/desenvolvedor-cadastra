import { PiHandbagSimpleFill } from "react-icons/pi";

const Header = ({ cartProducts, onCartClick }) => {

  return (
    <div className="p-3 w-full border-b-2 border-cadastra-gray flex justify-between lg:px-28 px-6 items-center">
      <img src="/img/company-logo.png" alt="company logo" />
      <div className="relative cursor-pointer" onClick={onCartClick} >
        <PiHandbagSimpleFill size={20} />
        {cartProducts.length !== 0 && 
        <div className="absolute flex items-center justify-center bg-cadastra-orange rounded-full w-3 h-3 p-2 -right-1 top-2">
          <span className="text-xs text-white">{cartProducts.length}</span>
        </div>
        }
      </div>
    </div>
  );
};

export default Header;
