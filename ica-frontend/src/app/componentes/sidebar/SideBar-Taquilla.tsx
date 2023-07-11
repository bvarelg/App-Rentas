import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Sidebar.css"
import Image from "next/image";
import LogoAppRentas from "../../assets/img/LogoAppRentas.png";
import  '../paginas/css/inicio-taquilla.css'
import router, { useRouter } from "next/router";


export default function SidebarTaquilla() {
  
  //Funciones para cerrar sesion con evento onClick, vaciando los datos en sessionStorage al salir. 
  const router = useRouter()
  const cerrarSesion = document.getElementById('cerrarSesion');
  
  cerrarSesion?.addEventListener("click", salir);
  cerrarSesion?.addEventListener("click", borrarSesion);
    
  function salir(this: HTMLAnchorElement): void {
    router.push("/");
  }
  
    
  function borrarSesion(this: HTMLAnchorElement): void {
    sessionStorage.removeItem('token');
  }
   
  return (
    <div>
      <div className="grid">
        <div className="sidebar">
          <div className="sidebar-header">
            <div className="logo">
              <Image
                src={LogoAppRentas}
                alt="App Rentas"
                width={50}
                height={50}
              ></Image>
            </div>
            <div className="appRentas">
              <h4>App Rentas</h4>
              <a id="volver" className="nav-link px-2" onClick={() => router.push("taquilla-ica")}>Taquilla</a>
            </div>
          </div>

          <div className="menus">
            <ul>
              <li>
                <a id="atenciones" onClick={() => router.push("atenciones-taquilla")} className="nav-link px-2" >
                  <i className="bi bi-file-earmark-person fa-xl" />{" "}
                  <span className="ms-1 d-none d-sm-inline">
                    Registro de atenciones
                  </span>
                </a>
              </li>
              <li>
                <a id="anuales" className="nav-link px-2">
                  <i className="bi bi-file-earmark-text fa-xl" />{" "}
                  <span className="ms-1 d-none d-sm-inline">Anuales</span>
                </a>
              </li>
              <li>
                <a id="bimestrales" className="nav-link px-2">
                  <i className="bi bi-files fa-xl" />{" "}
                  <span className="ms-1 d-none d-sm-inline">Bimestrales</span>
                </a>
              </li>
              <li>
                <a id="rit" className="nav-link px-2">
                  <i className="bi bi-file-plus fa-xl" />{" "}
                  <span className="ms-1 d-none d-sm-inline">Ingreso RIT</span>
                </a>
              </li>
              <li>
                <a id="sanciones" className="nav-link px-2">
                  <i className="bi bi-calculator fa-xl" />{" "}
                  <span className="ms-1 d-none d-sm-inline">Sanciones</span>
                </a>
              </li>
              <li>
                <a id="listarReportes" onClick={() => router.push("reportes")} className="nav-link px-2" >
                  <i className="bi bi-cloud-download fa-xl" />{" "}
                  <span className="ms-1 d-none d-sm-inline">Reportes</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="home">
            <a id="irHome" onClick={() => router.push("home")} className="nav-link px-2 " >
              <i className={"bi bi-house"} />
              {"  "}
              <span className="ms-1 d-none d-sm-inline">Home</span>
            </a>
          </div>
          <div className="cerrar-sesión">
            <a id="cerrarSesion" className="nav-link px-2 " >
              <i className={"bi bi-x-circle"} />
              {"  "}
              <span className="ms-1 d-none d-sm-inline">Cerrar sesión</span>
            </a>
          </div>

        </div>
        
      </div>
    </div>
  );
}


  
  