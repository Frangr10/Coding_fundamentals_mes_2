import Rutas from "../class/Rutas.js";
import View from "../class/View.js";
import Boton from "../Component/Boton.js";
import Titulo from "../component/Titulo.js";

class Controles extends View{
    //declaro atributos
    #titulo;
    #botonHome;

    constructor(){
        //cargar datos de localStore
        //crear componentes 
        super();
        this.#titulo= new Titulo("Controles","titulo","","titulo",1,"");
        this.#botonHome=new Boton("volver Home",'home_boton','home_boton',"boot","");
    }

    view(){
        return(
            `
            <div class="view view_Controles"> 
               ${this.#titulo.crearTitulo()}
               <p class="descrip">
                    En tu turno, da clic en la casilla que quieres colocar tu pieza para lograr la victoria
               </p>
               ${this.#botonHome.crearBoton()} 
            </div>
            `
        )
    }

    event(){
        let view_Controles=document.querySelector(".view_Controles");
        
        view_Controles.addEventListener("click",(e)=>{
            //console.log(e);
            if(e.target.matches(this.#botonHome.G_Id)){
                Rutas.cambioRuta("Home");
            }
            //if(e.target.matches(this.#botonHome.G_Id)){
                //guardo Datos
                //Rutas.cambioRuta("Home");
           //}
        })  
    }
}

export default Controles;
