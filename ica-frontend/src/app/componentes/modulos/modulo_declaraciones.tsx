import React from "react";
import "../modulos/css/botones-modulos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faUsersLine } from "@fortawesome/free-solid-svg-icons";

const ModuloDeclaraciones = () => {
  return (
    <div className="contenedor-declaraciones">
      <div className="square">
        <FontAwesomeIcon icon={faFile} />
        <p className="nombreBtn">Declaraciones</p>
      </div>
    </div>
  );
};

export default ModuloDeclaraciones;
