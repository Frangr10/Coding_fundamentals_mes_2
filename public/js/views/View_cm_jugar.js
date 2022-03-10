import Rutas from "../class/Rutas.js";
import View from "../class/View.js";
import Boton from "../Component/Boton.js";
import Titulo from "../component/Titulo.js";

class Cm_Jugar extends View{
    //declaro atributos
    #titulo;
    #botonHome;

    constructor(){
        //cargar datos de localStore
        //crear componentes 
        super();
        this.#titulo= new Titulo("¿Como Jugar?","","","titulo",1,"");
        this.#botonHome=new Boton("volver Home","boton_home","","boot","");
    }

    view(){
        return(
            `
            <div class="view view_Cm_Jugar"> 
              ${this.#titulo.crearTitulo()}
              <ul class="descrip">
                <li>Cada jugador debes asignar un Nombre, Color y Figura</li>
                <br>
                <li>Cada jugador solo debe colocar su símbolo una vez por turno</li>
                <br>
                <li>El primer jugador que consiga marcar una línea de tres símbolos ya sea recta o diagonal será el ganador</li>
                <br>
                <li>En caso de que todas las casillas estén llenas y nadie marcó 3 en raya, será un empate y se reinicia el juego</li>
              </ul>
              ${this.#botonHome.crearBoton()}
            </div>
            `
        )
    }

    event(){
        let view_Cm_Jugar=document.querySelector(".view_Cm_Jugar");
        
        view_Cm_Jugar.addEventListener("click",(e)=>{
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

export default Cm_Jugar;
