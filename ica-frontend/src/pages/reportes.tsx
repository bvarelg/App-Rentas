
import ReporteAtenciones from "@/app/componentes/paginas/reporteatenciones";
import SideBar from "@/app/componentes/sidebar/SideBar";


export default function Reportes() {
    return (
      <div className="grid">
  
        <div>
          <SideBar />
        </div>
  
        <div >
            <h1>Reportes</h1>
            <ReporteAtenciones />
        </div>
  
      </div>
    );
  };
    
 
    
