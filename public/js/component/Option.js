import Componente from "../class/componente.js";

class Option extends Componente{
    
    #value;

    constructor(text_des="",id="",name="",clase="",value=""){
        super(text_des,id,name,clase);
        this.#value=value;
    }

    crearOption(){
        return(
            `
            <option ${this.id_class_name} ${(this.#value!="")?`value="${this.#value}"`:``}>
              ${this.Text_des}
            </option>
            `
        )
    }
    

    get Value(){
        return this.#value;
    }

    set Value(value=""){
        this.#value=value;
    }
}

export default Option;