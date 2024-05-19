const Card = ({ image, name, parcelamento, price, size }) => {
  return (
    <div className="flex flex-col items-center w-[30%]">
      <img src={image} alt="image" className="w-full"/>
      <h4>{name.toUpperCase()}</h4>
      <span className="font-bold text-black">R$ {price.toFixed(2).replace('.', ',')}</span>
      <span>até {parcelamento[0]}x de R${parcelamento[1].toFixed(2).replace('.', ',')}</span>
      <button className="bg-black font-bold text-white p-2 w-full">COMPRAR</button>
    </div>
  );
};

export default Card;
