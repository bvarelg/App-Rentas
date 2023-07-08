import RegistroAtenciones from "@/app/componentes/formularios/registro-atenciones";
import React from "react";
import "../app/componentes/formularios/css/registro-atenciones.css"
import SidebarInscripciones from "@/app/componentes/sidebar/SideBar-Inscripciones";

const Atenciones = () => {
  return (
    <div className="reg-atenciones">
      <div>
        <SidebarInscripciones />
      </div>

      <div className="formulario">
        <RegistroAtenciones />
      </div>
    </div>
  );
};

export default Atenciones;

