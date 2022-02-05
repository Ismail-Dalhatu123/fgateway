export default function Input({
  className = "",
  containerClassName = "",
  label,
  ...props
}) {
  return (
    <div className={containerClassName}>
      <div className="text-sm font-bold text-gray-700 tracking-wide">
        {label}
      </div>
      <input
        {...props}
        className={`w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 ${className}`}
      />
    </div>
  );
}
