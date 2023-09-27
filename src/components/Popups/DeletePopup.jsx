/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import style from "../Popups/Popups.module.css";

function DeletePopup({
  idItem,
  onClose,
  setListadoMovimientos,
  listadoMovimientos,
  setEditar,
  contar,
  setContar,
}) {
  const handleEliminarClick = () => {
    const nuevosMovimientos = listadoMovimientos.filter(
      (movimiento) => movimiento.id !== idItem
    );
    setListadoMovimientos(nuevosMovimientos);
    setEditar("");
    setContar(contar + 1);
    onClose();
  };

  return (
    <div className={`${style.divPopup}`}>
      <div>
        <h3>Eliminar</h3>
        <p>¿Seguro que quiere eliminar este movimiento?</p>
        <Button
          nombre={"Eliminar"}
          variant={"primary"}
          onClick={handleEliminarClick}
        />
        <Button nombre={"cerrar"} variant={"cancelar"} onClick={onClose} />
      </div>
    </div>
  );
}

export default DeletePopup;
