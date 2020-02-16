import React from "react";
import Logo from "../images/logo.png";
import Boton_contacto from "./Boton_contacto";

function Header() {
  return (
    <header>
      <div className="brand">
        <img src={Logo} alt="escudo de la tuna" />
        <h1>Tuna Universidad de La Sabana</h1>
      </div>
      <p className="inicio">Inicio</p>
      <p>¿Quiénes somos?</p>
      <p>Galería</p>
      <Boton_contacto />
    </header>
  );
}

export default Header;
