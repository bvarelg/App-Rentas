import React, { useEffect, useState } from "react";
import SidebarInscripciones from "../sidebar/SideBar-Inscripciones";
import "./css/inicio-taquilla.css";


export default function InicioInscripciones () {
  
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
        <SidebarInscripciones />
      </div>

      <div className="contenido">
        <h1 className="funcionario">Inicio Inscripciones</h1>
        <h3>{username || 'Usuario'}</h3>
      </div>

    </div>
  );
};

