import React from "react";
import Title from "./Title";
import ContactButton from "./buttons/ContactButton";

function Ad() {
  return (
    <div class="ad">
      <div className="contenedor-ad">
        <div className="contenedor-titulo-ad">
          <Title texto="¿Quieres una serenata de la Tuna?" />
          <p className="descripcion-ad">
            Contáctanos, tenemos un repertorio de más de 60 canciones, para alegrar tus reuniones, cumpleaños, quince años, despedidas de soltero, matrimonios, bienvenidas de casado y bautizos, estás a un clic de distancia, ¡oprime el botón de abajo!
          </p>
          <ContactButton clase="contacto-ad" />
        </div>
      </div>
    </div>
  );
}

export default Ad;
