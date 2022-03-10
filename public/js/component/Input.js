import Componente from "../class/Componente.js";

class Input extends Componente{
    
    #type;
    #required;

    constructor(text_des="",id="",name="",clase="",type="",required="",otrosAtributos=""){
        super("",id,name,clase,otrosAtributos);
        this.#type=type;
        this.#required=required; 
    }

    crearInput(){
        return(
            `
            <input ${this.id_class_name} type="${this.#type}"  ${this.#required} ${this.OtrosAtributos}>
            </input>
            `
        )
    }

    set Type(type=""){
        this.#type=type;
    }

    set Required(required=""){
        this.#required=required;
    }

    get Required(){
        return this.#required;
    }

    get Type(){
       return this.#type;
    }
   
}

export default Input;