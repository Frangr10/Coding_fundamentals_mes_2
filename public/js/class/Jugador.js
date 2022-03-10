import Pieza from "./Pieza.js";

class Jugador{
    //atributos
    #nombre;
    #puntos;
    #turno;
    #colorPieza;
    #ficha;

    constructor(nombre="",puntos=0,turno=0,colorPieza="",nameFicha=""){
        this.#nombre=nombre;
        this.#puntos=puntos;
        this.#turno=turno;
        this.#colorPieza=colorPieza;
        this.#ficha=new Pieza(nameFicha,this.ColorPieza,this.Turno);
    }
    
    //metodos
    sumarPuntos(){
        this.Puntos+=1;
    }
    colocarFicha(){
        return this.#ficha.crearPieza();
    }
    
    getData(){
        return {nombre:this.#nombre,
                puntos:this.#puntos,
                turnos:this.#turno,
                colorPieza:this.#colorPieza,
                nameFicha:this.#ficha.Url}
    }

    static cargarJugador(data={}){
        return new Jugador(data.nombre,data.puntos,data.turnos,data.colorPieza,data.nameFicha);
    }

    get Ficha(){
        return this.#ficha;
    }
    //set y get
    set Nombre(nombre=""){
        this.#nombre=nombre;
    }

    set Puntos(puntos=0){
        this.#puntos=puntos;
    }

    set Turno(turno=0){
        this.#turno=turno;
    }

    set ColorPieza(colorPieza=""){
        this.#colorPieza=colorPieza;
    }

    get Nombre(){
        return this.#nombre;
    }
    
    get Turno(){
        return this.#turno;
    }
    
    get Puntos(){
        return this.#puntos;
    }

    get ColorPieza(){
        return this.#colorPieza;
    }

}

export default Jugador;