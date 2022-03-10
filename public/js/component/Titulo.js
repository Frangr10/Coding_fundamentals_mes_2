import Componente from "../class/Componente.js";
import validarDatos from "../function/ValidarDatos.js";

class Titulo extends Componente{

   #h_v;

    constructor(text_des="",id="",name="",clase="",h_v=1,otrosAtributos=""){
        super(text_des,id,name,clase,otrosAtributos); 
        if(validarDatos(4,h_v)){
            this.#h_v=(h_v>0 && h_v<6)?h_v:1;
        }else{
            this.#h_v=1;
        }
    }
    crearTitulo(){
        return(
            `
            <h${this.#h_v} ${this.id_class_name}>
                ${this.Text_des}
            </h${this.#h_v}>
            `
        )
    }
}

export default Titulo;