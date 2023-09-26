/* eslint-disable react/prop-types */
import style from "../Home/Home.module.css";

import Navbar from "../../components/Navbar/Navbar";
import CardRegistro from "../../components/CardRegistro/CardRegistro";
import CardListado from "../../components/CardListado/CardListado";

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <main className={`${style.mainContainer}`}>
        <section>
          <CardRegistro></CardRegistro>
        </section>
        <section>
          <CardListado></CardListado>
        </section>
      </main>
    </div>
  );
}

export default Home;
