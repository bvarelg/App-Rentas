import RegistroAtenciones from "@/app/componentes/formularios/registro-atenciones";
import React from "react";
import "../app/componentes/formularios/css/registro-atenciones.css"
import SidebarDeclaraciones from "@/app/componentes/sidebar/SideBar-Declaraciones";

const Atenciones = () => {
  return (
    <div className="reg-atenciones">
      <div>
        <SidebarDeclaraciones />
      </div>

      <div className="formulario">
        <RegistroAtenciones />
      </div>
    </div>
  );
};

export default Atenciones;


