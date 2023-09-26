/* eslint-disable react/prop-types */
import style from "../CardListado/CardListado.module.css";

function CardListado() {
  const num = 0;
  return (
    <div className={`${style.divListado}`}>
      <div className={`${style.containerTitulo}`}>
        <h4>Registro</h4>
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
              <tr>
                <td>borrar</td>
                <td> editar</td>
                <td>titulo</td>
                <td>valor</td>
              </tr>
              <tr>
                <td>borrar</td>
                <td> editar</td>
                <td>titulo</td>
                <td>valor</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CardListado;
