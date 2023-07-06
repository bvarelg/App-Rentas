import React from "react";


const InicioDeclaraciones = () => {
  

  return (
    <div>
        <h1 className="bienvenida">{sessionStorage.getItem("nombre")}</h1>
    </div>
  );
};

export default InicioDeclaraciones;