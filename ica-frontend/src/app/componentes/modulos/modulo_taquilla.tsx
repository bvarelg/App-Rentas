import React from "react";
import "../modulos/css/botones-modulos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsersLine } from "@fortawesome/free-solid-svg-icons";

const ModuloTaquilla = () => {
  return (
    <div className="contenedor-taquilla">
      <div className="square">
        <FontAwesomeIcon icon={faUsersLine} />
        <p className="nombreBtn">Taquilla ICA</p>
      </div>
    </div>
  );
};

export default ModuloTaquilla;
