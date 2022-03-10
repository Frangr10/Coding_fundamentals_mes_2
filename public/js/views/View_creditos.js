import Rutas from "../class/Rutas.js";
import View from "../class/View.js";
import Boton from "../Component/Boton.js";
import Titulo from "../component/Titulo.js";

class Creditos extends View{
    #titulo;
    #botonHome;
    
    constructor(){
        //cargar Datos localStore
        super();
        this.#titulo= new Titulo("Creditos","","","titulo",1,"");
        this.#botonHome=new Boton("volver Home",'home_boton','home_boton',"boot","");
    }

    view(){
        return(
            `
            <div class="view view_Creditos">
                ${this.#titulo.crearTitulo()}
                <p class="descrip">
                    Proyecto de mes Tzuzul Code
                    <br>
                    <br>
                    *John Llanes
                    <br>
                    *Francisco Gomez
                </p>
                ${this.#botonHome.crearBoton()}            
            </div>
            `
        )
    }

    event(){
        let view_creditos=document.querySelector(".view_Creditos");
        
        view_creditos.addEventListener("click",(e)=>{
            //console.log(e);
            if(e.target.matches(this.#botonHome.G_Id)){
                //guardo Datos
                Rutas.cambioRuta("Home");
            }
        })  
    }

}

export default Creditos;