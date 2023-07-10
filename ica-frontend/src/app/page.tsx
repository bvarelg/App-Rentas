"use client";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "@/pages/login";
import Home from "@/pages/home";
import Recuperacion from "@/pages/recuperacion";
import Register from "@/pages/register";
import InicioInscripciones from "./componentes/paginas/inicio-inscripciones";
import InicioDeclaraciones from "./componentes/paginas/inicio-declaraciones";
import RegistroAtenciones from "./componentes/formularios/registro-atenciones";
import InicioTaquilla from "./componentes/paginas/iniciotaquilla";
import ReporteAtenciones from "./componentes/paginas/reporteatenciones";
import Landing from "@/pages/landing";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recuperacion" element={<Recuperacion />} />
        <Route path="/register" element={<Register />} />
        <Route path="/taquilla-ica" element={<InicioTaquilla />} />
        <Route path="/inscripciones" element={<InicioInscripciones />} />
        <Route path="/declaraciones" element={<InicioDeclaraciones />} />
        <Route path="/atenciones-taquilla" element={<RegistroAtenciones />} />
        <Route path="/atenciones-inscripciones" element={<RegistroAtenciones />} />
        <Route path="/atenciones-declaraciones" element={<RegistroAtenciones />} />
        <Route path="/reportes" element={<ReporteAtenciones /> } />
      </Routes>
    </BrowserRouter>
  );
}
