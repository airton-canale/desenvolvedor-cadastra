interface ButtonProps {
    text: string;
    onClick: () => void;
    variant: string;
    className?: string
  }

interface VariantClasses {
    neutral: string;
    outline: string;
    primary: string
}