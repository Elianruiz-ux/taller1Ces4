/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import style from "../CardRegistro/CardRegistro.module.css";
import Input from "../Input/Input";

function CardRegistro() {
  return (
    <div className={`${style.divRegistro}`}>
      <div className={`${style.containerTitulo}`}>
        <h4>Registro</h4>
      </div>
      <div className={`${style.containerForm}`}>
        <div className={`${style.containerSelect}`}>
          <label htmlFor="select">Tipo Movimiento</label>
          <select name="" id="select">
            <option value="ingreso">Ingreso</option>
            <option value="gasto">Gasto</option>
          </select>
        </div>
        <div className={`${style.containerInput}`}>
          <Input
            type={"text"}
            idInput={"idnombre"}
            labelName={"Nombre"}
            variant={"forms"}
          />
        </div>
        <div className={`${style.containerInput}`}>
          <Input
            type={"number"}
            idInput={"idcantidad"}
            labelName={"Cantidad"}
            variant={"forms"}
          />
        </div>
        <div className={`${style.containerButton}`}>
          <Button nombre={"cancelar"} variant={"cancelar"} />
          <Button nombre={"agregar movimiento"} variant={"primary"} />
        </div>
      </div>
    </div>
  );
}

export default CardRegistro;
