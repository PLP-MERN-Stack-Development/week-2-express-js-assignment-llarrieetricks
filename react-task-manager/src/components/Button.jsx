export default function Button({ children, variant = "primary", ...props }) {
  const base = "px-4 py-2 rounded font-semibold transition";

  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-black",
    danger: "bg-red-500 hover:bg-red-600 text-white",
  };

  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
