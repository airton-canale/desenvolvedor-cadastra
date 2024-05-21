import { useMemo } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaCircleXmark } from "react-icons/fa6";



const CartProduct = ({ product, onRemove }) => {
    return (
      <div className="flex gap-2 relative">
        <img className="w-1/5" src={product.image} alt="product image" />
        <div className="flex flex-col">
            <span>{product.name}</span>
            <span>R$ {product.price.toFixed(2).replace('.', ',')}</span>
        </div>
        <div className="absolute right-3 top-1 cursor-pointer" onClick={onRemove}>
        <FaCircleXmark color="red" size={20} />
        </div>
      </div>
    );
  };

const ShoppingCart = ({ cartOpen, setCartOpen, selectedProducts, setCartProducts }) => {
    const total = useMemo(() => {
        return selectedProducts.reduce((red, curr) => {
            return red + curr.price
        }, 0)
    }, [selectedProducts])
  return (
    <div
      className={`flex ${
        cartOpen ? "lg:relative lg:w-1/3" : "lg:hidden"
      } fixed w-screen flex-col gap-5 bg-white top-0 bottom-0 ${
        cartOpen ? "right-0" : "-right-full"
      } transition-all duration-200`}
    >
        <div className="flex justify-between items-center p-6 border-b-2 border-cadastra-gray">
                <span className="text-2xl text-cadastra-gray-dark">CARRINHO</span>
                <button onClick={() => setCartOpen(false)}><AiOutlineClose className="text-2xl" /></button>
        </div>
      {selectedProducts.map((prod) => (
        <CartProduct product={prod} onRemove={() => setCartProducts((prev) => prev.filter((p) => p.id !== prod.id ) )} />
      ))}
      <span className="p-2 text-right font-bold" >Total: R$ {total.toFixed(2).replace('.', ',')}</span>
    </div>
  );
};
export default ShoppingCart;
