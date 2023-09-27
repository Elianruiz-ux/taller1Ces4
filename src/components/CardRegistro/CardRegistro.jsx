/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import style from "../CardRegistro/CardRegistro.module.css";
import Input from "../Input/Input";
import { v4 as uuidv4 } from "uuid";

function CardRegistro({
  onAgregarMovimiento,
  setPopupMessage,
  setShowSuccessPopup,
  setShowErrorPopup,
  saldoFinal,
  editar,
  setEditar,
  listado,
  setMovimientos,
}) {
  const [tipoMovimiento, setTipoMovimiento] = useState("");
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");

  useEffect(() => {
    if (editar) {
      setTipoMovimiento(editar.tipoMovimiento);
      setNombre(editar.nombre);
      setCantidad(editar.cantidad);
    } else {
      handleCancelar();
    }
  }, [editar]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      nombre.trim() === "" ||
      isNaN(cantidad) ||
      cantidad <= 0 ||
      tipoMovimiento === ""
    ) {
      setShowErrorPopup(true);
      setPopupMessage("Por favor, completa el formulario correctamente.");
      return;
    }

    if (tipoMovimiento === "Gasto" && cantidad > saldoFinal) {
      setShowErrorPopup(true);
      setPopupMessage("No tienes suficiente saldo para este gasto.");
      return;
    }

    const id = uuidv4();

    const movimiento = {
      id,
      tipoMovimiento,
      nombre,
      cantidad: parseFloat(cantidad),
    };

    setShowSuccessPopup(true);
    setPopupMessage(`El ${tipoMovimiento} fue agregado con exitoso`);
    onAgregarMovimiento(movimiento);

    handleCancelar();
  };

  const handleCancelar = () => {
    setTipoMovimiento("");
    setNombre("");
    setCantidad("");
    setEditar("");
  };

  const handleClickGuardar = () => {
    if (
      nombre.trim() === "" ||
      isNaN(cantidad) ||
      cantidad <= 0 ||
      tipoMovimiento === ""
    ) {
      setShowErrorPopup(true);
      setPopupMessage("Por favor, completa el formulario correctamente.");
      return;
    }

    if (tipoMovimiento === "Gasto" && cantidad > saldoFinal) {
      setShowErrorPopup(true);
      setPopupMessage("No tienes suficiente saldo para este gasto.");
      return;
    }

    const editRow = (todo) => {
      const newLista = listado?.map((item) =>
        item.id === todo.id
          ? {
              ...item,
              nombre: nombre,
              tipoMovimiento: tipoMovimiento,
              cantidad: parseFloat(cantidad),
            }
          : item
      );
      setMovimientos(newLista);
      handleCancelar();
    };

    editRow(editar);
  };

  return (
    <div className={`${style.divRegistro}`}>
      <div className={`${style.containerTitulo}`}>
        <h4>{editar ? "Editar" : "Registro"}</h4>
      </div>
      <div className={`${style.containerForm}`}>
        <div className={`${style.containerSelect}`}>
          <label htmlFor="select">Tipo Movimiento</label>
          <select
            value={tipoMovimiento}
            onChange={(e) => setTipoMovimiento(e.target.value)}
            id="select"
          >
            <option defaultValue="">--Seleccione--</option>
            <option value="Ingreso">Ingreso</option>
            <option value="Gasto">Gasto</option>
          </select>
        </div>
        <div className={`${style.containerInput}`}>
          <Input
            type={"text"}
            idInput={"idnombre"}
            labelName={"Nombre"}
            variant={"forms"}
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className={`${style.containerInput}`}>
          <Input
            type={"number"}
            idInput={"idcantidad"}
            labelName={"Cantidad"}
            variant={"forms"}
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
        </div>
        <div className={`${style.containerButton}`}>
          <Button
            nombre={"cancelar"}
            variant={"cancelar"}
            onClick={handleCancelar}
          />
          <Button
            nombre={editar ? "Guardar edicion" : "agregar movimiento"}
            variant={"primary"}
            onClick={editar ? handleClickGuardar : handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default CardRegistro;
