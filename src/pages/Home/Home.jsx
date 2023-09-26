/* eslint-disable react/prop-types */
import style from "../Home/Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import CardRegistro from "../../components/CardRegistro/CardRegistro";
import CardListado from "../../components/CardListado/CardListado";
import { useState } from "react";
import SuccessPopup from "../../components/Popups/SuccessPopup";
import ErrorPopup from "../../components/Popups/ErrorPopup";
import DeletePopup from "../../components/Popups/DeletePopup";

function Home() {
  const [movimientos, setMovimientos] = useState([]);
  const [saldo, setSaldo] = useState(1000);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState({
    id: null,
    isOpen: false,
  });
  const [popupMessage, setPopupMessage] = useState("");

  const saldoFinal = movimientos.reduce((total, movimiento) => {
    if (movimiento.tipoMovimiento === "Ingreso") {
      return total + movimiento.cantidad;
    } else if (movimiento.tipoMovimiento === "Gasto") {
      return total - movimiento.cantidad;
    }
    return total;
  }, saldo);

  const agregarMovimiento = (movimiento) => {
    // Agregar el movimiento al estado de movimientos
    setMovimientos([...movimientos, movimiento]);
  };

  return (
    <div>
      {showSuccessPopup && (
        <SuccessPopup
          message={popupMessage}
          onClose={() => setShowSuccessPopup(false)}
        />
      )}
      {showErrorPopup && (
        <ErrorPopup
          message={popupMessage}
          onClose={() => setShowErrorPopup(false)}
        />
      )}
      {showDeletePopup.isOpen && (
        <DeletePopup
          idItem={showDeletePopup.id}
          onClose={() => setShowDeletePopup({ id: null, isOpen: false })}
          setListadoMovimientos={setMovimientos}
          listadoMovimientos={movimientos}
        />
      )}
      <Navbar saldo={saldo} saldoFinal={saldoFinal}></Navbar>
      <main className={`${style.mainContainer}`}>
        <section>
          <CardRegistro
            onAgregarMovimiento={agregarMovimiento}
            saldo={saldo}
            setSaldo={setSaldo}
            setPopupMessage={setPopupMessage}
            setShowSuccessPopup={setShowSuccessPopup}
            setShowErrorPopup={setShowErrorPopup}
            saldoFinal={saldoFinal}
          />
        </section>
        <section>
          <CardListado
            setShowDeletePopup={setShowDeletePopup}
            listadoMovimientos={movimientos}
          />
        </section>
      </main>
    </div>
  );
}

export default Home;
