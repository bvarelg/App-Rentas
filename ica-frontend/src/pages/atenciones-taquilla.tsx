import RegistroAtenciones from "@/app/componentes/formularios/registro-atenciones";
import React from "react";
import "../app/componentes/formularios/css/registro-atenciones.css"
import SidebarTaquilla from "@/app/componentes/sidebar/SideBar-Taquilla";

const Atenciones = () => {
  return (
    <div className="reg-atenciones">
      <div>
        <SidebarTaquilla />
      </div>

      <div className="formulario">
        <RegistroAtenciones />
      </div>
    </div>
  );
};

export default Atenciones;
