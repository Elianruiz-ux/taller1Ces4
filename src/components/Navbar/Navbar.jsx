/* eslint-disable react/prop-types */
import { convertirDecimal } from "../../Utils/Utils";
import Input from "../Input/Input";
import style from "../Navbar/Navbar.module.css";

function Navbar({ saldo, saldoFinal }) {
  return (
    <header className={`${style.divNavbar}`}>
      <nav>
        <ul>
          <div className={`${style.columnUno}`}>
            <li>Manejo.com</li>
            <li>Inicio</li>
          </div>
          <div className={`${style.columnDos}`}>
            <li>
              <Input
                type={"text"}
                idInput={"idsaldoIni"}
                labelName={"Saldo Inicial: "}
                variant={"navbar"}
                disabled={true}
                value={convertirDecimal(saldo)}
              />
            </li>
            <li>
              <Input
                type={"text"}
                idInput={"idsaldoFin"}
                labelName={"Saldo Final: "}
                variant={"navbar"}
                disabled={true}
                value={convertirDecimal(saldoFinal)}
              />
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
