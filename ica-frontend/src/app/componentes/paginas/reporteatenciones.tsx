import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

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
    </tr>
  ));

  return (
    <div>
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
