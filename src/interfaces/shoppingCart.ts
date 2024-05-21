interface ShoppingCartProps {
    cartOpen: boolean;
    setCartOpen: (value: boolean) => void;
    selectedProducts: CardProps[];
    setCartProducts: React.Dispatch<React.SetStateAction<CardProps[]>>;
}

interface CartProductProps {
    product: CardProps
    onRemove: () => void
}