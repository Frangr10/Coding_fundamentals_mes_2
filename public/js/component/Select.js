import Componente from "../class/componente.js";
import Option from "./option.js";

class Select extends Componente{
    
    #required;
    #options;
    #des_value;//value == text_des en option

    constructor(text_des="",id="",name="",clase="",required="",otrosAtributos="",options=[],des_value=true){
        super("",id,name,clase,otrosAtributos);
        this.#required=required;
        this.#options=options; 
        this.#des_value=des_value;
    }

    crearSelect(){
            let nuevo=this.#options.map((el)=>{
                let aux=(new Option(
                     (this.#des_value)?((el.value!=undefined)?el.value:``):((el.text_des!=undefined)?el.text_des:``),
                     (el.id!=undefined)?el.id:``,
                     (el.name!=undefined)?el.name:``,
                     (el.clase!=undefined)?el.clase:``,
                     (el.value!=undefined)?el.value:``
                  ).crearOption())
                return aux;
            }).join("").toString()
        return(`
            <select ${this.id_class_name} ${this.OtrosAtributos} ${this.#required}>
               ${(nuevo)?nuevo:``}
            </select>
        `);
    }
    set Required(required=""){
        this.#required=required;
    }

    set Option(option=[]){
        this.#options=option;
    }
    
    get Option(){
        return this.#options;
    }

    get Required(){
        return this.#required;
    }

}

export default Select;