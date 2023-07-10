import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Sidebar.css";
import Image from "next/image";
import LogoAppRentas from "../../assets/img/LogoAppRentas.png";
import "../paginas/css/inicio-taquilla.css";
import router from "next/router";

function SidebarDeclaraciones() {
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
              <a className="nav-link px-2" onClick={() => router.push("declaraciones")}>Declaraciones</a>
            </div>
          </div>

          <div className="menus">
            <ul>
              <li>
                <a
                  onClick={() => router.push("atenciones-declaraciones")}
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
                    Anuales
                  </span>
                </a>
              </li>
              <li>
                <a className="nav-link px-2">
                  <i className="bi bi-file-plus fa-xl" />{" "}
                  <span className="ms-1 d-none d-sm-inline">Reaforos</span>
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
            <a onClick={() => router.push("/")} className="nav-link px-2 ">
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

export default SidebarDeclaraciones;
