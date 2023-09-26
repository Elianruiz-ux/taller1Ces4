/* eslint-disable react/prop-types */
import Input from "../Input/Input";
import style from "../Navbar/Navbar.module.css";

function Navbar() {
  return (
    <header className={`${style.divNavbar}`}>
      <nav>
        <ul>
          <div className={`${style.columnUno}`}>
            <li>logo</li>
            <li>Titulo</li>
          </div>
          <div className={`${style.columnDos}`}>
            <li>
              <Input
                type={"number"}
                idInput={"idsaldoIni"}
                labelName={"Saldo Inicial: "}
                variant={"navbar"}
              />
            </li>
            <li>
              <Input
                type={"number"}
                idInput={"idsaldoFin"}
                labelName={"Saldo Final: "}
                variant={"navbar"}
              />
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
