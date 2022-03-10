import Componente from "../class/Componente.js";

class Div extends Componente{

    constructor(text_des="",id="",name="",clase="",otrosAtributos=""){
        super(text_des,id,name,clase,otrosAtributos); 
    }
    
    crearDiv(){
        return(
            `
            <div ${this.id_class_name} ${this.OtrosAtributos}>
              ${this.Text_des}
            </div>
            `
        )
    }
}

export default Div;