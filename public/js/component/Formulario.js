import Componente from "../class/Componente.js";

class Formulario extends Componente{

    constructor(text_des="",id="",name="",clase="",otrosAtributos=""){
        super(text_des,id,name,clase,otrosAtributos); 
    }

    crearFormulario(){
        return `
        <form ${this.id_class_name} ${this.OtrosAtributos}>
            ${this.Text_des}
        </form>
        `;
    }
    
}

export default Formulario;