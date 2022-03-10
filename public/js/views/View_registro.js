import Titulo from "../component/Titulo.js";
import Formulario from "../component/Formulario.js";
import Boton from "../Component/Boton.js";
import Input from "../component/Input.js";
import Select from "../component/Select.js";
import Rutas from "../class/Rutas.js";
import Data from "../class/Data.js";
import View from "../class/View.js";
import Jugador from "../class/Jugador.js";

class Registro extends View{
    
    #titulo;
    #formulario;
    #botonRegistrar;
    #volverHome;
    #jugadorT;

    constructor(){
        super();
        let fichas=["","bolt","bomb","circle","heart","hot","invader","meteor","music","nodejs","python","react","star","wordpress","x"].map((el)=>{
            let aux={value:el};
            return el=aux;
        });
        this.#jugadorT=Data.loadData("registroJugador");
        this.#titulo= new Titulo("Regristro jugador "+this.#jugadorT.numeroJ,"titulo_registro","","titulo",1,"");
        this.#botonRegistrar=new Boton("Registrar","boton_registro","","boot","");
        this.#formulario= new Formulario(`
            Nombre:${(new Input("","nombre_registro","nombre","input_text","text",`required`,`placeholder="Nombre..."`)).crearInput()}
            Color:${(new Input("","color_registro","color","input","color",`required`,`title="Click"`)).crearInput()}
            Ficha:${(
                 new Select("","","select_ficha","input_select","","",fichas,true)
            ).crearSelect()}
           ${this.#botonRegistrar.crearBoton()}`
        ,"formulario_registro1",``,"formulario_registro",``);
        this.#volverHome=new Boton("Volver Home","volver_home","","boot","");
    }

    view(){
        return(
            `
            <div class="view view_Registro">
               ${this.#titulo.crearTitulo()}
               ${this.#formulario.crearFormulario()}
               ${this.#volverHome.crearBoton()}
            </div>
            `
        )
    }

    event(){
        let view_registro=document.querySelector(".view_Registro");

        view_registro.addEventListener("click",(e)=>{
            //console.log(e);
            if(e.target.matches(this.#botonRegistrar.G_Id)){
                e.preventDefault();
                let aux=new FormData(document.getElementById(this.#formulario.Id));
                let jugadorN=[...aux.entries()];
                //console.log(jugadorN)
                if(jugadorN[0][1]==""||jugadorN[2][1]==""){
                   alert("Por favor ingreso los datos del jugador:"+this.#jugadorT.numeroJ);
                }else{
                    let j=new Jugador(jugadorN[0][1],0,-1,jugadorN[1][1],jugadorN[2][1]);
                    console.log(j.getData());
                    Data.saveData(j.getData(),"Jugador"+this.#jugadorT.numeroJ);
                    if(this.#jugadorT.numeroJ<2){
                        this.#jugadorT.numeroJ++;
                        Data.saveData(this.#jugadorT,"registroJugador");
                        Rutas.cambioRuta("Registro");
                    }else{
                        //console.log(localStorage);
                        Rutas.cambioRuta("Juego");//mandar a vista moneda -> juego
                    }
                }

            }
            if(e.target.matches(this.#volverHome.G_Id)){
                Data.clear()
                Rutas.cambioRuta("Home");
            }
        })  
    }
}

export default Registro;