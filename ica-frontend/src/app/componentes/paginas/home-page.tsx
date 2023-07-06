import React from "react";
import ModuloTaquilla from "../modulos/modulo_taquilla";
import ModuloInscripciones from "../modulos/modulo_inscripciones";
import ModuloDeclaraciones from "../modulos/modulo_declaraciones";
import router from "next/router";
import "./css/home.css"
import "../contenedores/contenedor-principal/contenedor-principal.css"


export default function HomePage() {

    

  return (
    <div>
      <h1 className="bienvenida">Hola {sessionStorage.getItem("nombre")}</h1>
      <div className="contenedor-modulos">
        <a onClick={() => router.push("taquilla-ica")} className="modulos">
          <ModuloTaquilla />
        </a>

        <a onClick={() => router.push("inscripciones")} className="modulos">
          <ModuloInscripciones />
        </a>

        <a onClick={() => router.push("declaraciones")} className="modulos">
          <ModuloDeclaraciones />
        </a>
      </div>
    </div>
  );
};

// export default HomePage;
