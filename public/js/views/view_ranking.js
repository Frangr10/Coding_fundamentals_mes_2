import Rutas from "../class/Rutas.js";
import View from "../class/View.js";
import Boton from "../Component/Boton.js";
import Titulo from "../component/Titulo.js";

class Ranking extends View{
    #titulo;
    #botonHome;
    //declaro atributos

    constructor(){
        //cargar datos de localStore
        //crear componentes
        super();
        this.#titulo= new Titulo("Ranking","","","titulo_ranking",1,""); 
        this.#botonHome= new Boton("volver Home","boton_home","","boot","");
    }

    view(){
        return(
            `
            <div class="view view_Ranking">
            ${this.#titulo.crearTitulo()}
            ${this.#botonHome.crearBoton()}           
            </div>
            `
        )
    }

    event(){
        let view_Ranking=document.querySelector(".view_Ranking");
        
        view_Ranking.addEventListener("click",(e)=>{
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

export default Ranking;

