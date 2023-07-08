import React from "react";

import SideBar from "../sidebar/SideBar-Taquilla";
import "./css/inicio-taquilla.css";


export default function InicioTaquilla() {
  return (
    <div className="grid">

      <div>
        <SideBar />
      </div>

      <div className="contenido">
        <h1 className="funcionario">Inicio Taquilla</h1>
        <h3>{sessionStorage.getItem("nombre")}</h3>
      </div>

    </div>
  );
};



