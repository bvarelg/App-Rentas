import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function ReporteAtenciones() {
  const [reportes, setReportes] = useState([
    {
      id: 1,
      nombreContribuyente: "",
      idContribuyente: 0,
      razonSocial: "",
      fechaAtencion: "",
      tipoAtencion: "",
      canalAtencion: "",
      descripcionAtencion: "",
    },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/atenciones")
      .then((response) => {
        setReportes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const tabla = reportes.map((reporte, i) => (
    <tr key={reporte.id}>
      <td>{reporte.id}</td>
      <td>{reporte.nombreContribuyente}</td>
      <td>{reporte.idContribuyente}</td>
      <td>{reporte.razonSocial}</td>
      <td>{reporte.fechaAtencion}</td>
      <td>{reporte.tipoAtencion}</td>
      <td>{reporte.canalAtencion}</td>
      <td>{reporte.descripcionAtencion}</td>
      <td>
        <button className="btn btn-outline-warning">
          <i className="bi bi-pencil-square"></i>
        </button>
        &nbsp;
        <button className="btn btn-outline-danger">
          <i className="bi bi-trash3"></i>
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="overflow-scroll m-3">
      
      <table
        className="table
             table-striped table-borded table-hover"
      >
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Contribuyente</th>
            <th scope="col">NIT</th>
            <th scope="col">Razon Social</th>
            <th scope="col">Fecha Atencion</th>
            <th scope="col">Tipo Atencion</th>
            <th scope="col">Canal Atencion</th>
            <th scope="col">Descripcion Atencion</th>
          </tr>
        </thead>
        <tbody>{tabla}</tbody>
      </table>
    </div>
  );
}
