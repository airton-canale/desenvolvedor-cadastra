import Button from "./Button";

const Card: React.FC<CardProps>  = ({ image, name, parcelamento, price, onClick }) => {
  return (
    <div className="flex flex-col items-center lg:max-w-[30%] min-w-20 ">
      <img src={image} alt="image" className="w-full"/>
      <h4>{name.toUpperCase()}</h4>
      <span className="font-bold text-black">R$ {price.toFixed(2).replace('.', ',')}</span>
      <span>até {parcelamento[0]}x de R${parcelamento[1].toFixed(2).replace('.', ',')}</span>
      <Button onClick={onClick} variant={'neutral'} text='COMPRAR' />
    </div>
  );
};

export default Card;
