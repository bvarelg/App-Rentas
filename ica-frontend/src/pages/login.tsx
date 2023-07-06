"use client";
import React, { useEffect, useState } from "react";
import "@/app/componentes/formularios/css/login.css";
import "@/app/componentes/contenedores/contenedor-principal/contenedor-principal.css";
import axios from "axios";
import InputText from "@/app/componentes/formularios/input_texto";
import { useRouter } from "next/navigation";
import "@/app/globals.css";
import BotonPrincipal from "@/app/componentes/formularios/boton_principal";


export default function Login() {
  const router = useRouter()
  // React.useEffect(() => {
  //   if (sessionStorage.getItem("token") !== undefined) {
  //     router.push("/home");
  //   }
  // })
  
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  function handleInput(valor: string, name: string) {
    if (name === "correo") {
      setCorreo(valor);
    } else {
      setContrasena(valor);
    }
  }
  
  
  useEffect(() => {
    const item = sessionStorage.getItem("key");
  }, []);

  const SessionDataStorage = (valor: string, name: string) => {
    sessionStorage.setItem(name, valor);
  };

  

  const login = async () => {
    axios
      .post(`http://localhost:3001/autenticacion/login`, {
        correo: correo,
        contrasena: contrasena,
      })
      .then(function (response) {
        SessionDataStorage(response.data.access_token, "token")
        SessionDataStorage(response.data.nombre, "nombre")
        router.push("/home")
      })
      .catch(function (error) {
        
      });
        

  };
  return (
    <div className="Login">
      <div className="contenedor-principal">
        <div>
          <h1 className="Titulo">¡Bienvenidos a la App Rentas!</h1>
        </div>
        <br />
        <br />
        <br />
        <form>
          <label className="Correo" htmlFor="username">
            Correo
          </label>
          <InputText
            id="correo"
            hint="Ingresa tu correo"
            type="email"
            handleInput={handleInput}
          />
          <br />
          <label className="Contrasena" htmlFor="password">
            Contraseña
          </label>

          <a className="recuperarContrasena" href="recuperacion">
            ¿Has olvidado tu contraseña?
          </a>
          <InputText
            id="contrasena"
            hint="Ingresa tu contraseña"
            type="password"
            handleInput={handleInput}
          />
          <br />
          <BotonPrincipal texto="Iniciar sesión" callBack={login} />
          <br />
          <br />
          <a className="crearCuenta" href="register">
            ¿Eres nuevo? Crea una cuenta.
          </a>
        </form>
        <a className="politicas" href="politica-de-privacidad">
          Politica de privacidad - Términos y condiciones
        </a>
      </div>
    </div>
  );
}
