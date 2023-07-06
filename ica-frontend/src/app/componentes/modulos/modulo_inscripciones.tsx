import React from "react";
import "../modulos/css/botones-modulos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonCircleCheck, faUsersLine } from "@fortawesome/free-solid-svg-icons";



const ModuloInscripciones = () => {
    return (
        <div className="contenedor-inscripciones">
        <div className="square">
        <FontAwesomeIcon icon={faPersonCircleCheck} />
            <p className="nombreBtn">Inscripciones</p>
        </div>
        </div>
    );
}


export default ModuloInscripciones;