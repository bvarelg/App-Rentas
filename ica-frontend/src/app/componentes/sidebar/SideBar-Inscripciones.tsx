import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Sidebar.css";
import Image from "next/image";
import LogoAppRentas from "../../assets/img/LogoAppRentas.png";
import "../paginas/css/inicio-taquilla.css";
import router, { useRouter } from "next/router";

function SidebarInscripciones() {
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
              <a className="nav-link px-2" onClick={() => router.push("inscripciones")}>Inscripciones</a>
            </div>
          </div>

          <div className="menus">
            <ul>
              <li>
                <a
                  onClick={() => router.push("atenciones-inscripciones")}
                  className="nav-link px-2"
                >
                  <i className="bi bi-file-earmark-person fa-xl" />{" "}
                  <span className="ms-1 d-none d-sm-inline">
                    Registro de atenciones
                  </span>
                </a>
              </li>

              <li>
                <a className="nav-link px-2">
                  <i className="bi bi-files fa-xl" />{" "}
                  <span className="ms-1 d-none d-sm-inline">
                    Factura inicial
                  </span>
                </a>
              </li>
              <li>
                <a className="nav-link px-2">
                  <i className="bi bi-file-plus fa-xl" />{" "}
                  <span className="ms-1 d-none d-sm-inline">Consulta RIT</span>
                </a>
              </li>
              <li>
                <a className="nav-link px-2">
                  <i className="bi bi-calculator fa-xl" />{" "}
                  <span className="ms-1 d-none d-sm-inline">Sanciones</span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => router.push("reportes")}
                  className="nav-link px-2"
                >
                  <i className="bi bi-cloud-download fa-xl" />{" "}
                  <span className="ms-1 d-none d-sm-inline">Reportes</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="home">
            <a onClick={() => router.push("home")} className="nav-link px-2 ">
              <i className={"bi bi-house"} />
              {"  "}
              <span className="ms-1 d-none d-sm-inline">Home</span>
            </a>
          </div>
          <div className="cerrar-sesión">
            <a id="cerrarSesion" className="nav-link px-2 ">
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

export default SidebarInscripciones;
