export default function Button({
  title,
  loading,
  disabled,
  className = "",
  width = "full",
  border = "-full",
  padding = 4,
  ...props
}) {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`bg-indigo-500 text-gray-100 p-${padding} w-${width} rounded${border} tracking-wide
        font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
        shadow-lg ${className}`}
    >
      {loading ? "Loading..." : title}
    </button>
  );
}
