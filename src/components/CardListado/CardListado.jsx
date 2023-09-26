/* eslint-disable react/prop-types */
import style from "../CardListado/CardListado.module.css";
import { BiSolidPencil } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

function CardListado({ listadoMovimientos }) {
  const num = listadoMovimientos.length;

  return (
    <div className={`${style.divListado}`}>
      <div className={`${style.containerTitulo}`}>
        <h4>Listado Movimientos</h4>
        <p>{num}</p>
      </div>
      <div className={`${style.containerArray}`}>
        <div className={`${style.containerFiltros}`}>
          <div>
            <input type="text" placeholder="Buscar" />
          </div>
          <div>
            <input type="checkbox" name="todo" id="todos" />
            <label htmlFor="todos">Todos</label>
          </div>
          <div>
            <input type="checkbox" name="ingreso" id="ingreso" />
            <label htmlFor="ingreso">Ingreso</label>
          </div>
          <div>
            <input type="checkbox" name="gasto" id="gasto" />
            <label htmlFor="gasto">Gasto</label>
          </div>
        </div>
        <div className={`${style.containerTabla}`}>
          <table>
            <tbody>
              {listadoMovimientos?.map((movimiento) => (
                <tr key={movimiento.id}>
                  <td>
                    <button className={`${style.btnEliminar}`}>
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
                      {movimiento.cantidad}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CardListado;
