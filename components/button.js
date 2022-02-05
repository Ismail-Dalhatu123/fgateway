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
      style={{
        padding: padding * 3,
        borderRadius: border === "-full" ? 30 : 3,
      }}
      disabled={disabled || loading}
      className={`bg-indigo-500 text-gray-100 pj-${padding} w-${width} roundedf${border} tracking-wide
        font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
        shadow-lg ${className}`}
    >
      {loading ? "Loading..." : title}
    </button>
  );
}
