import Data from "../class/Data.js";
import Rutas from "../class/Rutas.js";
import View from "../class/View.js";
import Boton from "../Component/Boton.js";
import Titulo from "../component/Titulo.js";

class Home extends View{
    //atributos
    #titulo;
    #juego;
    #comoJugar;
    #panelControl;
    #credito;


    constructor(){
        //recuperar datos
        super();
        this.#titulo      =new Titulo("Tres en Raya",'titulo_home',"",'titulo_home',1,"");
        this.#juego       =new Boton("Nuevo Juego",'btn_juego','','boot',"");
        this.#comoJugar   =new Boton("¿Como Jugar?",'btn_cmJugar','','boot',"");
        this.#panelControl=new Boton("Controles",'btn_pnControl','','boot',"");
        this.#credito     =new Boton("Creditos",'btn_creditos','','boot',"");
    }

    view(){
        return(
            `<div class="view view_Home">
               ${this.#titulo.crearTitulo()}
               ${this.#juego.crearBoton()}
               ${this.#comoJugar.crearBoton()}
               ${this.#panelControl.crearBoton()}
               ${this.#credito.crearBoton()}
            </div>`
        )
    }
    
    event(){
        let view_home=document.querySelector(".view_Home");
        //llamar eventos de otras vista 
        view_home.addEventListener("click",(e)=>{
            //console.log(e);
            if(e.target.matches(this.#juego.G_Id)){
                Data.saveData({numeroJ:1},"registroJugador");
                Rutas.cambioRuta("Registro");
            }        
            if(e.target.matches(this.#comoJugar.G_Id))    Rutas.cambioRuta("Cm_jugar");
            if(e.target.matches(this.#panelControl.G_Id)) Rutas.cambioRuta("Controles")
            if(e.target.matches(this.#credito.G_Id))      Rutas.cambioRuta("Creditos");
        })  
    }

}

export default Home;