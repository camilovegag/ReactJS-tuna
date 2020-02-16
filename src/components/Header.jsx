import React from "react";
import Logo from "../images/logo.png";
import ContactButton from "./buttons/ContactButton";

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
      <ContactButton />
    </header>
  );
}

export default Header;
