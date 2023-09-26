/* eslint-disable react/prop-types */
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
                type={"number"}
                idInput={"idsaldoIni"}
                labelName={"Saldo Inicial: "}
                variant={"navbar"}
                disabled={true}
                value={saldo}
              />
            </li>
            <li>
              <Input
                type={"number"}
                idInput={"idsaldoFin"}
                labelName={"Saldo Final: "}
                variant={"navbar"}
                disabled={true}
                value={saldoFinal}
              />
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
