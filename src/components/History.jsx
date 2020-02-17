import React from "react";
import Title from "./Title";

function History() {
  return (
    <div class="history">
      <div className="contenedor-history">
        <div className="contenedor-titulo-history">
          <Title texto="¿Quienes somos?" />
          <p className="descripcion-history">
            La Tuna Universidad de La Sabana, fundada el 25 de julio de 1999, es un grupo musical representativo estructurado bajo claros lineamientos de respeto y camaradería, caracterizado por su musicalidad y simpatía
          </p>
        </div>
      </div>
    </div>
  );
}

export default History;
