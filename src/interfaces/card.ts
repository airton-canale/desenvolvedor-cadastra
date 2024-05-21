interface CardProps extends Product {}

interface Product {
  id: any;
  image: string;
  name: string;
  parcelamento: [number, number];
  price: number;
  onClick: () => void;
  color?: string;
  size: string[];
  date: string;
}

