import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "@/app/componentes/formularios/css/registro.css";
import { post } from "../../httprequest/httprequest";

enum AreaEnum {
  Taquilla_ICA = "Taquilla ICA",
  Inscripciones = "Inscripciones",
  Declaraciones = "Declaraciones",
}

interface IFormInput {
  correo: String;
  nombres: String;
  apellidos: String;
  area: AreaEnum;
  contrena: String;
}

const RegisterForm = () => {
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
      <form className="formulario" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="titulo-register">Crea tu cuenta</h1>
        <div className="contenedor-register">
          <div className="contenedor-inputs">
            <label className="Correo">Correo</label>
            <br />
            <input
              className="inputTexto"
              {...register("correo", {
                required: true,
                pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
              })}
              placeholder="Ingresa tu email"
            />
          </div>

          <div className="contenedor-inputs">
            <label className="Correo">Nombres</label>
            <br />
            <input
              className="inputTexto"
              {...register("nombres", {
                required: true,
                maxLength: 200,
                pattern: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
              })}
              placeholder="Nombres del funcionario"
            />
          </div>

          <div className="contenedor-inputs">
            <label className="Correo">Apellidos</label>
            <br />
            <input
              type="text"
              className="inputTexto"
              {...register("apellidos", {
                required: true,
                maxLength: 500,
                pattern: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
              })}
              placeholder="Apellidos del funcionario"
            />
          </div>

          <div className="contenedor-inputs">
            <label className="Correo">Equipo de trabajo</label>
            <br />
            <select className="lista" {...register("area")}>
              
              <option value="Taquilla_ICA">Taquilla ICA</option>
              <option value="Inscripciones">Inscripciones</option>
              <option value="Declaraciones">Declaraciones</option>
            </select>
          </div>

          <div className="contenedor-inputs">
            <label className="Correo">Contraseña</label>
            <br />
            <input
              className="inputTexto"
              type="password"
              {...register("contrena", {
                required: true,
                pattern: /^.{4,12}$/,
              })}
              placeholder="Ingresa una contraseña"
            />
          </div>

          <div className="contenedor-boton">
            <input
              className="boton-registro"
              type="submit"
              value="Registrate"
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

export default RegisterForm;
