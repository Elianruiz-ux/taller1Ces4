/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import style from "../Popups/Popups.module.css";

function SuccessPopup({ message, onClose }) {
  return (
    <div className={`${style.divPopup}`}>
      <div>
        <h3>Registro Exitoso</h3>
        <p>{message}</p>
        <Button nombre={"cerrar"} variant={"cancelar"} onClick={onClose} />
      </div>
    </div>
  );
}

export default SuccessPopup;
