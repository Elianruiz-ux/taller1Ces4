/* eslint-disable react/prop-types */
import style from "../Button/Button.module.css";

function Button({
  onClick,
  nombre,
  disabled = false,
  variant = "primary" | "cancel",
}) {
  return (
    <button
      className={`${style.button} ${
        variant === "primary" ? style.primary : style.cancel
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {nombre}
    </button>
  );
}

export default Button;
