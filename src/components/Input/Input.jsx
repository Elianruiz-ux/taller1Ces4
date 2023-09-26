/* eslint-disable react/prop-types */
import style from "../Input/Input.module.css";

function Input({
  type,
  labelName,
  disabled = false,
  value,
  onChange,
  idInput,
  variant = "navbar" | "forms",
}) {
  return (
    <div
      className={`${style.inputDiv}  ${
        variant === "navbar" ? style.inputnavbar : style.inputforms
      }`}
    >
      <label htmlFor={idInput}>{labelName}</label>
      <input
        type={type}
        disabled={disabled}
        value={value}
        onChange={onChange}
        id={idInput}
      />
    </div>
  );
}

export default Input;
