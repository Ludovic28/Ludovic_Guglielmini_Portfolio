type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  const base = "px-4 py-2 rounded font-medium transition";
  const styles =
    variant === "primary"
      ? "bg-[var(--color-primary)] text-white hover:opacity-90"
      : "border border-gray-400 text-gray-700 hover:bg-gray-100";

  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
