import React from "react";

function Recuperacion() {
  return (
    <div>
      <form>
        <h1 className="titulo-register">Crea tu cuenta</h1>
        <div className="contenedor-register">
          {/* <div className="contenedor-inputs">
            <label className="Correo">Correo</label>
            <br />
            <input
              className="inputTexto"
              {...recuperacion("correo", {
                required: true,
                pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
              })}
              placeholder="Ingresa el email registrado"
            />
          </div> */}

          <div className="contenedor-boton">
            <input
              className="boton-registro"
              type="submit"
              value="¡Vamos!"
            />
          </div>
        </div>
      </form>
      <div className="politicas">
        <a href="politica-de-privacidad">
          Politica de privacidad - Términos y condiciones
        </a>
      </div>
    </div>
  );
}

export default Recuperacion;
