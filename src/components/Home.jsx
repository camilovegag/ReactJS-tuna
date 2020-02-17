import React from "react";
import Title from "./Title";
import Tunos from "../images/tunos.png";
import Contact from "./Contact";

function Home() {
  return (
    <div class="home">
      <div className="contenedor-home">
        <div className="contenedor-titulo">
          <Title texto="Los únicos tunos con marca registrada" />
          <p className="descripcion">Lorem ipsum dolor sit amet, sed inv enire repudiare ne, habemus vulput ate sed ei. Vix impedit.</p>
        </div>
        <img className="tunos" src={Tunos} alt="grafico de tunos"></img>
      </div>
    </div>
  );
}

export default Home;
