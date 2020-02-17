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
        <Contact titulo="Contactanos" displaytext="¿Quieres una serenata de la Tuna? Llena los datos del formulario de abajo para entrar en contacto" fstinput="Tu nombre" 
        scninput="Tu correo" msginput="Tu mensaje" buttontext="Entra en contacto" />
      </div>
    </div>
  );
}

export default Home;
