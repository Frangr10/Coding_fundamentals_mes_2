class Componente{
    #text_des;
    #id;
    #name;
    #clase;
    #otrosAtributos;

    constructor(text_des="",id="",name="",clase="",otrosAtributos=""){
       this.#text_des=text_des;
       this.#id=id;
       this.#name=name;
       this.#clase=clase;
       this.#otrosAtributos=otrosAtributos;
    }
    
    get id_class_name(){
        return `${(this.#id!="")?`id="${this.#id}"`:``} ${(this.#clase!="")?`class="${this.#clase}"`:``} ${(this.#name!="")?`name="${this.#name}"`:""}`
    }

    get Id(){
        return `${(this.#id!="")?`${this.#id}`:``}`;
    }
    get G_Id(){
        return "#"+this.#id;
    }

    get Clase(){
        return `${(this.#clase!="")?`${this.#clase}`:``}`;
    }

    get P_Clase(){
        return "."+this.#clase;
    }

    get Text_des(){
        return `${(this.#text_des!="")?`${this.#text_des}`:``}`;
    }

    get Name(){
        return `${(this.#name!="")?`${this.#name}`:``}`;
    }

    get OtrosAtributos(){
        return `${(this.#otrosAtributos!="")?`${this.#otrosAtributos}`:``}`;
    }
    
    set Id(id=""){
        this.#id=id;
    }

    set Clase(clase=""){
        this.#clase=clase;
    }

    set Text_des(text_des=""){
        this.#text_des=text_des;
    }

    set Name(name=""){
        this.#name=name;
    }

    set OtrosAtributos(otrosAtributos=""){
        this.#otrosAtributos=otrosAtributos;
    }

}

export default Componente;