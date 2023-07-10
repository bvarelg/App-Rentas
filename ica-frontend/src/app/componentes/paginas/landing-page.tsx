import React from "react";
import Image from "next/image";
import LogoAppRentas from "@/app/assets/img/LogoAppRentas.png";
import "@/app/componentes/paginas/css/landing.css";

export default function LandingPage() {
  return (
    <div>
      <h1 className="tituloapp">App Rentas</h1>
      <div className="entrar">
        <a href="login">
            <Image
            src={LogoAppRentas}
            alt="App Rentas"
            width={200}
            height={200}
            ></Image>
        </a>
      </div>
    </div>
  );
}

