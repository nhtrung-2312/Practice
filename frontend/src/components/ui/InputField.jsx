const baseStyles = "w-full rounded-md px-4 py-3 outline-none transition-all placeholder:text-gray-400";

const variants = {
    default: "border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500",
    error: "border border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500",
    success: "border border-green-500 focus:border-green-600 focus:ring-1 focus:ring-green-500",
};

const disabledStyles  = "border border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed select-none";

export default function InputField({ 
    type = "text", 
    placeholder, 
    variant = "default",
    disabled = false,
    className = "",
    ...props
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${disabled ? disabledStyles  : variants[variant]}
        ${className}
      `}
      {...props}
    />
  );
};