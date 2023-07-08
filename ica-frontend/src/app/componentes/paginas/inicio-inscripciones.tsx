import React from "react";
import SidebarInscripciones from "../sidebar/SideBar-Inscripciones";
import "./css/inicio-taquilla.css";


export default function InicioInscripciones () {
  

  return (
    <div className="grid">

      <div>
        <SidebarInscripciones />
      </div>

      <div className="contenido">
        <h1 className="funcionario">Inicio Inscripciones</h1>
        <h3>{sessionStorage.getItem("nombre")}</h3>
      </div>

    </div>
  );
};

