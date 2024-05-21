const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant,
  className,
}) => {
  const variantClasses: VariantClasses = {
    neutral: "bg-black text-white",
    primary:
      "bg-cadastra-orange border-[1px] border-black text-white font-bold",
    outline: "bg-white text-[#666666] border-[1px] border-[#666666]",
  };
  return (
    <button
      onClick={onClick}
      className={`${
        variantClasses[variant as keyof typeof variantClasses]
      } p-2 w-full ${className || ""}`}
    >
      {text}
    </button>
  );
};

export default Button;
