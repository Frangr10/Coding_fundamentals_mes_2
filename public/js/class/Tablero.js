import View from "./View.js";
import Div from "../component/Div.js";
import Boton from "./../component/Boton.js";
import Titulo from "../component/Titulo.js";
import logicaMatriz from "../function/LogicaMatriz.js";
import Data from "./Data.js";

class Tablero extends View{
    #jugador1;
    #jugador2;
    #numeroPieza;
    #ganador;
    #matriz;
    #botones;
    #volverMenu;
    #reiniciarPartida;
    #container;
    #turnos;
    #titulo;

    constructor(jugadores=[]){
        super();
        if(jugadores!=undefined&&Array.isArray(jugadores)){
            if(jugadores.length>0){
                this.#jugador1=jugadores[0];
                this.#jugador2=jugadores[1];
            }
        }
        this.#numeroPieza=0;
        this.#ganador={};
        this.#matriz=[];
        for(let i=0;i<9;i++){
            this.#matriz[i]=-1;
        }
        this.#botones=[];
        this.#titulo      =new Titulo(`${this.#jugador1.Nombre+" "+this.#jugador1.Puntos}-vs-${this.#jugador2.Nombre+" "+this.#jugador2.Puntos}`,'titulo_tablero',"",'titulo_home',1,"");
        for(let i=0;i<9;i++){
            this.#botones.push((new Boton(" ",`boton-${(i+1)}`,`${(i+1)}`,"activo","")));
        }
        this.#volverMenu=new Boton("volver Home","volver_menu","","boot","");
        this.#reiniciarPartida=new Boton("Reiniciar","Reinicio","","boot","");
        
        this.#container=new Div(`
          ${
              this.#botones.map((el)=>{ 
                return el.crearBoton();
              }).join("").toString()
          }
        `,"container_boton","","container_boton","");
        this.#turnos=1;
    }
    view(){
      return(
          `
          ${this.#titulo.crearTitulo()}
          ${this.#container.crearDiv()}
          ${this.#reiniciarPartida.crearBoton()}
          ${this.#volverMenu.crearBoton()}
          `
      )
    }

    event(){
      let tablero=document.querySelector(this.#container.G_Id);
      tablero.addEventListener("click",(e)=>{
          if(e.target.matches(this.#botones[0].P_Clase)){
              //Saber quien va primero y quien esta jugando
             let suma=(this.#jugador1.Turno==1?1:0);
             let respuesta=((this.#turnos+suma)%(this.#jugador1.Turno+suma)==0);
             let turnoJ=(respuesta)?1:2; 
             //console.log(suma,respuesta,turnoJ);
             this.#matriz[e.target.name-1]=turnoJ; 
             //colocar ficha
             e.target.innerHTML=(respuesta)?this.#jugador1.colocarFicha():this.#jugador2.colocarFicha();
             e.target.classList.add("cerrado");
             e.target.classList.remove("boot");
             e.target.
             this.#turnos++;
             //--
             //saber quien gano o si hay empate
             let resp=logicaMatriz(this.#matriz,turnoJ);
             let mensaje="";
             if(resp.status){
                 let lista=document.querySelectorAll(".activo");
                 lista.forEach((el)=>{
                     el.classList.remove("activo");
                     el.classList.add("cerrado")
                 });
                 mensaje=`Gano ${(respuesta)?this.#jugador1.Nombre:this.#jugador2.Nombre}`;
                 alert(mensaje);
                 if(respuesta){
                     this.#jugador1.Puntos++;
                 }else{
                     this.#jugador2.Puntos++;
                 }
                 Data.saveData((respuesta)?this.#jugador1.getData():this.#jugador2.getData(),"Jugador"+turnoJ);
                 document.querySelector(this.#titulo.G_Id).innerHTML=mensaje;
             }

             if((this.#turnos-1)==9&&resp.status==false){
                 mensaje=`Empante`;
                 alert(mensaje);
                 document.querySelector(this.#titulo.G_Id).innerHTML=mensaje;
             }
             //--
          }
      })
    }
    get Volver(){
        return this.#volverMenu.G_Id;
    }
    get Reiniciar(){
        return this.#reiniciarPartida.G_Id;
    }
    get Jugador1(){
        return this.#jugador1;
    }

    get Jugador2(){
        return this.#jugador2;
    }

    get NumeroPieza(){
        return this.#numeroPieza;
    }

    get Ganador(){
        return this.#ganador;
    }

    get Matriz(){
        return this.#matriz;
    }

}

export default Tablero;