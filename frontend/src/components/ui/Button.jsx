const baseStyles = "inline-flex items-center justify-center font-medium rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";

const variants = {
    primary: "bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-500",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
};

const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-base",
    lg: "px-6 py-4 text-lg",
};

const disabledStyles = "bg-gray-300 text-gray-500 cursor-not-allowed hover:bg-gray-300";

export default function Button({
  children,
  name,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  className = "",
  ...props
}) {
    return (
        <button
        name={name}
        disabled={disabled || loading}
        className={`
            ${baseStyles}
            ${sizes[size]}
            ${disabled || loading ? disabledStyles : variants[variant]}
            ${className}
        `}
        {...props}
        >
        {loading ? "Loading..." : children}
        </button>
    )
}