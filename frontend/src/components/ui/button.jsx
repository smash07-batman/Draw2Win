// src/components/ui/button.js
export const Button = ({ children, onClick, size, style, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        size === "icon" ? "p-2" : "px-4 py-2"
      } rounded bg-blue-500 text-white ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
