/* eslint-disable react/prop-types */
import style from "../CardListado/CardListado.module.css";
import { BiSolidPencil } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { convertirDecimal } from "../../Utils/Utils";

function CardListado({ listadoMovimientos, setShowDeletePopup }) {
  const cantidadMovimientos = listadoMovimientos.length;
  const [searchTerm, setSearchTerm] = useState("");
  const [filtroMovimiento, setFiltroMovimiento] = useState("Todos");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMovimientos = listadoMovimientos.filter((movimiento) => {
    const movimientoNombre = movimiento.nombre.toLowerCase();
    const movimientoTipo = movimiento.tipoMovimiento.toLowerCase();
    const movimientoCantidad = movimiento.cantidad.toString().toLowerCase();
    const searchTermLower = searchTerm.toLowerCase();

    const mostrarMovimiento =
      filtroMovimiento === "Todos" ||
      movimientoTipo === filtroMovimiento.toLowerCase();

    return (
      mostrarMovimiento &&
      (movimientoNombre.includes(searchTermLower) ||
        movimientoTipo.includes(searchTermLower) ||
        movimientoCantidad.includes(searchTermLower))
    );
  });

  return (
    <div className={`${style.divListado}`}>
      <div className={`${style.containerTitulo}`}>
        <h4>Listado Movimientos</h4>
        <p>{cantidadMovimientos}</p>
      </div>
      <div className={`${style.containerArray}`}>
        <div className={`${style.containerFiltros}`}>
          <div>
            <input
              type="text"
              placeholder="Buscar"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <div>
            <input
              type="checkbox"
              onChange={() => setFiltroMovimiento("Todos")}
              name="todo"
              id="todos"
              value={"Todos"}
              checked={filtroMovimiento === "Todos"}
            />
            <label htmlFor="todos">Todos</label>
          </div>
          <div>
            <input
              onChange={() => setFiltroMovimiento("Ingreso")}
              type="checkbox"
              name="ingreso"
              id="ingreso"
              value={"Ingreso"}
              checked={filtroMovimiento === "Ingreso"}
            />
            <label htmlFor="ingreso">Ingreso</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="gasto"
              id="gasto"
              onChange={() => setFiltroMovimiento("Gasto")}
              value={"Gasto"}
              checked={filtroMovimiento === "Gasto"}
            />
            <label htmlFor="gasto">Gasto</label>
          </div>
        </div>
        <div className={`${style.containerTabla}`}>
          <table>
            <tbody>
              {cantidadMovimientos > 0 ? (
                filteredMovimientos?.map((movimiento) => (
                  <tr key={movimiento.id}>
                    <td>
                      <button
                        className={`${style.btnEliminar}`}
                        onClick={() =>
                          setShowDeletePopup({
                            id: movimiento.id,
                            isOpen: true,
                          })
                        }
                      >
                        <AiOutlineClose />
                      </button>
                    </td>
                    <td>
                      <button className={`${style.btnEditar}`}>
                        <BiSolidPencil />
                      </button>
                    </td>
                    <td>{movimiento.nombre}</td>
                    <td className={`${style.salario}`}>
                      <span
                        style={
                          movimiento.tipoMovimiento == "Gasto"
                            ? { backgroundColor: "var(--bg-color-7)" }
                            : { backgroundColor: "var(--bg-color-9)" }
                        }
                      >
                        {convertirDecimal(movimiento.cantidad)}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>Sin datos existentes</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CardListado;
