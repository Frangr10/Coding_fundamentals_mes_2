import Componente from "../class/Componente.js";

class Boton extends Componente{

    constructor(text_des="",id="",name="",clase="",otrosAtributos=""){
        super(text_des,id,name,clase,otrosAtributos); 
    }

    crearBoton(){
        
        return(
            `
            <button ${this.id_class_name} ${this.OtrosAtributos}>
                  ${this.Text_des}
            </button>
            `
        )
    }

}

export default Boton;