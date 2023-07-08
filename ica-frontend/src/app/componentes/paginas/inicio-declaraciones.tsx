import React from "react";
import SidebarDeclaraciones from "../sidebar/SideBar-Declaraciones";


const InicioDeclaraciones = () => {
  

  return (
    <div className="grid">

      <div>
        <SidebarDeclaraciones />
      </div>

      <div className="contenido">
        <h1 className="funcionario">Inicio Declaraciones</h1>
        <h3>{sessionStorage.getItem("nombre")}</h3>
      </div>

    </div>
  );
};

export default InicioDeclaraciones;