
import ReporteAtenciones from "@/app/componentes/paginas/reporteatenciones";
import SidebarTaquilla from "@/app/componentes/sidebar/SideBar-Taquilla";

// Repetir dos veces para crear en los otros dos modulos

export default function Reportes() {
    return (
      <div className="grid">
  
        <div>
          <SidebarTaquilla />
        </div>
  
        <div >
            <h1 className="text-center p-5">Reportes</h1>
            <ReporteAtenciones />
        </div>
  
      </div>
    );
  };
    
 
    
