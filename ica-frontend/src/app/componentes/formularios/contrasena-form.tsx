import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "@/app/componentes/formularios/css/contrasena.css";
import { post } from "../../httprequest/httprequest";


interface IFormInput {
  correo: String;
  
}

const NewContrasena = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const url = "http://localhost:3001/usuarios";

  const cbResponse = (response: any) => {
    console.log(response);
  };

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    post(url, { ...data }, cbResponse);
  };

  return (
    <div>
      <form className="contrasena" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="titulo-contrasena">Crea tu cuenta</h1>
        <div className="contenedor-contrasena">
          <div className="contenedor-inputs">
            <label className="Correo">Correo</label>
            <br />
            <input
              className="inputTexto"
              {...register("correo", {
                required: true,
                pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
              })}
              placeholder="Ingresa el email registrado"
            />
          </div>

          
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
};

export default NewContrasena;