import ModuloTaquilla from "../modulos/modulo_taquilla";
import ModuloInscripciones from "../modulos/modulo_inscripciones";
import ModuloDeclaraciones from "../modulos/modulo_declaraciones";
import router, { useRouter } from "next/router";
import "./css/home.css";
import "../contenedores/contenedor-principal/contenedor-principal.css";
import { useEffect, useState } from "react";



export default function HomePage() {
  
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
    <div>
      <h1 className="bienvenida">Hola {username || 'Usuario'}</h1>
      <div className="contenedor-modulos">
        <a onClick={() => router.push("taquilla-ica")} className="modulos">
          <ModuloTaquilla />
        </a>
        <a onClick={() => router.push("inscripciones")} className="modulos">
          <ModuloInscripciones />
        </a>
        <a onClick={() => router.push("declaraciones")} className="modulos">
          <ModuloDeclaraciones />
        </a>
      </div>
    </div>
  );
}
              
        
             
    
  

   
   
    
   

  

