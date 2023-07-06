import * as React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "../sidebar/SideBar";
import SideBar from "../sidebar/SideBar";
import "../formularios/css/registro-atenciones.css";
import { post } from "@/app/httprequest/httprequest";

enum TipologiaEnum {
  Factura = "Facturas",
  Inscripciones = "Inscripciones",
  Declaraciones = "Declaraciones",
  RIT = "RIT",
  Asesoria = "Asesoria",
}

enum CanalEnum {
  Presencial = "Presencial",
  Telefónico = "Telefónico",
  Digital = "Digital",
}

type FormData = {
  nombreContribuyente: string;
  idContribuyente: number;
  razonSocial: string;
  fechaAtencion: string;
  tipoAtencion: TipologiaEnum;
  canalAtencion: CanalEnum;
  descripcionAtencion: string;
};

export default function RegistroAtenciones(this: any) {
  const { register, handleSubmit } = useForm<FormData>();
  const url = "http://localhost:3001/atenciones";

  const cbResponse = (response: any) => {
    console.log(response);
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    post(url, { ...data }, cbResponse);
  };
 

  return (
    <div className="reg-atenciones">
      <div>
        <SideBar />
      </div>

      <div className="formulario">
        <h1 className="titulo">Registro de atenciones</h1>

        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="col1">
            <div>
              <label className="inputs">Nombre contribuyente</label>
              <br />
              <input type="text" {...register("nombreContribuyente")} />
            </div>

            <div>
              <label className="inputs">NIT o C.C.</label>
              <br />
              <input type="text" {...register("idContribuyente")} />
            </div>

            <div>
              <label className="inputs">Razón social</label>
              <br />
              <input type="text" {...register("razonSocial")} />
            </div>
          </div>

          <div className="col2">
            <div>
              <label className="inputs">Fecha de atención</label>
              <br />
              <input type="date" {...register("fechaAtencion")} />
            </div>

            <div>
            <label className="inputs">Tipología</label>
            <br />
              <select className="lista-tipologias" {...register("tipoAtencion")}>
                <option value="Factura">Facturas</option>
                <option value="Inscripciones">Inscripciones</option>
                <option value="Declaraciones">Declaraciones</option>
                <option value="RIT">RIT</option>
                <option value="Asesoría">Asesoría</option>
              </select>
            </div>
              

            <div>
              <label className="inputs">Canal de atención</label>
              <br />
              <select className="lista-tipologias" {...register("canalAtencion")}>
                <option value="Presencial">Presencial</option>
                <option value="Telefónico">Telefónico</option>
                <option value="Digital">Digital</option>
              </select>
            </div>
          </div>

          <div className="col3">
            <div>
              <label className="inputs">Descripción</label>
              <br />
              <textarea
                className="descripcion"
                {...register("descripcionAtencion")}
                maxLength={10000}
                placeholder="Documenta aquí el resumen de la atención."
              />
            </div>

            <div className="boton">
              <input type="submit" value="Registrar" />
            </div>
          </div>


        </form>
      </div>
    </div>
  );
}

// export default RegistroAtenciones;
