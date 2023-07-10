import React, { useEffect, useState } from "react";

import SideBar from "../sidebar/SideBar-Taquilla";
import "./css/inicio-taquilla.css";


export default function InicioTaquilla() {
  
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    // Recuperar el nombre de usuario almacenado en sessionStorage
    const storedUsername = sessionStorage.getItem('nombre');
      if (storedUsername) {
          setUsername
          setUsername(storedUsername);
        }
  }, []);
  
  
  return (
    <div className="grid">

      <div>
        <SideBar />
      </div>

      <div className="contenido">
        <h1 className="funcionario">Inicio Taquilla</h1>
        <h3>{username || 'Usuario'}</h3>
      </div>

    </div>
  );
};



