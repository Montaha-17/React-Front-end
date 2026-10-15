type ButtonProps = {
  text: string;
  onClick: () => void;
  variant: "primary" | "secondary" | "danger";
  disabled?: boolean;
};

function Button({ text , onClick, variant, disabled }: ButtonProps) {
  const baseClasses = "px-6 py-2 rounded-lg font-medium shadow-lg cursor-pointer transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
 const variantClasses = {
  primary: "bg-primary text-white hover:bg-primary/90",
  secondary: "bg-secondary text-foreground hover:bg-secondary/70",
  danger: "bg-red-500 text-white enabled:hover:bg-red-600",
};

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}

export default Button;