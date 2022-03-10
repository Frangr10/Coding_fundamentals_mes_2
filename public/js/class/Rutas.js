import Home from "../views/View_home.js";
import Registro from "../views/View_registro.js";
import Controles from "../views/View_controles.js";
import Cm_Jugar from "../views/View_cm_jugar.js";
/*import Ranking from "../views/view_ranking.js";*/
import Creditos from "../views/View_creditos.js";
import Juego from "../views/View_Juego.js";

class Rutas{

    static cambioRuta(ruta=""){

        const render=document.querySelector(".root");
        let view;
        let transicion=setTimeout(()=>{
            switch(ruta){
                
                case "Home":view= new Home();         break;
         
                case "Registro":view=new Registro();  break;
                
                case "Juego":view=new Juego();        break;    

                case "Controles":view=new Controles();break;

                case "Cm_jugar":view=new Cm_Jugar();  break;

                case "Creditos":view= new Creditos(); break;
            }
            if(view){
                render.innerHTML=view.view();
                view.event();
            }
            clearTimeout(transicion);
        },700,ruta,render)   
   }
}

export default Rutas;


