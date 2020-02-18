import React from "react";
import Header from "./Header";
import Home from "./Home";
import Ad from "./Ad";
import History from "./History";
import Footer from "./Footer";
import Contact from "./Contact";
import Gallery from "./Gallery";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Ad />
      <History />
      <Gallery/>
      <Contact titulo="Contactanos" displaytext="¿Quieres una serenata de la Tuna? Llena los datos del formulario de abajo para entrar en contacto" fstinput="Tu nombre" 
        scninput="Tu correo" msginput="Tu mensaje" buttontext="Entra en contacto" />
      <Footer />
    </div>
  );
}

export default App;
