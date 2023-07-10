import React, { useEffect, useState } from "react";
import SidebarDeclaraciones from "../sidebar/SideBar-Declaraciones";


const InicioDeclaraciones = () => {
  
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
        <SidebarDeclaraciones />
      </div>

      <div className="contenido">
        <h1 className="funcionario">Inicio Declaraciones</h1>
        <h3>{username || 'Usuario'}</h3>
      </div>

    </div>
  );
};

export default InicioDeclaraciones;